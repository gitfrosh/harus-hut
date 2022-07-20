import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mint from "./pages/Mint";
import Members from "./pages/Members";
import Proposals from "./pages/Proposals";
import Haru from "./pages/Haru";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useProvider, useContract } from "wagmi";
import { constants } from "./constants";
import { useEffect, useState } from "react";
import Info from "./pages/Info";

function App() {
  const { address, isConnected } = useAccount();
  const provider = useProvider();
  const [members, setMembers] = useState([]);
  const [isMember, setIsMember] = useState(false);

  const contract = useContract({
    addressOrName: constants.NFT_MEMBERSHIP_ADDRESS,
    contractInterface: constants.NFT_MEMBERSHIP_ABI,
    // @ts-ignore
    provider,
  });

  useEffect(() => {
    const fetchMembers = async () => {
      const members = await contract.connect(provider).getAllMembers();
      const memberAddresses = members.map((memberArray: any) => memberArray[0]);
      setMembers(memberAddresses);
      console.log(address);
      const isMember = memberAddresses?.includes(address);
      setIsMember(isMember);
    };

    if (contract && address) {
      fetchMembers().catch(console.error);
    }
  }, [contract, address]);

  return (
    <div className="terminal">
      <div className="container">
        <div className="terminal-nav">
          <header className="terminal-logo">
            <div className="logo terminal-prompt">
              <a href="/" className="no-style">
                Haru's Hut
              </a>
            </div>
          </header>
          <nav className="terminal-menu">
            <ul vocab="https://schema.org/" typeof="BreadcrumbList">
              <li>
                <a href="/" className="menu-item active">
                  <span>Home</span>
                </a>
              </li>
              {isConnected && !isMember ? (
                <li>
                  <a
                    href="/mint"
                    property="item"
                    typeof="WebPage"
                    className="menu-item"
                  >
                    <span property="name">Mint membership</span>
                  </a>
                </li>
              ) : null}
              <li>
                <a
                  href="/info"
                  property="item"
                  typeof="WebPage"
                  className="menu-item"
                >
                  <span property="name">More info</span>
                </a>
              </li>
              {isConnected && isMember ? (
                <>
                  <li property="itemListElement" typeof="ListItem">
                    <a
                      href="/members"
                      property="item"
                      typeof="WebPage"
                      className="menu-item"
                    >
                      <span property="name">Members</span>
                    </a>
                  </li>
                  <li property="itemListElement" typeof="ListItem">
                    <a
                      href="/proposals"
                      property="item"
                      typeof="WebPage"
                      className="menu-item"
                    >
                      <span property="propsals">Proposals</span>
                    </a>{" "}
                  </li>
                  <li property="itemListElement" typeof="ListItem">
                    <a
                      href="/haru"
                      property="item"
                      typeof="WebPage"
                      className="menu-item"
                    >
                      <span property="name">Gimme $HARU</span>
                    </a>
                  </li>
                </>
              ) : null}
              <li property="itemListElement" typeof="ListItem">
                <ConnectButton />
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home isMember={isMember} />} />
              <Route path="/info" element={<Info />} />
              <Route path="/mint" element={<Mint isMember={isMember} />} />
              <Route path="/members" element={<Members members={members} />} />
              <Route path="/proposals" element={<Proposals />} />
              <Route path="/haru" element={<Haru />} />
              <Route path="*" element={<>Not found.</>} />
            </Routes>
          </BrowserRouter>
        </div>

        <footer style={{ textAlign: "center", marginTop: "3rem" }}>
          <p>
            Built with &hearts; during{" "}
            <a
              href="https://hackfs.com/"
              target="_blank"
              rel="noopener noreferer"
            >
              ETH Global's HackFS hackathon
            </a>{" "}
            by{" "}
            <a
              href="https://github.com/gitfrosh"
              target="_blank"
              rel="noopener noreferer"
            >
              Rike
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

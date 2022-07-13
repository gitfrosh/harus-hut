import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mint from "./pages/Mint";
import Members from "./pages/Members";
import Proposals from "./pages/Proposals";
import Haru from "./pages/Haru";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useOwnedNFTs } from "@thirdweb-dev/react";
import { constants } from "./constants";
import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider((window as any).ethereum);
const signer = provider.getSigner();
const sdk = ThirdwebSDK.fromSigner(signer, "goerli");
const contract = sdk.getEdition(constants.NFT_MEMBERSHIP_NFT_ADDRESS);

function App() {
  const { address, isConnected } = useAccount();
  const { data: ownedNFTs } = useOwnedNFTs(contract, address);
  // const { data: totalCount } = useTotalCount(contract);
  // const totalCountNumber = (totalCount as BigNumber)?.toNumber();
  const isMember = (ownedNFTs?.length as number) > 0;

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
                      <span property="name">Proposals</span>
                    </a>
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
              <Route path="/mint" element={<Mint isMember={isMember} />} />
              <Route path="/members" element={<Members />} />
              <Route path="/proposals" element={<Proposals />} />
              <Route path="/haru" element={<Haru />} />
              <Route path="*" element={<>Not found.</>} />
            </Routes>
          </BrowserRouter>
        </div>

        <footer style={{ textAlign: "center", marginTop: "3rem" }}>
          <p>
            This project is inspired by
            <a
              href="https://egoist.sh/"
              target="_blank"
              rel="noopener noreferer"
            >
              @egoist's
            </a>
            work -
            <a href="https://github.com/egoist/hack" rel="noopener noreferer">
              hack.css
            </a>
          </p>
          <p>
            Version: 0.7.2 <a href="#menu">Top</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

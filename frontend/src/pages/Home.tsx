import React from "react";
import Connect from "../components/Connect";
import HelloMember from "../components/HelloMember";
import MintMembership from "../components/MintMembership";
import logo from "./../assets/haru-icon.png";
import { useAccount } from "wagmi";
import { Link } from "react-router-dom";

function Home({ isMember }: any) {
  const { isConnected } = useAccount();
  return (
    <div>
      <br />
      <section style={{ textAlign: "center" }}>
        <img alt="Hello, I'm Haru the Fox" src={logo} style={{ width: 200 }} />
      </section>

      <br />
      <br />
      <section>
        <div className="terminal-card">
          <header style={{ fontSize: "3rem", backgroundColor: "#1a95e0" }}>
            Haru's Hut
          </header>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "1.5rem" }}>
              A cozy DAO for people that don't know about DAOs
              <br /> (
              <em style={{ fontSize: "1.5rem" }}>but want to find out</em>).
              <br /> <br />
              <span style={{ color: "#727578" }}>It's free forever!</span>
            </h2>
          </div>
        </div>
        <br />
      </section>
      <section>
        <div>
          <details>
            <summary>
              <strong>What is a DAO?</strong>
            </summary>
            <div>
              In Web3, community is key. With DAOs (Decentralized autonomous
              organisations) like-minded people come together and build a space
              to think, work and decide on a common purpose. It is an
              organisation without central leadership.
            </div>
          </details>
          <details>
            <summary>
              <strong>Why should you join one?</strong>
            </summary>
            <div>
              DAOs are an excellent space to meet united people and try out new
              forms of collaborations.
            </div>
          </details>
          <details>
            <summary>
              <strong>Why should you join Haru's Hut?</strong>
            </summary>
            <div>
              DAOs usually build a treasury and act on real cryptocurrencies to
              make a difference (funding, donating, contracting, ..). Within
              Haru's Hut we don't use "real" Ether, because it is made purely
              for educational purposes.
            </div>
          </details>{" "}
          <details>
            <summary>
              <strong>How can it be for free? Must be a scam!!</strong>
            </summary>
            <div>
              In the Blockchain world, we have the possibility to build
              decentralized applications and smart contracts on testnets.
              Testnet coins don't have value and can be obtained from faucets -
              that makes Haru's Hut free of charge.
            </div>
          </details>
          <details>
            <summary>
              <strong>Who is Haru?</strong>
            </summary>
            <div>A cute fox inviting you to the Web3 world.</div>
          </details>
        </div>
      </section>
      <hr />
      <Connect />

      {isConnected && !isMember ? (
        <>
          <div>
            <em>
              <p>
                <strong>Ready to join Haru's Hut?</strong>
              </p>
              Being part of a DAO often starts with minting a membership NFT.
              Haru's Hut works the same! Connect your Web wallet (e.g. Metamask)
              and go to the <Link to="/mint">minting page</Link>, please.
            </em>
            <br /> <br />
          </div>
          <MintMembership />
          <div className="terminal-alert terminal-alert-error">
            That's scary! I need more info! :({" "}
            <Link to="/info">-- alrighty, we got you covered</Link>.
          </div>
        </>
      ) : null}

      {isConnected && isMember ? <HelloMember /> : null}
      <hr />
    </div>
  );
}
export default Home;

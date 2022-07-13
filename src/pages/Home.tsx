import React from "react";
import Connect from "../components/Connect";
import HelloMember from "../components/HelloMember";
import MintMembership from "../components/MintMembership";
import logo from "./../assets/haru-icon.png";
import { useAccount } from "wagmi";

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
            <div>Nothing special, I think you're pretty cool.</div>
          </details>
          <details>
            <summary>
              <strong>Why should you join one?</strong>
            </summary>
            <div>Nothing special, I think you're pretty cool.</div>
          </details>
          <details>
            <summary>
              <strong>Why should you join Haru's Hut?</strong>
            </summary>
            <div>Nothing special, I think you're pretty cool.</div>
          </details>{" "}
          <details>
            <summary>
              <strong>How can it be for free? Must be a scam!!</strong>
            </summary>
            <div>Nothing special, I think you're pretty cool.</div>
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
      {isConnected && !isMember ? <MintMembership /> : null}
      {isConnected && isMember ? <HelloMember /> : null}
      <hr />
      <section>
        <header>
          <h2 id="Timeline">How to be part of Haru's Hut?</h2>
        </header>
        <div className="terminal-timeline">
          <div className="terminal-card">
            <header style={{ backgroundColor: "var(--primary-color)" }}>
              Connect your wallet
            </header>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Expedita, quas ex vero enim in doloribus officiis ullam vel nam
              esse sapiente velit incidunt. Eaque quod et, aut maiores excepturi
              sint.
              <details>
                <summary>
                  <strong>How to get a Wallet</strong>
                </summary>
                <div>Nothing special, I think you're pretty cool.</div>
              </details>
            </div>
          </div>
          <div className="terminal-card">
            <header style={{ backgroundColor: "var(--primary-color)" }}>
              Mint your membership NFT
            </header>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Expedita, quas ex vero enim in doloribus officiis ullam vel nam
              esse sapiente velit incidunt. Eaque quod et, aut maiores excepturi
              sint.
              <details>
                <summary>
                  <strong>What is an ERC271 token?</strong>
                </summary>
                <div>Nothing special, I think you're pretty cool.</div>
              </details>
            </div>
          </div>

          <div className="terminal-card">
            <header style={{ backgroundColor: "var(--primary-color)" }}>
              Mint some $HARU to be part of the community
            </header>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Expedita, quas ex vero enim in doloribus officiis ullam vel nam
              esse sapiente velit incidunt. Eaque quod et, aut maiores excepturi
              sint.
              <details>
                <summary>
                  <strong>What is an ERC20 token?</strong>
                </summary>
                <div>Nothing special, I think you're pretty cool.</div>
              </details>
            </div>
          </div>
          <div className="terminal-card">
            <header style={{ backgroundColor: "var(--primary-color)" }}>
              Vote on proposals
            </header>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Expedita, quas ex vero enim in doloribus officiis ullam vel nam
              esse sapiente velit incidunt. Eaque quod et, aut maiores excepturi
              sint.
            </div>
          </div>
          <div className="terminal-card">
            <header style={{ backgroundColor: "var(--primary-color)" }}>
              Create a proposal
            </header>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Expedita, quas ex vero enim in doloribus officiis ullam vel nam
              esse sapiente velit incidunt. Eaque quod et, aut maiores excepturi
              sint.
            </div>
          </div>
          <div className="terminal-card">
            <header style={{ backgroundColor: "var(--primary-color)" }}>
              Mint more $HARU
            </header>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Expedita, quas ex vero enim in doloribus officiis ullam vel nam
              esse sapiente velit incidunt. Eaque quod et, aut maiores excepturi
              sint.
            </div>
          </div>
        </div>
        <br />
      </section>
      <hr />
    </div>
  );
}
export default Home;

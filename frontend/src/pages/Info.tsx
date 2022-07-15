import React from "react";

function Info() {
  return (
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
            quas ex vero enim in doloribus officiis ullam vel nam esse sapiente
            velit incidunt. Eaque quod et, aut maiores excepturi sint.
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
            quas ex vero enim in doloribus officiis ullam vel nam esse sapiente
            velit incidunt. Eaque quod et, aut maiores excepturi sint.
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
            quas ex vero enim in doloribus officiis ullam vel nam esse sapiente
            velit incidunt. Eaque quod et, aut maiores excepturi sint.
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
            quas ex vero enim in doloribus officiis ullam vel nam esse sapiente
            velit incidunt. Eaque quod et, aut maiores excepturi sint.
          </div>
        </div>
        <div className="terminal-card">
          <header style={{ backgroundColor: "var(--primary-color)" }}>
            Create a proposal
          </header>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
            quas ex vero enim in doloribus officiis ullam vel nam esse sapiente
            velit incidunt. Eaque quod et, aut maiores excepturi sint.
          </div>
        </div>
        <div className="terminal-card">
          <header style={{ backgroundColor: "var(--primary-color)" }}>
            Mint more $HARU
          </header>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
            quas ex vero enim in doloribus officiis ullam vel nam esse sapiente
            velit incidunt. Eaque quod et, aut maiores excepturi sint.
          </div>
        </div>
      </div>
      <br />
    </section>
  );
}
export default Info;

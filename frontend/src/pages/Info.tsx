import React from "react";

function Info() {
  return (
    <section>
      <hr />
      <header>
        <h2 id="Timeline">How to be part of Haru's Hut?</h2>
      </header>
      <div className="terminal-timeline">
        <div className="terminal-card">
          <header style={{ backgroundColor: "var(--primary-color)" }}>
            Connect your wallet
          </header>
          <div>
            A crypto wallet acts as an user account for the Blockchain (and
            often Ethereum) Web3 world. Wjhen you are accessing a decentralized
            app (dApp) you will be often asked to connect your wallet. It's
            similar to signing in with email/password except that you are using
            your Ethereum address and can make transactions with your stored
            crypto coins.
            <details>
              <summary>
                <strong>How to get a Wallet</strong>
              </summary>
              <div>
                We recommend <a href="https://metamask.io/">MetaMask</a> as your
                crypto wallet provider. You can download it as a browser
                extension for free.
              </div>
            </details>
            <details>
              <summary>
                <strong>How to get coins for transactions</strong>
              </summary>
              <div>
                Haru's Hut is running on Ethereum's sidechain Polygon and in
                that ecosystem on testnet Mumbai. Coins for Mumbai can be
                obtained via <a href="https://mumbaifaucet.com/">this faucet</a>
                . Just insert yor wallet address (see Metamask) and get Matic
                sent.
              </div>
            </details>
          </div>
        </div>
        <div className="terminal-card">
          <header style={{ backgroundColor: "var(--primary-color)" }}>
            Mint your membership NFT
          </header>
          <div>
            The cute Haru the Fox NFT grants you membership to Haru's Hut DAO.
            It's your entry ticket to our community.
            <details>
              <summary>
                <strong>What is an ERC271 token?</strong>
              </summary>
              <div>
                The Ethereum community has adopted many standards so that
                implementations for typical use cases (e.g. NFTs) remain
                composable and interoperable across the ecosystem. ERC721 is the
                standard for Non-fungible tokens (NFTs).
              </div>
            </details>
          </div>
        </div>

        <div className="terminal-card">
          <header style={{ backgroundColor: "var(--primary-color)" }}>
            Mint some $HARU to act as part of the community
          </header>
          <div>
            In Ethereum everyone (and every community) can issue its own native
            token. In DAOs these tokens are used to give members voting power to
            decide on proposals.
            <details>
              <summary>
                <strong>What is an ERC20 token?</strong>
              </summary>
              <div>
                Like other token standards the ERC0 token standard manages how
                fungible tokens behave in the Ethereum ecosystem.
              </div>
            </details>
          </div>
        </div>
        <div className="terminal-card">
          <header style={{ backgroundColor: "var(--primary-color)" }}>
            Create a proposal
          </header>
          <div>
            All the community members can create proposals about the future
            operations of the protocol, e.g. funding requests.
          </div>
        </div>
        <div className="terminal-card">
          <header style={{ backgroundColor: "var(--primary-color)" }}>
            Vote on proposals
          </header>
          <div>
            Decisions are based on which proposals gain the relative majority of
            votes. The key factor is how many voters have voted ‘for’ and
            ‘against’ a proposal.
          </div>
        </div>
      </div>
      <br />
    </section>
  );
}
export default Info;

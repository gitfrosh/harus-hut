import React from "react";
import { Link } from "react-router-dom";
import { useNetwork } from "wagmi";

function MintMembership() {
  const { chain } = useNetwork();
  console.log(chain);

  const Button = () => {
    if (chain?.id !== 80001) {
      return (
        <div className="terminal-alert terminal-alert-warning">
          Please switch to Polygon Mumbai testnet first. :)
        </div>
      );
    }
    return (
      <div className="form-group">
        <Link to="/mint">
          <button className="btn btn-default btn-block">
            Mint your Membership NFT now!
          </button>
        </Link>
      </div>
    );
  };

  return (
    <section>
      <Button />
    </section>
  );
}
export default MintMembership;

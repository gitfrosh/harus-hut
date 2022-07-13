import React from "react";
import { Link } from "react-router-dom";

function MintMembership() {
  return (
    <section>
      <div>
        <em>
          <strong>Ready to join Haru's Hut?</strong>
          <br />
          Being part of a DAO often starts with minting a membership NFT. Haru's
          Hut works the same!
        </em>
        <br /> <br />
      </div>

      <div className="form-group">
        <Link to="/mint">
          <button className="btn btn-default btn-block">
            Mint your Membership NFT now!
          </button>
        </Link>
      </div>
    </section>
  );
}
export default MintMembership;

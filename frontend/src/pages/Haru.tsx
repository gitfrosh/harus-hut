import React from "react";
import { useContract, useSigner, useAccount } from "wagmi";
import { constants } from "../constants";
import { ethers } from "ethers";

function Haru() {
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: constants.TOKEN_ADDRESS,
    contractInterface: constants.TOKEN_ABI,
  });

  const mint = async (event: any) => {
    console.log(event.target[0].value);
    event.preventDefault();
    const amount = event.target[0].value;
    const tx = await contract
      .connect(signer)
      .claim(ethers.utils.parseEther(amount.toString()));
    // const tx = await contract.connect(signer).balanceOf(address);
    console.log(tx);
  };

  return (
    <section>
      <hr />
      <h2 id="Proposals">Gimme $HARU</h2>
      <div style={{ textAlign: "center" }}>
        <p>
          <em>$HARU is the DAO's native token. Obtain them here!</em>
        </p>
      </div>
      <form onSubmit={mint}>
        <div className="form-group">
          <label htmlFor="text">Amount</label>
          <input
            id="text"
            name="text"
            type="number"
            required
            placeholder="20"
          />
        </div>
        <div className="form-group">
          <button
            role="button"
            type="submit"
            className="btn btn-default btn-block"
          >
            Mint!
          </button>
        </div>
      </form>
    </section>
  );
}
export default Haru;

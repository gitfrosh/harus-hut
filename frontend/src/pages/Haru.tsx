import React from "react";
import { useContract, useSigner, useAccount } from "wagmi";
import { constants } from "../constants";
import { ethers } from "ethers";

function Haru() {
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: constants.NFT_TOKEN_ADDRESS,
    contractInterface: constants.NFT_TOKEN_ABI,
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
      <h2 id="Proposals">Gimme $HARU</h2>
      <div style={{ textAlign: "center" }}>
        <p>
          <em>Time is Galleons, little brother. </em>
        </p>
      </div>
      <form onSubmit={mint}>
        <legend>Yesss.</legend>
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

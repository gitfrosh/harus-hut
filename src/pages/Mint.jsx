import { useAccount } from "wagmi";
import { constants } from "../constants";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useClaimNFT } from "@thirdweb-dev/react";
import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const sdk = ThirdwebSDK.fromSigner(signer, "goerli");

function Mint({ isMember }) {
  const { address, isConnected } = useAccount();
  const contract = sdk.getEditionDrop(constants.NFT_MEMBERSHIP_NFT_ADDRESS);
  const claimNFT = useClaimNFT(contract);

  const mint = async () => {
    if (!address) return;
    claimNFT.mutate(
      { to: address, quantity: 1, tokenId: 0 },
      {
        onSuccess: () => {
          console.log("Successfully minted!");
        },
        onError: (err) => {
          console.error("Failed to mint NFT", err);
        },
      }
    );
  };

  if (!isConnected || !address) {
    return <section>Please connect your wallet first. </section>;
  }

  if (isConnected && isMember) {
    return <section>You are already member of the DAO! Congrats!</section>;
  }

  return (
    <section>
      <button
        className="btn btn-default"
        // disabled={isLoading}
        onClick={mint}
      >
        Mint!
      </button>
    </section>
  );
}
export default Mint;

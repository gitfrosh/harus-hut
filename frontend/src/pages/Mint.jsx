import { useContract, useSigner, useNetwork, useAccount } from "wagmi";
import { constants } from "../constants";
import fleekStorage from "@fleekhq/fleek-storage-js";
import { v4 as uuidv4 } from "uuid";

const baseURI = "https://ipfs.fleek.co/ipfs";
const { REACT_APP_FLEEK_KEY, REACT_APP_FLEEK_SECRET } = process.env;

function Mint({ isMember }) {
  const { chain } = useNetwork();
  const { address, isConnected } = useAccount();
  const { data: signer } = useSigner();

  const contract = useContract({
    addressOrName: constants.NFT_MEMBERSHIP_ADDRESS,
    contractInterface: constants.NFT_MEMBERSHIP_ABI,
    signer,
  });

  const createKey = async () => {
    const newTokenId = uuidv4();
    return Buffer.from(`${address}-${newTokenId}`, "binary").toString("base64");
  };

  const mint = async () => {
    console.log(REACT_APP_FLEEK_SECRET, REACT_APP_FLEEK_KEY);
    if (!address || !REACT_APP_FLEEK_SECRET || !REACT_APP_FLEEK_KEY) return;
    const key = await createKey();

    const hash = "bafybeiffgn6np3qbh4kvfyugixrdw3lcxsbalu3u7pst2idhlye7fj5o3q";
    const publicUrl =
      "https://storageapi.fleek.co/3eea4509-9e8c-402f-9952-904956288853-bucket/haru-icon.png";

    const metadata = {
      description: "A collection of proudly minted Haru's Hut NFTs.",
      external_url: publicUrl,
      image: `${baseURI}/${hash}`,
      name: `Haru's Hut Member`,
    };

    console.log(metadata);
    const metadataURI = await fleekStorage.upload({
      apiKey: REACT_APP_FLEEK_KEY,
      apiSecret: REACT_APP_FLEEK_SECRET,
      key: key,
      data: Buffer.from(JSON.stringify(metadata)),
    });

    console.log(metadataURI);
    const tx = await contract
      .connect(signer)
      .mintNFT(`${baseURI}/${metadataURI.hash}`);
    const result = await tx.wait();
    console.log(result);
  };

  if (!isConnected || !address) {
    return (
      <section>
        <hr />
        Please connect your wallet first.{" "}
      </section>
    );
  }

  if (isConnected && isMember) {
    return (
      <section>
        <hr />
        You are already member of the DAO! Congrats!
      </section>
    );
  }

  const Button = () => {
    if (chain?.id !== 80001) {
      return (
        <div className="terminal-alert terminal-alert-error">
          Please switch to Polygon Mumbai testnet first. :)
        </div>
      );
    }
    return (
      <button
        className="btn btn-default btn-block"
        // disabled={isLoading}
        onClick={mint}
      >
        Mint!
      </button>
    );
  };

  return (
    <section>
      <hr />
      <div>
        <em>
          <header>
            <h2>Ready to join Haru's Hut?</h2>
          </header>
          Being part of a DAO often starts with minting a membership NFT. Haru's
          Hut works the same!
        </em>
        <br /> <br />
      </div>
      <Button />
    </section>
  );
}
export default Mint;

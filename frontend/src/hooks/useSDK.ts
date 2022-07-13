import { useSigner } from "wagmi";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useEffect, useState } from "react";
import { constants } from "../constants";

export const useSDK = () => {
  const { data: signer } = useSigner();
  const [sdk, setSDK] = useState<any>();
  const [edition, setEdition] = useState<any>();
  useEffect(() => {
    if (signer) {
      const sdk = ThirdwebSDK.fromSigner(signer, "goerli");
      setSDK(sdk);
    }
  }, [signer]);

  useEffect(() => {
    if (sdk) {
      const edition = sdk.getEditionDrop(constants.NFT_MEMBERSHIP_NFT_ADDRESS);
      setEdition(edition);
    }
  }, [sdk]);
  return { sdk: sdk, contract: edition };
};

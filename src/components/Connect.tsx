import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

function Connect() {
  const { isConnected } = useAccount();

  return (
    <div style={{ textAlign: "center" }}>
      {!isConnected ? <ConnectButton /> : null}
    </div>
  );
}
export default Connect;

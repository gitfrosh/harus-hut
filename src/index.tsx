import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "terminal.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import App from "./App";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const { chains, provider, webSocketProvider } = configureChains(
  [chain.goerli],
  [
    alchemyProvider({ alchemyId: "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit demo",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ThirdwebProvider desiredChainId={ChainId.Goerli}>
          <App />
        </ThirdwebProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

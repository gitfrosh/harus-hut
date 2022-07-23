# Haru's Hut DAO

This project was built by Rike during the 2022 [HackFS](https://fs.ethglobal.com/).

Deployed to [Spheron](https://harus-hut-gklrb.spheron.app/)!

## Get it started

### Frontend
This project is built with create-react-app and react-app-rewired. It stores community membership NFTs on IPFS/Fleek/Filecoin. Required secrets are `REACT_APP_FLEEK_KEY`, `REACT_APP_FLEEK_SECRET`, make sure they are added to `.env` for local run

#### `yarn install`
Install dependencies.

#### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Backend
This application is built with Solidity/Hardhat on EVM. It uses Alchemy (ALCHEMY_KEY, ..) as a connector node provide and needs your PRIVATE_KEY for deploying. Make sure secrets are added to `.env`. The smart contracts are deployed to Polygon's testnet Mumbai.

#### `npm install`
Install dependencies.

#### `npx hardhat run scripts/deploy.js --network mumbai`
Deploy your smart contract. 

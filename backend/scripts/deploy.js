const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('HaruNFT');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  const nftContractAddress = nftContract.address;
  console.log("NFT Contract deployed to:", nftContractAddress);


  const tokenContractFactory = await hre.ethers.getContractFactory('HaruToken');
  const tokenContract = await tokenContractFactory.deploy(nftContractAddress);
  await tokenContract.deployed();
  console.log("Token Contract deployed to:", tokenContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
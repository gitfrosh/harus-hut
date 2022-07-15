const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory("HaruNFT");
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);

    // Call the function.
    const txn = await nftContract.mint();
    await txn.wait();
    console.log(txn);
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

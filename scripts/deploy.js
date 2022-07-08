const { ethers } = require("hardhat");

const main = async() => {
  const [deployer] = await ethers.getSigners();

  const Sign = await ethers.getContractFactory("verifyDS");
  const sign = await Sign.deploy();

  console.log("Token address:", sign.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const name = "Uniswap Token";
  const symbol = "UTok";
  const initialSupply = 100000000000;

  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy(name, symbol, initialSupply);

  await token.deployed();

  console.log(`Token address ${token.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

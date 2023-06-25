const hre = require("hardhat");

const tokenAddr = "0x87D3E2C614Cf2a295c808BEbfA5D1f85571C21ca";
const ethVal = ethers.BigNumber.from("10000000000000000");

async function main() {
  const Uniswap = await hre.ethers.getContractFactory("Uniswap");
  const uniswap = await Uniswap.deploy(tokenAddr, ethVal);

  await uniswap.deployed();

  console.log(`uniswap deployed to ${uniswap.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

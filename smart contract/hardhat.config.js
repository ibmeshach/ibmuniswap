require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: "",
      accounts: [""],
    },
    sepolia: {
      url: "", // Replace with the Sepolia network URL
      accounts: [""],
    },
  },
};

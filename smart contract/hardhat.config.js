require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/KjIyL5pzAAWGDoNW5_ipFwr6i9fO1jox",
      accounts: [
        "a52094fb0102930bb9616069fb1f069e33c15aad41cf2ca52e396e1901bad503",
      ],
    },
    // sepolia: {
    //   url: "", // Replace with the Sepolia network URL
    //   accounts: [""],
    // },
  },
};

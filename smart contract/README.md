# DUNISWAP_EXCHANGE Contract

The DUNISWAP_EXCHANGE contract is a decentralized exchange contract that allows users to swap Ethereum and custom tokens.

## Prerequisites

Before using the contract, make sure you have the following:

- A compatible Ethereum development environment or client.
- The necessary dependencies installed.

## Getting Started

To get started with the DUNISWAP_EXCHANGE contract, follow these steps:

1. Clone the repository:

2. Install the required dependencies:

3. Compile the Solidity contract using a compatible Solidity compiler.

4. Deploy the contract to an Ethereum network of your choice.

## Contract Overview

The DUNISWAP_EXCHANGE contract consists of the following components:

- **CustomToken**: A custom ERC20 token contract used for token representation and transfers.

### Contract Deployment

To deploy the contract, follow these steps:

1. Deploy the `CustomToken` contract using the desired token name and symbol.

2. Deploy the `DUNISWAP_EXCHANGE` contract.

3. Initialize the `DUNISWAP_EXCHANGE` contract by creating instances of `CustomToken` for each supported token, setting token names, symbols, and initial balances.

### Contract Functions

The DUNISWAP_EXCHANGE contract provides the following functions:

- `getBalance(string memory tokenName, address _address)`: Retrieves the balance of a specific token for a given address.
- `getTotalSupply(string memory tokenName)`: Retrieves the total supply of a specific token.
- `getName(string memory tokenName)`: Retrieves the name of a specific token.
- `getTokenAddress(string memory tokenName)`: Retrieves the address of a specific token contract.
- `getEthBalance()`: Retrieves the ETH balance of the contract.
- `swapEthToToken(string memory tokenName)`: Allows users to swap ETH for a specific token.
- `swapTokenToEth(string memory tokenName, uint256 _amount)`: Allows users to swap a specific token for ETH.
- `swapTokenToToken(string memory srcTokenName, string memory destTokenName, uint256 _amount)`: Allows users to swap one token for another.

Please note that additional validation and error handling may be required to enhance the security and reliability of the contract.

## License

This contract is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgments

- This contract was developed using the OpenZeppelin library.

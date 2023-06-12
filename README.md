# Uniswap Exchange Contract & Frontend

This repository contains a Solidity contract for an Uniswap exchange, along with a frontend application that interacts with the contract. The contract allows users to seamlessly swap between ETH and ERC20 tokens, while the frontend provides a user-friendly interface to interact with the contract functionalities.

## Contract Features

- `addLiquidity`: Allows users to provide liquidity to the exchange by depositing ERC20 tokens.
- `getReserve`: Retrieves the current token reserve balance in the contract.
- `getTokenAmount`: Calculates the amount of tokens that can be purchased with a specified amount of ETH.
- `getEthAmount`: Calculates the amount of ETH that can be obtained by selling a specified amount of tokens.
- `ethToTokenSwap`: Enables users to swap ETH for tokens.
- `tokenToEthSwap`: Enables users to swap tokens for ETH.

## Frontend Features

- User-friendly interface to interact with the Uniswap exchange contract.
- Display of current token reserves and real-time pricing.
- Liquidity provision form to add liquidity to the exchange.
- Swap form to easily swap between ETH and tokens.

## Getting Started

### Prerequisites

- Solidity ^0.8.9
- OpenZeppelin library for ERC20 token standard
- Node.js
- npm or yarn

### Installation

1. Clone the repository: `git clone [repository URL]`
2. Install dependencies for the contract: `cd contract && npm install`
3. Deploy the contract by specifying the token address in the constructor.
4. Install dependencies for the frontend: `cd ../frontend && npm install`

### Usage

1. Start the client application:
   - In the `frontend` directory, run `npm start`.
   - Access the application in your web browser at `http://localhost:3000`.

2. Interact with the Uniswap exchange contract:
   - Use the user-friendly interface provided by the frontend application to:
     - Add liquidity by depositing ERC20 tokens.
     - View current token reserves and pricing information.
     - Swap between ETH and tokens by specifying the desired amounts.
     - Monitor transaction history and account details.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request with any improvements or additional features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CustomToken is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, 1000 * 10 ** 18);
    }
}

contract DUNISWAP_EXCHANGE {
    string[] public tokenSymbol = [
        "Diamund Uniswap",
        "POLYGON",
        "SOLANA",
        "BINANCE"
    ];
    string[] public tokens = ["DUNI", "MATIC", "SOL", "BNB"];
    uint256[] public tokensVal = [
        100000000000000,
        300000000000000,
        230000000000000,
        440000000000000
    ];

    mapping(string => ERC20) public tokenInstanceMap;
    mapping(string => uint256) public tokenEthValue;

    constructor() {
        for (uint i = 0; i < tokens.length; i++) {
            CustomToken token = new CustomToken(tokens[i], tokens[i]);
            tokenInstanceMap[tokens[i]] = token;
            tokenEthValue[tokens[i]] = tokensVal[i];
        }
    }

    function getBalance(
        string memory tokenName,
        address _address
    ) public view returns (uint256) {
        return tokenInstanceMap[tokenName].balanceOf(_address);
    }

    function getTotalSupply(
        string memory tokenName
    ) public view returns (uint256) {
        return tokenInstanceMap[tokenName].totalSupply();
    }

    function getName(
        string memory tokenName
    ) public view returns (string memory) {
        return tokenInstanceMap[tokenName].name();
    }

    function getTokenAddress(
        string memory tokenName
    ) public view returns (address) {
        return address(tokenInstanceMap[tokenName]);
    }

    function getEthBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function swapEthToToken(
        string memory tokenName
    ) public payable returns (uint256) {
        uint256 inputValue = msg.value;
        uint256 outputValue = (inputValue / tokenEthValue[tokenName]) *
            10 ** 18; // Convert to 18 decimal places
        require(tokenInstanceMap[tokenName].transfer(msg.sender, outputValue));
        return outputValue;
    }

    function swapTokenToEth(
        string memory tokenName,
        uint256 _amount
    ) public returns (uint256) {
        // Convert the token amount (ethValue) to exact amount (10)
        uint256 exactAmount = _amount / 10 ** 18;
        uint256 ethToBeTransferred = exactAmount * tokenEthValue[tokenName];
        require(
            address(this).balance >= ethToBeTransferred,
            "Dex is running low on balance."
        );

        payable(msg.sender).transfer(ethToBeTransferred);
        require(
            tokenInstanceMap[tokenName].transferFrom(
                msg.sender,
                address(this),
                _amount
            )
        );
        return ethToBeTransferred;
    }

    function swapTokenToToken(
        string memory srcTokenName,
        string memory destTokenName,
        uint256 _amount
    ) public {
        require(
            tokenInstanceMap[srcTokenName].transferFrom(
                msg.sender,
                address(this),
                _amount
            )
        );
        require(tokenInstanceMap[destTokenName].transfer(msg.sender, _amount));
    }
}

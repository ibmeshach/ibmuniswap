// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Token.sol";

contract Uniswap {
    Token private tokenInstanceMap;

    uint256 public ethValue;

    constructor(address addr, uint256 tokenVal) {
        tokenInstanceMap = Token(address(addr));

        ethValue = tokenVal;
    }

    function getBalance(
        string memory tokenName,
        address _address
    ) public view returns (uint256) {
        return tokenInstanceMap.balanceOf(_address);
    }

    function getTotalSupply(
        string memory tokenName
    ) public view returns (uint256) {
        return tokenInstanceMap.totalSupply();
    }

    function getName(
        string memory tokenName
    ) public view returns (string memory) {
        return tokenInstanceMap.name();
    }

    function getTokenAddress(
        string memory tokenName
    ) public view returns (address) {
        return address(tokenInstanceMap);
    }

    function getEthBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function swapEthToToken(
        string memory tokenName
    ) public payable returns (uint256) {
        uint256 inputValue = msg.value;
        uint256 outputValue = (inputValue / ethValue) * 10 ** 18; // Convert to 18 decimal places
        require(tokenInstanceMap.transfer(msg.sender, outputValue));
        return outputValue;
    }

    function swapTokenToEth(
        string memory tokenName,
        uint256 _amount
    ) public returns (uint256) {
        // Convert the token amount (ethValue) to exact amount (10)
        uint256 exactAmount = _amount / 10 ** 18;
        uint256 ethToBeTransferred = exactAmount * ethValue;
        require(
            address(this).balance >= ethToBeTransferred,
            "Insufficent balance."
        );

        payable(msg.sender).transfer(ethToBeTransferred);
        require(
            tokenInstanceMap.transferFrom(msg.sender, address(this), _amount)
        );
        return ethToBeTransferred;
    }

    function swapTokenToToken(
        string memory srcTokenName,
        string memory destTokenName,
        uint256 _amount
    ) public {
        require(
            tokenInstanceMap.transferFrom(msg.sender, address(this), _amount),
            "TransferFrom failed."
        );
        require(
            tokenInstanceMap.transfer(msg.sender, _amount),
            "Transfer failed."
        );
    }
}

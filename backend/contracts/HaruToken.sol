// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IHaruNFT.sol";
import "hardhat/console.sol";

contract HaruToken is ERC20, Ownable {
    // Price of one Crypto Dev token
    uint256 public constant tokenPrice = 0.001 ether;
    // Each NFT would give the user 10 tokens
    // It needs to be represented as 10 * (10 ** 18) as ERC20 tokens are represented by the smallest denomination possible for the token
    // By default, ERC20 tokens have the smallest denomination of 10^(-18). This means, having a balance of (1)
    // is actually equal to (10 ^ -18) tokens.
    // Owning 1 full token is equivalent to owning (10^18) tokens when you account for the decimal places.
    uint256 public constant tokensPerNFT = 10 * 10**18;
    // the max total supply is 50000 for Sickles
    uint256 public constant maxTotalSupply = 50000 * 10**18;

    IHaruNFT HaruNFT;
    // Mapping to keep track of which tokenIds have been claimed
    mapping(uint256 => bool) public tokenIdsClaimed;

    constructor(address _haruContract) ERC20("Haru's Hut Governance Token", "HARU") {
       HaruNFT = IHaruNFT(_haruContract);
    }

    function claim(uint256 amount) public {
        address sender = msg.sender;
        uint256 balance = HaruNFT.balanceOf(sender);
        // If the balance is zero, revert the transaction
        require(balance > 0, "You dont own a HaruNFT");
        console.log(maxTotalSupply);
        console.log(totalSupply()); // always 0 in testnet
        console.log("member claims ", amount);

         _mint(msg.sender, amount);
        HaruNFT.setHaru(msg.sender, amount);
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}
}

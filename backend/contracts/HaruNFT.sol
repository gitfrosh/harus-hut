pragma solidity 0.8.9;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import {SharedStructs} from "./libraries/SharedStructs.sol";
import {Base64} from "./libraries/Base64.sol";

contract HaruNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    SharedStructs.Member[] public members;

    mapping(address => bool) public isMember;
    mapping(address => SharedStructs.Member) ownerToMember;

    event NewMember(uint256 memberId, address wallet, uint256 memberTokenId);

    constructor() ERC721("HarusHutNFT", "HARUSHUT") {}

    function setHaru(address owner, uint256 amount) public {
        uint256 haru = ownerToMember[owner].haru;
        ownerToMember[owner].haru = haru + amount;
        console.log("haru of this member ", ownerToMember[owner].haru);
    }

    function getAllMembers()
        public
        view
        returns (SharedStructs.Member[] memory)
    {
        return members;
    }

    function getMemberByOwner(address owner)
        public
        view
        returns (
            address,
            uint256,
            uint256
        )
    {
        SharedStructs.Member memory member = ownerToMember[owner];
        return (member.wallet, member.memberTokenId, member.haru);
    }

    function mintNFT(string memory metadataURI) public returns (uint256) {
        require(!isMember[msg.sender], "Sender is already member.");
        // string memory hashtag = "Haru's Hut Member #";
        uint256 newItemId = _tokenIds.current();
        // string memory memberNumber = Strings.toString(newItemId);

        _safeMint(msg.sender, newItemId);

        _setTokenURI(newItemId, metadataURI);

        _tokenIds.increment();
        console.log(
            "An NFT w/ ID %s has been minted to %s",
            newItemId,
            msg.sender
        );
        members.push(SharedStructs.Member(msg.sender, newItemId, 0));
        isMember[msg.sender] = true;
        console.log("is member", isMember[msg.sender]);
        uint256 _id = members.length - 1;
        emit NewMember(_id, msg.sender, newItemId);
        return newItemId;
    }

    // The following functions are overrides required by Solidity.
    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;
import {SharedStructs} from "./libraries/SharedStructs.sol";

interface IHaruNFT {
    /**
     * @dev Returns a token ID owned by `owner` at a given `index` of its token list.
     * Use along with {balanceOf} to enumerate all of ``owner``'s tokens.
     */
    function getMemberByOwner(address owner)
        external
        view
        returns (address, uint, uint256, bool);

    /**
     * @dev Returns the number of tokens in ``owner``'s account.
     */
    function balanceOf(address owner) external view returns (uint256 balance);

    function setHaru (address owner, uint256 amount) external;

}
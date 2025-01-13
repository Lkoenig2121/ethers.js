// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
         
contract MyContract {
    // Declaring a state variable
    string public hi = "Hello World"; // Fixed the closing quote
         
    // Declaring a function
    function hello() external view returns (string memory) {
        // Returning the string variable 'hi'
        return hi;
    }
}
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Fibonacci {
    function generateSequence(uint length) public pure returns (uint[] memory sequence){
        require(length >0);
        require(length < 100);
        sequence = new uint[](length);
        sequence[0] = 0;
        if(length ==1) return sequence;
        sequence[1] = 1;

        uint i= 2;

        while(i<length){
            sequence[i] = sequence[i-1] + sequence[i-2];
            i++;
        }
        return sequence;
    }
}
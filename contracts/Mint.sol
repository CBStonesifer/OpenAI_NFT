pragma solidity ^0.8.15;

contract Mint {
    uint public count;

    function increment() public {
        count ++;
    }

    function decrement() public {
        count --;
    }

    function getCount() public view returns(uint){
        return count;
    }
}
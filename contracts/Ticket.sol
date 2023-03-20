// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Tickets{

    mapping(address => uint) myTickets;
    uint256 public totalTix;
    uint256 public ticketPrice;
    address payable public venue;

    constructor () payable {
        venue = payable(msg.sender);
        totalTix = 200;
        ticketPrice = 1 ether;
    }


    //buy tickets
    function buy(uint256 numTix) public payable notOwner{
        // set a value to buy your tickets for
        require(msg.value == ticketPrice*numTix);
        (bool sent, ) = venue.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
        require(totalTix > 0, "No tickets are available");
        myTickets[msg.sender] += numTix;
        totalTix -= numTix;
    }

    function getMyTickets() public view returns(uint256){
        return myTickets[msg.sender];
    }

    modifier notOwner(){
        require(msg.sender != venue, "Tickets are for customers only");
        _;
    }
}
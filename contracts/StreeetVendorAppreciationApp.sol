// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract StreeetVendorAppreciationApp is ERC721URIStorage {

  using Counters for Counters.Counter;
  Counters.Counter public _totalNFTs;
  uint public _totalVendors = 0;
  mapping(uint => vendorClass) public allVendors;
  mapping(uint => reviewClass) public allReviews;

  struct vendorClass {
    uint id;
    string cid;
    uint donationTarget;
    uint totalDonations;
    address organizer;
    // reviews jas ti be an array
    // reviews array =>
    // [
    //   {wallet address, id, cid},
    //   {wallet address, id, cid},
    // ]
  }


  struct reviewClass {
    uint id;
    string cid;
    address organizer;
  }

  event GroupCreated (
    uint id,
    string cid,
    uint donationTarget,
    address organizer
  );

  event reviewCreated (
    uint id,
    string cid,
    address organizer
  );

  constructor() ERC721("StreeetVendorAppreciationApp", "SVAA") {}


  function createVendor(string calldata _cid, uint _donationTarget) public {
    allVendors[_totalVendors] = vendorClass(_totalVendors, _cid, _donationTarget, 0, msg.sender);
    emit GroupCreated(_totalVendors, _cid, _donationTarget, msg.sender);
    _totalVendors++;
  }

  function donate(uint _donationId, uint _donationAmmount) public {
    vendorClass storage _currentGroup = allVendors[_donationId];
    _currentGroup.totalDonations += _donationAmmount;
  }



  function getAllVendors() public view returns (vendorClass[] memory) {
      vendorClass[] memory groupsArray = new vendorClass[](_totalVendors);

      for (uint i = 0; i < _totalVendors; i++) {
          vendorClass storage currentItem = allVendors[i];
          groupsArray[i] = currentItem;
      }
      return groupsArray;
  }

    // function to create a review(uint _donationId, uint _donationAmmount) public {
  //   vendorClass storage _currentGroup = allVendors[_donationId];
  //   _currentGroup.totalDonations += _donationAmmount;
  // }

}



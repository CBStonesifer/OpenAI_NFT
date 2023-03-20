const Migrations = artifacts.require("Migrations");
const Mint = artifacts.require("Mint");
const NFT_contract = artifacts.require("NFT_contract");


module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Mint);
  deployer.deploy(NFT_contract);

};

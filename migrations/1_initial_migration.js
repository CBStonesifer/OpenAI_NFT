const Migrations = artifacts.require("Migrations");
const Mint = artifacts.require("Mint");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Mint);
};

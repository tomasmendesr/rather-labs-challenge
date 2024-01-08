const RatherToken = artifacts.require("RatherToken");
const DAO = artifacts.require("DAO");

module.exports = async function (deployer) {
  await deployer.deploy(RatherToken, "RatherToken", "RTK");

  const ratherTokenInstance = await RatherToken.deployed();

  await deployer.deploy(DAO, ratherTokenInstance.address);
};


const Voting = artifacts.require("Voting");

module.exports = function (deployer) {
  const candidates = ["Alice", "Bob", "Charlie"]; // Example candidates
  deployer.deploy(Voting, candidates);
};

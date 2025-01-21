const express = require("express");
const Web3 = require("web3");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());

const web3 = new Web3("http://127.0.0.1:8545");
const contractABI = [/* Paste ABI from build/contracts/Voting.json */];
const contractAddress = "<Your_Contract_Address>";
const contract = new web3.eth.Contract(contractABI, contractAddress);

app.get("/candidates", async (req, res) => {
  const count = await contract.methods.candidateCount().call();
  const candidates = [];
  for (let i = 0; i < count; i++) {
    const candidate = await contract.methods.getCandidate(i).call();
    candidates.push({ id: i, name: candidate[0], votes: candidate[1] });
  }
  res.json(candidates);
});

app.post("/vote", async (req, res) => {
  const { candidateId, account } = req.body;
  try {
    await contract.methods.vote(candidateId).send({ from: account });
    res.send("Vote cast successfully!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));

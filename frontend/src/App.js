
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import VotingContract from "../../build/contracts/Voting.json";

function App() {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState("");

  useEffect(() => {
    const init = async () => {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
      const accounts = await web3.eth.requestAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = VotingContract.networks[networkId];

      const contract = new web3.eth.Contract(
        VotingContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      setWeb3(web3);
      setContract(contract);
      setAccount(accounts[0]);

      const candidates = await contract.methods.getCandidates().call();
      setCandidates(candidates);
    };

    init();
  }, []);

  const vote = async () => {
    if (contract && selectedCandidate !== null) {
      await contract.methods.vote(selectedCandidate).send({ from: account });
      alert("Vote cast successfully!");
    } else {
      alert("Please select a candidate.");
    }
  };

  return (
    <div>
      <h1>Voting System</h1>
      <p>Your account: {account}</p>
      <ul>
        {candidates.map((candidate, index) => (
          <li key={index}>
            {candidate.name} - {candidate.voteCount} votes
            <button onClick={() => setSelectedCandidate(index)}>Vote</button>
          </li>
        ))}
      </ul>
      <button onClick={vote}>Submit Vote</button>
    </div>
  );
}

export default App;

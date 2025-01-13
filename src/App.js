import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ethers } from "ethers";
import contractABI from "./MyContractABI.json";

const contactAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";

let isLoading = false;

const loadData = async () => {
  if (isLoading) return;
  isLoading = true;

  try {
    if (typeof window.ethereum === "undefined") {
      alert("Please install MetaMask or another Ethereum wallet.");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log("provider", provider);

    const contract = new ethers.Contract(contactAddress, contractABI, provider);
    console.log("contract", contract);

    const greeting = await contract.hello();
    console.log("greeting", greeting);

    alert(greeting);
  } catch (error) {
    console.error("Error loading contract data:", error);
    alert("An error occurred, check console for details.");
  } finally {
    isLoading = false;
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={loadData}>Click Me!</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

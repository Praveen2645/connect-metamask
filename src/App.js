import './App.css';
import { useState } from 'react'; // useState to hold the current wallet address
import { ethers } from 'ethers';  //to use ethers library

function App() {

const [walletAddress,setWalletAddress] = useState("");


//requesting the account 
  async function requestAccount(){
console.log('connecting....');

//check metamask extension exist
if(window.ethereum){
  console.log('detected');

  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setWalletAddress(accounts[0]);
    //console.log(accounts);
  } catch (error) {
    console.log('Error connecting...');
  }
  } else{
    alert('Metamask not detected');
}
  }
  //connnect wallet using web3Provider
  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined'){
      await requestAccount();
      const provider= new ethers.providers.Web3provider(window.ethereum);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
         <button
         onClick={requestAccount}
         >Connect Metamask</button>
         <h3>wallet Address: {walletAddress} </h3>
      </header>
    </div>
  );
}

export default App;

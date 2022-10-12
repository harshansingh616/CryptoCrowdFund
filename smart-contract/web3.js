import Web3 from 'web3';

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // we are in the browser and meta mask is installed
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on the server *OR* meta mask is not running
  // creating our own provider
  const provider = new Web3.providers.HttpProvider(
    "https://goerli.infura.io/v3/f2ff8590ac4446adb158e0fc6ad8349d"
  );

  web3 = new Web3(provider);
}

if(typeof window!== "undefined")
window?.addEventListener("load", async () => {
  // Modern dapp browsers...
  if (window?.ethereum) {
    window.web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window?.ethereum.enable();
    } catch (error) {
      // User denied account access...
    }
  }
  // Legacy dapp browsers...
  else if (window?.web3) {
    window.web3 = new Web3(web3.currentProvider);
  }
  // Non-dapp browsers...
  else {
    console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
  }
});

export default web3;

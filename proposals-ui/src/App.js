import './App.css'
import ProposalsList from './components/ProposalsList'
import React, { useEffect } from 'react';
import Web3 from 'web3';

function App() {

  useEffect(() => {
    const enableMetaMask = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          const accounts = await web3.eth.getAccounts();
          console.log('User account:', accounts[0]);
        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
        }
      } else {
        console.error('MetaMask is not installed.');
        alert('Metamask is needed')
      }
    };

    enableMetaMask();
  }, []);

  return (
    <div className="App">
      <ProposalsList />
    </div>
  )
}

export default App

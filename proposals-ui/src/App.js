import './App.css'
import ProposalsList from './components/ProposalsList'
import React, { useEffect } from 'react';
import enableMetaMask from './web3/enableMetamask';

function App() {

  useEffect(() => {
    enableMetaMask();
  }, []);

  return (
    <div className="App">
      <ProposalsList />
    </div>
  )
}

export default App

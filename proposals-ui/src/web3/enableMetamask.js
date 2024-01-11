const enableMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('User account:', accounts[0]);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      console.error('MetaMask is not installed.');
      alert('Metamask is needed');
    }
};

export default enableMetaMask;
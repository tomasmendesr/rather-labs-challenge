const RatherToken = artifacts.require('RatherToken');

// Inicio de los tests
contract('RatherTOKEN', (accounts) => {
  let ratherTokenInstance;

  // Función para desplegar el contrato RatherTOKEN antes de cada test
  beforeEach(async () => {
    ratherTokenInstance = await RatherToken.new('RatherToken', 'RTK');
  });

  it('Should deploy the RatherTOKEN contract properly', async () => {
    assert.exists(ratherTokenInstance.address);
  });

  it('Should have the correct name and symbol', async () => {
    const name = await ratherTokenInstance.name();
    const symbol = await ratherTokenInstance.symbol();

    assert.equal(name, 'RatherToken');
    assert.equal(symbol, 'RTK');
  });

  it('Should assign the total supply to the deployer', async () => {
    const totalSupply = await ratherTokenInstance.totalSupply();
    const deployerBalance = await ratherTokenInstance.balanceOf(accounts[0]);

    assert.equal(deployerBalance.toString(), totalSupply.toString());
  });
});

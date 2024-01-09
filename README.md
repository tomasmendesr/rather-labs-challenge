
node createProposal.js "First proposal as example" "This is the first proposal" "Option A" "Option B" 3600 10

=====================

DAO contract address: 0x1a4f72422eE5eCB345BB37a8c202CdAd7Fa39d66
RatherToken address: 0x2EC450905EeeBf56Cf35078A837A3D3BE5DdDDA4

=====================
truffle migrate --network goerli

2_deploy_contracts.js
=====================

   Deploying 'RatherToken'
   -----------------------
   > transaction hash:    0x53bb2752575558299ce199d866dda2ae9df6ac15de8e0b0eb531e4fc1385390d
   > Blocks: 1            Seconds: 8
   > contract address:    0x2EC450905EeeBf56Cf35078A837A3D3BE5DdDDA4
   > block number:        10347623
   > block timestamp:     1704817284
   > account:             0xED9feF38894a86033253084C1bc39317AcD6ba13
   > balance:             0.185194386278291615
   > gas used:            963260 (0xeb2bc)
   > gas price:           2.500000015 gwei
   > value sent:          0 ETH
   > total cost:          0.0024081500144489 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 10347624)
   > confirmation number: 2 (block: 10347625)

   Deploying 'DAO'
   ---------------
   > transaction hash:    0x38a18e909846965a2a2cc41eab3c3e6d279eaad0a2b6ae627de45385ce9aedc2
   > Blocks: 1            Seconds: 33
   > contract address:    0x1a4f72422eE5eCB345BB37a8c202CdAd7Fa39d66
   > block number:        10347626
   > block timestamp:     1704817344
   > account:             0xED9feF38894a86033253084C1bc39317AcD6ba13
   > balance:             0.179174943749398291
   > gas used:            2407777 (0x24bd61)
   > gas price:           2.500000012 gwei
   > value sent:          0 ETH
   > total cost:          0.006019442528893324 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 10347627)
   > confirmation number: 2 (block: 10347628)
   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.008427592543342224 ETH

Summary
=======
> Total deployments:   3
> Final cost:          0.009041835046290588 ETH
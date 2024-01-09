
node createProposal.js "Nuevo Título" "Descripción de la propuesta" 3600 10

=====================

DAO contract address: 0xcb79bBE40BB3819f25ba69E71BA21aE2dBc16161
RatherToken address: 0x62488be2966B2146159f246aCc4f7F151EF1710b

=====================
truffle migrate --network goerli

   Deploying 'RatherToken'
   -----------------------
   > transaction hash:    0xdd368498d04812723488a9a935f03eff006d76996f027b29d376f99f4e002e93
   > Blocks: 1            Seconds: 5
   > contract address:    0x62488be2966B2146159f246aCc4f7F151EF1710b
   > block number:        10347331
   > block timestamp:     1704812292
   > account:             0xED9feF38894a86033253084C1bc39317AcD6ba13
   > balance:             0.203023463852983074
   > gas used:            963260 (0xeb2bc)
   > gas price:           2.50000001 gwei
   > value sent:          0 ETH
   > total cost:          0.0024081500096326 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 10347332)
   > confirmation number: 2 (block: 10347333)

   Deploying 'DAO'
   ---------------
   > transaction hash:    0x7e65f53195feb6b430013f7e6b2f2015c5bbda5e2e553a5de65fa26bc63d0adc
   > Blocks: 1            Seconds: 16
   > contract address:    0xcb79bBE40BB3819f25ba69E71BA21aE2dBc16161
   > block number:        10347335
   > block timestamp:     1704812340
   > account:             0xED9feF38894a86033253084C1bc39317AcD6ba13
   > balance:             0.197632183831417954
   > gas used:            2156512 (0x20e7e0)
   > gas price:           2.50000001 gwei
   > value sent:          0 ETH
   > total cost:          0.00539128002156512 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 10347336)
   > confirmation number: 2 (block: 10347337)
   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.00779943003119772 ETH

Summary
=======
> Total deployments:   3
> Final cost:          0.008413672533408993 ETH
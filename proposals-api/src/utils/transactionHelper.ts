import Web3 from 'web3'
import fs from 'fs'

const PUBLIC_KEY: string = '0xED9feF38894a86033253084C1bc39317AcD6ba13'
const privateKey: string = fs.readFileSync("../../secret").toString().trim();
const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/401b77306e0843f3976330f8b1444dd3'))

const sendSignedTransaction = async (data: any, to: string): Promise<any>  => {
    const estimatedGas = await web3.eth.estimateGas({
        from: PUBLIC_KEY,
        to,
        data
    })
    const txCount = await web3.eth.getTransactionCount(PUBLIC_KEY)
    const account = web3.eth.accounts.privateKeyToAccount(privateKey).address;
    const tx = await web3.eth.accounts.signTransaction({
        from: PUBLIC_KEY,
        nonce: txCount,
        to: to,
        value: web3.utils.toHex(0),
        gas: web3.utils.toHex(estimatedGas),
        data: data
    }, privateKey)
    const txReceipt = await web3.eth.sendSignedTransaction(tx.rawTransaction)
    return txReceipt
}

const TransactionHelper = {
    sendSignedTransaction
}
    
export default TransactionHelper
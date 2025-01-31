/** @format */

const { ethers } = require('ethers');
require('dotenv').config();

const rpc = process.env.RPC;
const PVT_KEY = process.env.PRIVATE_KEY;
const provider = new ethers.JsonRpcProvider(rpc);
const wallet = new ethers.Wallet(PVT_KEY, provider);

async function getAddress() {
  const address = await wallet.getAddress();
  console.log('Address:', address);
}

async function sendPol(address, value) {
  const transaction = await wallet.sendTransaction({
    to: address,
    value: ethers.parseEther(value),
  });
  console.log(
    'Transaction sent! Hash:',
    `https://amoy.polygonscan.com/tx/${transaction.hash}`
  );
}

async function getGasPriceOfABlock(blockNumber) {
  const block = await provider.getBlock(blockNumber);
  console.log(`Gas details of Block ${block.number}`);
  console.log(
    `Gas Price: ${ethers.formatUnits(block.baseFeePerGas, 'gwei')} gwei`
  );
  console.log(`Gas Used: ${block.gasUsed.toString()}`);
  console.log(`Gas Limit: ${block.gasLimit.toString()}`);
}

async function getGasPriceOfATransaction(txHash) {
  const transaction = await provider.getTransaction(txHash);
  const receipt = await provider.getTransactionReceipt(txHash);
  console.log(
    `Gas details of Transaction https://amoy.polygonscan.com/tx/${transaction.hash}`
  );
  console.log(
    `Gas Price: ${ethers.formatUnits(transaction.gasPrice, 'gwei')} gwei`
  );
  console.log(`Gas Limit (Gas Sent): ${transaction.gasLimit.toString()}`);
  console.log(`Gas Used: ${receipt.gasUsed.toString()}`);
}

async function estimateGasForAContract() {
  const nftContractAddress = '0x584232fe7Cb58D8BAE5836271f1c285F6267F611';
  const nftContractABI = ['function mint(address to) public'];
  const nftContract = new ethers.Contract(
    nftContractAddress,
    nftContractABI,
    wallet
  );
  const providerGasPrice = await provider.getFeeData();
  const estimatedGas = await nftContract.mint.estimateGas(
    '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4'
  );

  console.log('Estimated Gas for Minting:', estimatedGas.toString());
  const executeTransaction = await nftContract.mint(
    '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
    {
      gasLimit: estimatedGas + (estimatedGas * 50n) / 100n,
      gasPrice:
        providerGasPrice.gasPrice + (providerGasPrice.gasPrice * 50n) / 100n,
    }
  );

  console.log(
    'Transaction Hash:',
    `https://amoy.polygonscan.com/tx/${executeTransaction.hash}`
  );
}

// Command-line argument handling
const args = process.argv.slice(2);
const command = args[0];

(async () => {
  try {
    switch (command) {
      case 'address':
        await getAddress();
        break;
      case 'send':
        if (args.length < 3)
          throw new Error('Usage: node debug.js send <address> <amount>');
        await sendPol(args[1], args[2]);
        break;
      case 'gas':
        if (args.length < 2)
          throw new Error('Usage: node debug.js gas <block_number>');
        await getGasPriceOfABlock(args[1]);
        break;
      case 'gas-usage':
        if (args.length < 2)
          throw new Error('Usage: node debug.js gas-usage <tx_hash>');
        await getGasPriceOfATransaction(args[1]);
        break;
      case 'estimate':
        await estimateGasForAContract();
        break;
      default:
        console.log(
          'Invalid command. Available commands: address, send, gas, gas-usage, estimate'
        );
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
})();

/** @format */

const { ethers } = require('ethers');
require('dotenv').config();

const rpc = process.env.RPC;
const PVT_KEY = process.env.PRIVATE_KEY;
const provider = new ethers.JsonRpcProvider(rpc);
const wallet = new ethers.Wallet(PVT_KEY, provider);
// const NftContractAbi = [
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'to',
//         type: 'address',
//       },
//       {
//         internalType: 'uint256',
//         name: 'tokenId',
//         type: 'uint256',
//       },
//     ],
//     name: 'approve',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     stateMutability: 'nonpayable',
//     type: 'constructor',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'sender',
//         type: 'address',
//       },
//       {
//         internalType: 'uint256',
//         name: 'tokenId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'address',
//         name: 'owner',
//         type: 'address',
//       },
//     ],
//     name: 'ERC721IncorrectOwner',
//     type: 'error',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'operator',
//         type: 'address',
//       },
//       {
//         internalType: 'uint256',
//         name: 'tokenId',
//         type: 'uint256',
//       },
//     ],
//     name: 'ERC721InsufficientApproval',
//     type: 'error',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'approver',
//         type: 'address',
//       },
//     ],
//     name: 'ERC721InvalidApprover',
//     type: 'error',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'operator',
//         type: 'address',
//       },
//     ],
//     name: 'ERC721InvalidOperator',
//     type: 'error',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'owner',
//         type: 'address',
//       },
//     ],
//     name: 'ERC721InvalidOwner',
//     type: 'error',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'receiver',
//         type: 'address',
//       },
//     ],
//     name: 'ERC721InvalidReceiver',
//     type: 'error',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'sender',
//         type: 'address',
//       },
//     ],
//     name: 'ERC721InvalidSender',
//     type: 'error',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: 'tokenId',
//         type: 'uint256',
//       },
//     ],
//     name: 'ERC721NonexistentToken',
//     type: 'error',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'owner',
//         type: 'address',
//       },
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'approved',
//         type: 'address',
//       },
//       {
//         indexed: true,
//         internalType: 'uint256',
//         name: 'tokenId',
//         type: 'uint256',
//       },
//     ],
//     name: 'Approval',
//     type: 'event',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'owner',
//         type: 'address',
//       },
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'operator',
//         type: 'address',
//       },
//       {
//         indexed: false,
//         internalType: 'bool',
//         name: 'approved',
//         type: 'bool',
//       },
//     ],
//     name: 'ApprovalForAll',
//     type: 'event',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'to',
//         type: 'address',
//       },
//     ],
//     name: 'mint',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'from',
//         type: 'address',
//       },
//       {
//         internalType: 'address',
//         name: 'to',
//         type: 'address',
//       },
//       {
//         internalType: 'uint256',
//         name: 'tokenId',
//         type: 'uint256',
//       },
//     ],
//     name: 'safeTransferFrom',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'from',
//         type: 'address',
//       },
//       {
//         internalType: 'address',
//         name: 'to',
//         type: 'address',
//       },
//       {
//         internalType: 'uint256',
//         name: 'tokenId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'bytes',
//         name: 'data',
//         type: 'bytes',
//       },
//     ],
//     name: 'safeTransferFrom',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'operator',
//         type: 'address',
//       },
//       {
//         internalType: 'bool',
//         name: 'approved',
//         type: 'bool',
//       },
//     ],
//     name: 'setApprovalForAll',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'from',
//         type: 'address',
//       },
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'to',
//         type: 'address',
//       },
//       {
//         indexed: true,
//         internalType: 'uint256',
//         name: 'tokenId',
//         type: 'uint256',
//       },
//     ],
//     name: 'Transfer',
//     type: 'event',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'from',
//         type: 'address',
//       },
//       {
//         internalType: 'address',
//         name: 'to',
//         type: 'address',
//       },
//       {
//         internalType: 'uint256',
//         name: 'tokenId',
//         type: 'uint256',
//       },
//     ],
//     name: 'transferFrom',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'owner',
//         type: 'address',
//       },
//     ],
//     name: 'balanceOf',
//     outputs: [
//       {
//         internalType: 'uint256',
//         name: '',
//         type: 'uint256',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: 'tokenId',
//         type: 'uint256',
//       },
//     ],
//     name: 'getApproved',
//     outputs: [
//       {
//         internalType: 'address',
//         name: '',
//         type: 'address',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'owner',
//         type: 'address',
//       },
//       {
//         internalType: 'address',
//         name: 'operator',
//         type: 'address',
//       },
//     ],
//     name: 'isApprovedForAll',
//     outputs: [
//       {
//         internalType: 'bool',
//         name: '',
//         type: 'bool',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'name',
//     outputs: [
//       {
//         internalType: 'string',
//         name: '',
//         type: 'string',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: 'tokenId',
//         type: 'uint256',
//       },
//     ],
//     name: 'ownerOf',
//     outputs: [
//       {
//         internalType: 'address',
//         name: '',
//         type: 'address',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'bytes4',
//         name: 'interfaceId',
//         type: 'bytes4',
//       },
//     ],
//     name: 'supportsInterface',
//     outputs: [
//       {
//         internalType: 'bool',
//         name: '',
//         type: 'bool',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'symbol',
//     outputs: [
//       {
//         internalType: 'string',
//         name: '',
//         type: 'string',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: 'tokenId',
//         type: 'uint256',
//       },
//     ],
//     name: 'tokenURI',
//     outputs: [
//       {
//         internalType: 'string',
//         name: '',
//         type: 'string',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
// ];

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
  const baseFeePerGas = ethers.formatUnits(block.baseFeePerGas, 'gwei');
  console.log(`Gas Price of Block ${blockNumber}:`, baseFeePerGas, 'gwei');
  const gasUsed = block.gasUsed.toString();
  console.log(`Gas Used: ${gasUsed}`);
  const gasLimit = block.gasLimit.toString();
  console.log(`Gas Limit: ${gasLimit}`);
  return { block, baseFeePerGas, gasUsed, gasLimit };
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
  const prevbalance = await provider.getBalance(wallet.address);
  const nftContractAddress = '0x584232fe7Cb58D8BAE5836271f1c285F6267F611';
  const nftContractABI = ['function mint(address to) public'];
  const nftContract = new ethers.Contract(
    nftContractAddress,
    nftContractABI,
    wallet
  );
  const providerGasPrice = await provider.getFeeData();
  console.log(`All Gas Details of the network currently`, providerGasPrice);
  const estimatedGas = await nftContract.mint.estimateGas(
    '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4'
  );
  console.log('Estimated Gas for Minting:', estimatedGas.toString());

  const executeTransaction = await nftContract.mint(
    '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
    {
      gasLimit: estimatedGas + estimatedGas * 50n/100n,
      gasPrice: providerGasPrice.gasPrice + providerGasPrice.gasPrice * 50n/100n,
    }
  );
 const receipt = await executeTransaction.wait();

 // Actual gas used for the transaction
  const actualGasUsed = receipt.gasUsed;
  console.log(actualGasUsed)
  console.log(
    'Transaction Hash:',
    `https://amoy.polygonscan.com/tx/${executeTransaction.hash}`
  );
  await executeTransaction.wait(5);
  const newbalance = await provider.getBalance(wallet.address);
console.log(prevbalance, newbalance);
}

// sendPol('0x5B38Da6a701c568545dCfcB03FcB875f56beddC4', '0.1');
// estimateGasForAContract();
// getGasPriceOfABlock("latest");
// getGasPriceOfATransaction(
//   '0x85bf32f86116c2f6dc557dfa13ee08e38d8d1ff43b6ee175c9a1f8789c1c5847'
// );
estimateGasForAContract();
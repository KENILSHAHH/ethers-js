# Ethereum & Polygon Wallet Interaction Script

## Overview
This script interacts with the Ethereum and Polygon blockchain using `ethers.js`. It allows users to:
- Fetch the wallet address
- Send native tokens (MATIC, ETH, etc.)
- Retrieve gas price details of a block
- Fetch gas usage details of a transaction
- Estimate gas for contract execution

## Prerequisites
Before running the script, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation
1. Clone this repository:
   ```sh
   git clone <repo_url>
   cd <repo_directory>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add the following:
   ```env
   RPC=<your_rpc_url>
   PRIVATE_KEY=<your_private_key>
   ```
   - Replace `<your_rpc_url>` with the RPC URL of your Ethereum/Polygon node.
   - Replace `<your_private_key>` with your wallet's private key.

## Usage
Run the script using:
```sh
node script.js
```

## Functions
### 1. Fetch Wallet Address
Retrieves and prints the wallet's public address.
```js
async function getAddress() {
  const address = await wallet.getAddress();
  console.log('Address:', address);
}
```

### 2. Send Native Tokens
Sends native tokens (ETH/MATIC) to a specified address.
```js
async function sendTransaction(to, amount) {
  const tx = await wallet.sendTransaction({ to, value: ethers.parseEther(amount) });
  console.log('Transaction Hash:', tx.hash);
}
```
**Usage:**
```sh
node script.js send <recipient_address> <amount>
```

### 3. Get Gas Price of a Block
Fetches the gas price details for a given block.
```js
async function getGasPrice(blockNumber) {
  const block = await provider.getBlock(blockNumber);
  console.log('Gas Price:', block.baseFeePerGas.toString());
}
```
**Usage:**
```sh
node script.js gas <block_number>
```

### 4. Get Gas Usage of a Transaction
Retrieves gas used for a specific transaction.
```js
async function getTransactionGas(txHash) {
  const receipt = await provider.getTransactionReceipt(txHash);
  console.log('Gas Used:', receipt.gasUsed.toString());
}
```
**Usage:**
```sh
node script.js gas-usage <tx_hash>
```

### 5. Estimate Gas for Contract Execution
Estimates the gas required for executing a contract call.
```js
async function estimateGas(txData) {
  const gasEstimate = await provider.estimateGas(txData);
  console.log('Estimated Gas:', gasEstimate.toString());
}
```
**Usage:** Modify `txData` inside the script and run:
```sh
node script.js estimate
```

## License
This project is licensed under the MIT License.


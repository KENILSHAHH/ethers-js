# Ethersjs debugging 

## Overview
This script interacts with the Ethereum and Polygon blockchain using `ethers.js`. It allows users to:
- Fetch the wallet address
- Send native tokens (POL, ETH, etc.)
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
   git clone https://github.com/KENILSHAHH/ethers-js
   cd ethers-js
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file by copying `.env.example`:
   ```sh
   cp .env.example .env
   ```
4. Add the following environment variables in `.env`:
   ```env
   RPC=<your_rpc_url>
   PRIVATE_KEY=<your_private_key>
   ```
   - Replace `<your_rpc_url>` with the RPC URL of your Ethereum/Polygon node.
   - Replace `<your_private_key>` with your wallet's private key.

5. Remove the example file:
   ```sh
   rm .env.example
   ```

## Usage
Run the script using:
```sh
node debug.js <command> [arguments]
```

## Commands
### 1. Fetch Wallet Address
Retrieves and prints the wallet's public address.
**Usage:**
```sh
node debug.js address
```

### 2. Send Native Tokens
Sends native tokens (ETH/POL) to a specified address.
**Usage:**
```sh
node debug.js send <recipient_address> <amount>
```

### 3. Get Gas Price of a Block
Fetches the gas price details for a given block.
**Usage:**
```sh
node debug.js gas <block_number>
```

### 4. Get Gas Usage of a Transaction
Retrieves gas used for a specific transaction.
**Usage:**
```sh
node debug.js gas-usage <tx_hash>
```

### 5. Estimate Gas for Contract Execution
Estimates and executes a contract call.
**Usage:**
```sh
node debug.js estimate
```

## Function Details
### getAddress()
Fetches and logs the wallet's public address by retrieving it from the wallet instance.

### sendPol(address, value)
Sends a specified amount of native tokens (POL/ETH) to a recipient address.
- **Parameters:**
  - `address`: The recipient's wallet address.
  - `value`: The amount of tokens to send.
- **Output:**
  - Logs the transaction hash with a link to the block explorer.

### getGasPriceOfABlock(blockNumber)
Retrieves and logs gas price details for a specified block.
- **Parameters:**
  - `blockNumber`: The block number to fetch details for.
- **Output:**
  - Gas price in gwei, gas used, and gas limit of the block.

### getGasPriceOfATransaction(txHash)
Fetches and logs gas usage details for a specific transaction.
- **Parameters:**
  - `txHash`: The transaction hash to look up.
- **Output:**
  - Gas price, gas limit, and gas used for the transaction.

### estimateGasForAContract()
Estimates gas for executing a smart contract function and executes the transaction.
- **Operations:**
  - Fetches network gas details.
  - Estimates gas for minting an NFT.
  - Sends the transaction with an adjusted gas limit and price.
  - Waits for confirmation and logs the transaction hash.

## License
This project is licensed under the MIT License.


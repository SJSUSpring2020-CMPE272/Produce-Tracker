
'use strict';

const { FileSystemWallet, Gateway } = require('fabric-network');
const fs = require('fs');
const path = require('path');


// capture network variables from config.json
const configPath = path.join(process.cwd(), '../config.json');
const configJSON = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(configJSON);
let connection_file = config.connection_file;
let userName = config.userName;
let gatewayDiscovery = config.gatewayDiscovery;

// connect to the connection file
const ccpPath = path.join(process.cwd(), '../'+ connection_file);
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
const ccp = JSON.parse(ccpJSON);


exports.getOrder = async function(orderId) {

    let response = {};
    try {
        console.log('getStateFromOrderId');

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), '../wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists(userName);
        if (!userExists) {
            console.log('An identity for the user ' + userName + ' does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            response.error = 'An identity for the user ' + userName + ' does not exist in the wallet. Register ' + userName + ' first';
            return response;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: userName, discovery: gatewayDiscovery });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('produce-tracker');

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: 'getOrder('orderId')'
        console.log(orderId);
        const result = await contract.evaluateTransaction('getOrder', orderId);
        //console.log(`Transaction has been evaluated, result is: ${result.toString()}`);

        return result;

    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        response.error = error.message;
        return response;
    }
};

//create new produce
exports.createRawFood = async function(orderId, foodItem, rawFoodProcessDate) {
    let response = {};
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), '../wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists(userName);
        if (!userExists) {
            console.log('An identity for the user ' + userName + ' does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            response.error = 'An identity for the user ' + userName + ' does not exist in the wallet. Register ' + userName + ' first';
            return response;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: userName, discovery: gatewayDiscovery });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('produce-tracker');

        // Submit the specified transaction.
        // createCar transaction - requires 5 argument, ex: ('createCar', 'CAR12', 'Honda', 'Accord', 'Black', 'Tom')
        await contract.submitTransaction('createRawFood', orderId, foodItem, rawFoodProcessDate);
        console.log('Transaction has been submitted');

        // Disconnect from the gateway.
        await gateway.disconnect();

        response.msg = 'createRawFood Transaction has been submitted';
        return response;

    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        response.error = error.message;
        return response;
    }
};


// change state of produce 
exports.changeState = async function(orderId, type, entityName, entityAddress, quality, date) {
    let response = {};
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), '../wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists(userName);
        if (!userExists) {
            console.log('An identity for the user ' + userName + ' does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            response.error = 'An identity for the user ' + userName + ' does not exist in the wallet. Register ' + userName + ' first';
            return response;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: userName, discovery: gatewayDiscovery });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('produce-tracker');

        // Submit the specified transaction.
        // changeState transaction - requires 6 args , ex: ('changeState', 'ORDER1', 'manufacturer','MAN1','ADD1','Good','23-04-2019')
        await contract.submitTransaction('changeState', orderId, type, entityName, entityAddress, quality, date);
        console.log('Transaction has been submitted');

        // Disconnect from the gateway.
        await gateway.disconnect();

        response.msg = 'changeState Transaction has been submitted';
        return response;

    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        response.error = error.message;
        return response;
    }
};


// create car transaction
// exports.createCar = async function(key, make, model, color, owner) {
//     let response = {};
//     try {

//         // Create a new file system based wallet for managing identities.
//         const walletPath = path.join(process.cwd(), '../wallet');
//         const wallet = new FileSystemWallet(walletPath);
//         console.log(`Wallet path: ${walletPath}`);

//         // Check to see if we've already enrolled the user.
//         const userExists = await wallet.exists(userName);
//         if (!userExists) {
//             console.log('An identity for the user ' + userName + ' does not exist in the wallet');
//             console.log('Run the registerUser.js application before retrying');
//             response.error = 'An identity for the user ' + userName + ' does not exist in the wallet. Register ' + userName + ' first';
//             return response;
//         }

//         // Create a new gateway for connecting to our peer node.
//         const gateway = new Gateway();
//         await gateway.connect(ccp, { wallet, identity: userName, discovery: gatewayDiscovery });

//         // Get the network (channel) our contract is deployed to.
//         const network = await gateway.getNetwork('mychannel');

//         // Get the contract from the network.
//         const contract = network.getContract('fabcar');

//         // Submit the specified transaction.
//         // createCar transaction - requires 5 argument, ex: ('createCar', 'CAR12', 'Honda', 'Accord', 'Black', 'Tom')
//         await contract.submitTransaction('createCar', key, make, model, color, owner);
//         console.log('Transaction has been submitted');

//         // Disconnect from the gateway.
//         await gateway.disconnect();

//         response.msg = 'createCar Transaction has been submitted';
//         return response;

//     } catch (error) {
//         console.error(`Failed to submit transaction: ${error}`);
//         response.error = error.message;
//         return response;
//     }
// };

// // change car owner transaction
// exports.changeCarOwner = async function(key, newOwner) {
//     let response = {};
//     try {

//         // Create a new file system based wallet for managing identities.
//         const walletPath = path.join(process.cwd(), '/wallet');
//         const wallet = new FileSystemWallet(walletPath);
//         console.log(`Wallet path: ${walletPath}`);

//         // Check to see if we've already enrolled the user.
//         const userExists = await wallet.exists(userName);
//         if (!userExists) {
//             console.log('An identity for the user ' + userName + ' does not exist in the wallet');
//             console.log('Run the registerUser.js application before retrying');
//             response.error = 'An identity for the user ' + userName + ' does not exist in the wallet. Register ' + userName + ' first';
//             return response;
//         }

//         // Create a new gateway for connecting to our peer node.
//         const gateway = new Gateway();
//         await gateway.connect(ccp, { wallet, identity: userName, discovery: gatewayDiscovery });

//         // Get the network (channel) our contract is deployed to.
//         const network = await gateway.getNetwork('mychannel');

//         // Get the contract from the network.
//         const contract = network.getContract('fabcar');

//         // Submit the specified transaction.
//         // changeCarOwner transaction - requires 2 args , ex: ('changeCarOwner', 'CAR10', 'Dave')
//         await contract.submitTransaction('changeCarOwner', key, newOwner);
//         console.log('Transaction has been submitted');

//         // Disconnect from the gateway.
//         await gateway.disconnect();

//         response.msg = 'changeCarOwner Transaction has been submitted';
//         return response;

//     } catch (error) {
//         console.error(`Failed to submit transaction: ${error}`);
//         response.error = error.message;
//         return response;
//     }
// };

// // query all cars transaction
// exports.queryAllCars = async function() {

//     let response = {};
//     try {
//         console.log('queryAllCars');

//         // Create a new file system based wallet for managing identities.
//         const walletPath = path.join(process.cwd(), '../wallet');
//         const wallet = new FileSystemWallet(walletPath);
//         console.log(`Wallet path: ${walletPath}`);

//         // Check to see if we've already enrolled the user.
//         const userExists = await wallet.exists(userName);
//         if (!userExists) {
//             console.log('An identity for the user ' + userName + ' does not exist in the wallet');
//             console.log('Run the registerUser.js application before retrying');
//             response.error = 'An identity for the user ' + userName + ' does not exist in the wallet. Register ' + userName + ' first';
//             return response;
//         }

//         // Create a new gateway for connecting to our peer node.
//         const gateway = new Gateway();
//         await gateway.connect(ccp, { wallet, identity: userName, discovery: gatewayDiscovery });

//         // Get the network (channel) our contract is deployed to.
//         const network = await gateway.getNetwork('mychannel');

//         // Get the contract from the network.
//         const contract = network.getContract('fabcar');

//         // Evaluate the specified transaction.
//         // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
//         const result = await contract.evaluateTransaction('queryAllCars');
//         //console.log('check6');
//         //console.log(`Transaction has been evaluated, result is: ${result.toString()}`);

//         return result;

//     } catch (error) {
//         console.error(`Failed to evaluate transaction: ${error}`);
//         response.error = error.message;
//         return response;
//     }
// };

// // query the car identified by key
// exports.querySingleCar = async function(key) {

//     let response = {};
//     try {
//         console.log('querySingleCar');

//         // Create a new file system based wallet for managing identities.
//         const walletPath = path.join(process.cwd(), '/wallet');
//         const wallet = new FileSystemWallet(walletPath);
//         console.log(`Wallet path: ${walletPath}`);

//         // Check to see if we've already enrolled the user.
//         const userExists = await wallet.exists(userName);
//         if (!userExists) {
//             console.log('An identity for the user ' + userName + ' does not exist in the wallet');
//             console.log('Run the registerUser.js application before retrying');
//             response.error = 'An identity for the user ' + userName + ' does not exist in the wallet. Register ' + userName + ' first';
//             return response;
//         }

//         // Create a new gateway for connecting to our peer node.
//         const gateway = new Gateway();
//         await gateway.connect(ccp, { wallet, identity: userName, discovery: gatewayDiscovery });

//         // Get the network (channel) our contract is deployed to.
//         const network = await gateway.getNetwork('mychannel');

//         // Get the contract from the network.
//         const contract = network.getContract('fabcar');

//         // Evaluate the specified transaction.
//         // queryCar transaction - requires 1 argument, ex: 'querySingleCar('CAR0')'
//         console.log(key);
//         const result = await contract.evaluateTransaction('querySingleCar', key);
//         //console.log(`Transaction has been evaluated, result is: ${result.toString()}`);

//         return result;

//     } catch (error) {
//         console.error(`Failed to evaluate transaction: ${error}`);
//         response.error = error.message;
//         return response;
//     }
// };

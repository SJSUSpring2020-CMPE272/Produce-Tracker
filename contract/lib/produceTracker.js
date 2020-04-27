/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class ProduceTracker extends Contract {

    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const dummyTransactions = [
            {
                foodItem: 'Apple',
                rawFoodProcessDate: '18-03-2019 20:00:00',
                //////////////////////////
                manufacturer: 'Evans Fruit Company',
                manufacturerAddress: 'Yakima , WA',
                qualityAtManufacturer: 'Excellent',
                manufactureProcessDate: '21-03-2019 10:00:00',
                //////////////////////////////////////////
                wholesaler: 'Galli Produce Inc',
                wholesalerAddress: 'San Jose , CA',
                qualityAtWholeSaler: 'Excellent',
                wholesaleProcessDate: '23-03-2019 01:34:00',
                //////////////////////////////////////////
                logistics: 'UPS',
                logisticsAddress: 'San Jose , CA',
                qualityAtLogistics: 'Good',
                logisticsProcessDate: '24-03-2019 01:45:00',
                //////////////////////////////////////////
                retailer: 'Target',
                retailerAddress: 'San Jose , CA',
                qualityAtRetailer: 'Good',
                retailProcessDate: '26-03-2019 15:21:00',
                //////////////////////////////////////////
                consumer: 'John Doe',
                deliveryDate: '30-03-2019 19:21:00',
                qualityAtConsumer: 'Good',
                docType: 'food'
            },
            {
                foodItem: 'Banana',
                rawFoodProcessDate: '14-03-2019 10:25:00',
                //////////////////////////
                manufacturer: 'Evans Fruit Company',
                manufacturerAddress: 'Yakima , WA',
                qualityAtManufacturer: 'Excellent',
                manufactureProcessDate: '21-03-2019 10:00:00',
                //////////////////////////////////////////
                wholesaler: 'Galli Produce Inc',
                wholesalerAddress: 'San Jose , CA',
                qualityAtWholeSaler: 'Good',
                wholesaleProcessDate: '23-03-2019 01:34:00',
                //////////////////////////////////////////
                logistics: 'UPS',
                logisticsAddress: 'San Jose , CA',
                qualityAtLogistics: 'Good',
                logisticsProcessDate: '24-03-2019 01:45:00',
                //////////////////////////////////////////
                retailer: 'WholeFoods',
                retailerAddress: 'San Jose , CA',
                qualityAtRetailer: 'Good',
                retailProcessDate: '26-03-2019 15:21:00',
                //////////////////////////////////////////
                consumer: 'Mary Jane',
                deliveryDate: '30-03-2019 19:21:00',
                qualityAtConsumer: 'Good',
                docType: 'food'
            }
        ];

        for (let i = 1; i <= dummyTransactions.length; i++) {
            await ctx.stub.putState('ORDER' + i, Buffer.from(JSON.stringify(dummyTransactions[i - 1])));
            console.info('Added <--> ', dummyTransactions[i - 1]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }

    async getOrder(ctx, key) {
        console.log('Key is ' + key);
        const res = await ctx.stub.getState(key);
        if (res){
            console.log('Result is\n' + JSON.parse(res.toString()));
            let Record;
            try {
                Record = JSON.parse(res.toString('utf8'));
            } catch (err) {
                console.log(err);
                Record = res.toString('utf8');
            }
            return JSON.stringify([{ key, Record }]);
        }
        else{
            console.err('Did not find the order with orderId ' + key);
            return [];
        }
    }

    async createRawFood(ctx, orderId, foodItem, rawFoodProcessDate) {
        console.info('============= START : Create Raw Food ===========');
        const food = {
            docType: 'food',
            foodItem,
            rawFoodProcessDate,
        };

        await ctx.stub.putState(orderId, Buffer.from(JSON.stringify(food)));
        console.info('============= END : Create Raw Food ===========');
    }

    async changeState(ctx, orderId, type, entityName, entityAddress, quality, date) {
        console.info('============= START : changeState ===========');
        const orderAsBytes = await ctx.stub.getState(orderId); // get the order from chaincode state
        if (!orderAsBytes || orderAsBytes.length === 0) {
            throw new Error(`${orderId} does not exist`);
        }

        const order = JSON.parse(orderAsBytes.toString());
        switch (type) {
            case 'manufacturer':
                order.manufacturer = entityName;
                order.manufacturerAddress = entityAddress;
                order.manufactureProcessDate = date;
                order.qualityAtManufacturer = quality;
                break;
            case 'wholesaler':
                order.wholesaler = entityName;
                order.wholesalerAddress = entityAddress;
                order.wholesaleProcessDate = date;
                order.qualityAtWholeSaler = quality;
                break;
            case 'logistics':
                order.logistics = entityName;
                order.logisticsAddress = entityAddress;
                order.logisticsProcessDate = date;
                order.qualityAtLogistics = quality;
                break;
            case 'retailer':
                order.retailer = entityName;
                order.retailerAddress = entityAddress;
                order.retailProcessDate = date;
                order.qualityAtRetailer = quality;
                break;
            case 'consumer':
                order.consumer = entityName;
                order.deliveryDate = date;
                order.qualityAtConsumer = quality;
                break;
        }
        
        await ctx.stub.putState(orderId, Buffer.from(JSON.stringify(order)));
        console.info('============= END : changeState ===========');
    }
}

module.exports = ProduceTracker;

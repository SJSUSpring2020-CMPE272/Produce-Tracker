/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class CoronaVirusTracker extends Contract {

    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const dummyTransactions = [
            {
                //////////////
                grocery_name:"New India Bazaar",
                grocery_address:"El Camino, San Jose",
                grocery_employeeid:"568568568",
                grocery_health:0,
                grocery_email:"nib@gmail.com",
                grocery_date:"26-04-2019 15:21:00",
                ///////////////
                delivery_name:"Insta Cart",
                delivery_health:0,
                delivery_address:"Palo Alto, San Jose",
                delivery_employeeid:"8958648512",
                delivery_email:"instacart@gmail.com",
                delivery_date:"26-04-2019 18:21:00",
                ////////////////
                consumer_name:"Narain",
                consumer_address:"Alameda, San Jose",
                consumer_email:"narain@sjsu.edu",
                consumer_date:"26-04-2019 20:45:00"
            },
        ];

        for (let i = 1; i <= dummyTransactions.length; i++) {
            await ctx.stub.putState('98760' + i, Buffer.from(JSON.stringify(dummyTransactions[i - 1])));
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

    async queryAllOrders(ctx) {
        const startKey = '987601';
        const endKey = '987650';

        const iterator = await ctx.stub.getStateByRange(startKey, endKey);

        const allResults = [];
        // eslint-disable-next-line no-constant-condition
        while (true) {
            const res = await iterator.next();

            if (res.value && res.value.value.toString()) {
                console.log(res.value.value.toString('utf8'));

                const Key = res.value.key;
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString('utf8'));
                } catch (err) {
                    console.log(err);
                    Record = res.value.value.toString('utf8');
                }
                allResults.push({ Key, Record });
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                console.info(allResults);
                return JSON.stringify(allResults);
            }
        }
    }

    async createNewOrder(ctx, barcode, grocery_name, grocery_address,grocery_employeeid,
    grocery_health,grocery_email,grocery_date ,
    delivery_name,delivery_health,delivery_address,delivery_employeeid,delivery_email,
    delivery_date,consumer_name,
    consumer_address,consumer_email,consumer_date) {
        console.info('============= START : Create Raw Food ===========');
        const order = {
            grocery_name,
            grocery_address,
            grocery_employeeid,
            grocery_health,
            grocery_email,
            grocery_date,
            delivery_name,
            delivery_health,
            delivery_address,
            delivery_employeeid,
            delivery_email,
            delivery_date,
            consumer_name,
            consumer_address,
            consumer_email,
            consumer_date
        };

        await ctx.stub.putState(barcode, Buffer.from(JSON.stringify(order)));
        console.info('============= END : Create New Order ===========');
    }

    async reportCorona(ctx, barcode, type) {
        console.info('============= START : changeState ===========');
        const orderAsBytes = await ctx.stub.getState(barcode); // get the order from chaincode state
        if (!orderAsBytes || orderAsBytes.length === 0) {
            throw new Error(`${barcode} does not exist`);
        }

        const order = JSON.parse(orderAsBytes.toString());
        switch (type) {
            case 'grocey':
                order.grocery_health = 1
                break;
            case 'delivery':
                order.delivery_health = 1
                break;
        }
        
        await ctx.stub.putState(barcode, Buffer.from(JSON.stringify(order)));
        console.info('============= END : changeState ===========');
    }


}

module.exports = CoronaVirusTracker;

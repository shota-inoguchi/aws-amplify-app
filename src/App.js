// resolvers.js
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const resolvers = {
  Query: {
    getDevices: async () => {
      const params = {
        TableName: 'DevicesTable'  // あなたのDynamoDBテーブル名
      };
      try {
        const data = await dynamoDb.scan(params).promise();
        return data.Items;
      } catch (error) {
        console.error(error);
        throw new Error("Error fetching devices from DynamoDB");
      }
    }
  }
};
module.exports = resolvers;


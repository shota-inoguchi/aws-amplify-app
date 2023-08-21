const AWS = require('aws-sdk');

AWS.config.update({
  region: 'ap-northeast-1' // あなたのリージョンを指定
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'MetcomDevices-5m76m43vvjdg5pl23rdq2begum-dev', // あなたのテーブル名
  // 他のクエリパラメータ（必要に応じて）
};

dynamoDB.scan(params, (err, data) => {
  if (err) {
    console.error('データの取得に失敗:', JSON.stringify(err, null, 2));
  } else {
    console.log('データの取得に成功:', JSON.stringify(data, null, 2));
  }
});

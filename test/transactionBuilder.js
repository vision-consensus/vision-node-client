const buildWithdrawBalance = require("../src/utils/transactionBuilder").buildWithdrawBalance;
const buildUnfreezeBalance = require("../src/utils/transactionBuilder").buildUnfreezeBalance;
const buildFreezeBalance = require("../src/utils/transactionBuilder").buildFreezeBalance;
const byteArray2hexStr = require("../src/utils/bytes").byteArray2hexStr;
const buildVote = require("../src/utils/transactionBuilder").buildVote;
const { assert } = require('chai');

describe('transactionBuilder', () => {

  it('build voteContract', async () => {
    let transaction = buildVote("VGx21ymGwuW9ybAcjRyJFA1qB8Ep8qpezQ", {
      "VGx21ymGwuW9ybAcjRyJFA1qB8Ep8qpezQ": 100
    });

    console.log("hex", byteArray2hexStr(transaction.getRawData().serializeBinary()));
  });

  it('build freeze', async () => {
    let transaction = buildFreezeBalance("VGx21ymGwuW9ybAcjRyJFA1qB8Ep8qpezQ", 100000000, 3);
    console.log("hex", byteArray2hexStr(transaction.getRawData().serializeBinary()));
  });

  it('build unfreeze', async () => {
    let transaction = buildUnfreezeBalance("VGx21ymGwuW9ybAcjRyJFA1qB8Ep8qpezQ");
    console.log("hex", byteArray2hexStr(transaction.getRawData().serializeBinary()));
  });

  it('build withdraw', async () => {
    let transaction = buildWithdrawBalance("VGx21ymGwuW9ybAcjRyJFA1qB8Ep8qpezQ");
    console.log("hex", byteArray2hexStr(transaction.getRawData().serializeBinary()));
  });

});

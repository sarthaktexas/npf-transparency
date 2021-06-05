const AirtablePlus = require('airtable-plus');
const formatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
})
const txs = new AirtablePlus({
    baseID: process.env.AIRTABLE_BASE_ID,
    apiKey: process.env.AIRTABLE_API_KEY,
    tableName: process.env.AIRTABLE_TABLE_NAME,
    camelCase: true,
    transform: (r) => {
        return r.fields.amount
    }
});
const txsWithDate = new AirtablePlus({
    baseID: process.env.AIRTABLE_BASE_ID,
    apiKey: process.env.AIRTABLE_API_KEY,
    tableName: process.env.AIRTABLE_TABLE_NAME,
    camelCase: true,
    transform: (r) => {
        delete r.id
        delete r.description
        delete r.vendor
        delete r.vendorLogo
        return r.fields
    }
});

module.exports = async (_, res) => {
    let readTxsRes = await txs.read();
    let readTotal = await txsWithDate.read();
    readTotal = readTotal.filter(d => new Date(Date.parse(d.date)).getUTCMonth() === new Date().getUTCMonth()).filter(d => new Date(Date.parse(d.date)).getFullYear === new Date().getFullYear);
    res.json({
        totalAmount: formatter.format(readTxsRes.reduce((a, b) => { return a + b })),
        amountRaisedMonth: formatter.format(readTotal.filter(a => a.amount > 0).map(o => { return o.amount }).reduce((a, b) => { return a + b })),
        amountSpentMonth: formatter.format(readTotal.filter(a => a.amount < 0).map(o => { return o.amount }).reduce((a, b) => { return a + b })).substring(1),
    });
  }
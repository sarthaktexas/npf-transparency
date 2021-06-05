const AirtablePlus = require('airtable-plus');
const formatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
})
const airtable = new AirtablePlus({
    baseID: process.env.AIRTABLE_BASE_ID,
    apiKey: process.env.AIRTABLE_API_KEY,
    tableName: process.env.AIRTABLE_TABLE_NAME,
    camelCase: true,
    transform: (r) => {
        r.fields.amount = formatter.format(r.fields.amount)
        return r.fields
    }
});

module.exports = async (_, res) => {
    let readRes = await airtable.read({
        sort: [{field: "Date", direction: "desc"}]
    });
    res.send(readRes)
  }
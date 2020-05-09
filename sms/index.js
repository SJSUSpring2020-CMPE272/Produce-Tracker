const Nexmo = require("nexmo")

const nexmo = new Nexmo({
  apiKey: "deed080d",
  apiSecret: "A6b29MrW6CDD0wFY"
})

const from = '13525794805';
const to = '14087185285';
const text = 'Hello from Vonage';

nexmo.message.sendSms(from, to, text);

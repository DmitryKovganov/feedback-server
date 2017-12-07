const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
    app.post('/api/stripe', async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '5$ for 5 credits',
            course: req.body.id
        });

        req.user.cdredits += 5;
        const user = await req.user.save();

        req.send(user);
    });
};
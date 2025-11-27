const bot = require('../bot');

module.exports = async (req, res) => {
    try {
        if (req.method === 'POST') {
            await bot.handleUpdate(req.body);
            res.status(200).send('OK');
        } else {
            res.status(200).send('Bot runn...');
        }
    } catch (e) {
        console.error('Error', e);
        res.status(500).send('Internal Server Error');
    }
};

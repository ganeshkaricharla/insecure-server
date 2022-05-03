const router = require('express').Router();
const mongoose = require('mongoose');
const Message = require('../models/message');

/**
    * GET / api /
    * Get all messages
    * @returns { Array }
    * @public
    * 
    * @author: Karicharla GNV Swamy Naidu
    * @Updated: 2022 - 02 - 19
    * @updatedBy: Karicharla GNV Swamy Naidu
*/


router.get('/', async function (req, res) {
    try {
        const resposne = await Message.find();
        res.status(200).json(resposne);
    } catch (err) {
        res.status(500).json(err);
    }

});


/**
 * POST / api /
 * Create a new message
 * @returns { Object }
 * @public
 * @body { String } sender
 * @body { String } message
 * @body { String } receiver
 *
 * @author: Karicharla GNV Swamy Naidu
 * @Updated: 2022 - 02 - 19
 * @updatedBy: Karicharla GNV Swamy Naidu
*/

router.post('/', async function (req, res) {
    const newMessage = new Message(req.body);
    try {
        const resposne = await newMessage.save();
        res.status(200).json(resposne);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

/**
 * get / api /:id
 * Get a message by id
 * @returns { Object }
 * @public
 * @params { String } id
 * 
 * @author: Karicharla GNV Swamy Naidu
 * @Updated: 2022 - 02 - 19
 * @updatedBy: Karicharla GNV Swamy Naidu
 */
router.get('/:id', async function (req, res) {
    const id = req.params.id;
    try {
        const resposne = await Message.findById(id);
        res.status(200).json(resposne);
    } catch (err) {
        res.status(500).json(err);
    }
});



router.delete('/:id', async function (req, res) {
    const id = req.params.id;
    try {
        const resposne = await Message.findByIdAndDelete(id);
        res.status(200).json(resposne);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
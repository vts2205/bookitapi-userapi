const models = require('../../models/init-models').initModels()
const moment = require('moment')
// const { Sequelize } = require('sequelize')

exports.userbookhistroy = async function (req, res) {
    console.log('Booking Histroy for User')
    console.log(req)

    try {
        console.log('+++++++++ User Booking Histroy Details +++++++++++')
        console.log(req.body)
        const bookinghistory = await models.carShifts.findAll({
            raw: true,
            where: {
                customer_id : req.body.userId
            }
        })
        console.log('<<<<<<<< User Booking History >>>>>>>>>>>>>>>>>>')
        console.log(bookinghistory)
        console.log('<<<<<<<< User Booking History >>>>>>>>>>>>>>>>>>')
        return res.status(200).send(bookinghistory);

    } catch (err) {
        if (err)
            return res.status(500).send(err);
    }
} 
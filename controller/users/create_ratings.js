const models = require('../../models/init-models').initModels()
const moment = require('moment')


exports.createratings = async function (req, res) {
    console.log('Ratings route')
    console.log(req)

    try {

        console.log('+++++++++ Get Create Profile +++++++++++')
        console.log(req.body)

        const ratings = {
            ratings: req.body.ratings
        }

        const getratings = await models.cabShifts.update(ratings, {
            where: {
                driver_id: req.body.driverid
            }
        })
        console.log(getratings)
        console.log('+++++++++++++++ create Ratings End +++++++++++++++')

        return res.status(200).send('Ratings Created Successfully');
    } catch (err) {
        if (err)
            return res.status(500).send(err);
    }
} 
const models = require('../../models/init-models').initModels()


exports.tripRequest = async function(req,res) {

    console.log(req.body)
    let number = 0

    try {

        const json = {
            customer_id: req.body.userId,
            trip_request_time: req.body.requestTime,
            pickup_location: req.body.pickup,
            drop_location: req.body.drop,
            trip_type: req.body.tripType,            
        }

        const tripNumber = await models.carShifts.findOne({
            raw:true,
            attributes: ['trip_id'],
            order:[['trip_id', 'DESC']],            
        })


        if(tripNumber !== null) {
            json.trip_id = 1

            await models.carShifts.create(json)
        } else {
             number = tripNumber.trip_id
            json.trip_id = number++
            await models.carShifts.create(json)
        }

        res.status(200).send('created Successfully')

    }
    catch(err) {
        res.status(500).send(err)
    }
}
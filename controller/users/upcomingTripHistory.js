const models = require('../../models/init-models').initModels()

exports.tripHistoryUpcoming = async function(req,res) {
    console.log(req.query)

    try{

        const tripDetails = await models.cab_shifts.findAll({
            raw:true,
            where:{
                user_id: req.query.userId,  
                trip_status: 'upcoming'              
            }
        })
        return res.status(200).send(tripDetails)

    }catch(err) {
        return res.status(500).send(err)
    }
}
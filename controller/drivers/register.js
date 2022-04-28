const models = require('../../models/init-models').initModels()

exports.registerDriver = async function(req, res) {
    console.log(req.body)
    let driver_id = ''

    try{
        const register = await models.drivers.findOne({
            raw:true,
            where:{
                contact : req.body.contact
            }
        })
        console.log(register)

        if(register !== null) {
            return res.status(200).send({
                message: 'Driver Already Exists',
                body:{},                
            });
        }

        if(register=== null) {
            var driverId = await models.drivers.findOne({
                raw: true,
                attributes: ['driver_id'],
                order: [['id', 'DESC']]
            })
            console.log(driverId)
            if (driverId === null) {
                driver_id = 'driver_1'
                await models.drivers.create({
                    driver_id:driver_id,
                    name: req.body.name,
                    email: req.body.email,
                    contact: req.body.contact,
                    password: req.body.password,
                   // fcm_token: req.body.fcmToken,
                })
            } else {
                console.log(driverId.driver_id)
                console.log((driverId.driver_id).split("_"))
                let data = (driverId.driver_id).split("_");
                console.log(data)
                let number = (parseInt(data[1].toString()));
                console.log(number++)
                driver_id = 'driver_' + number++
                console.log(driver_id)
                await models.drivers.create({
                    driver_id:driver_id,
                    name: req.body.name,
                    email: req.body.email,
                    contact: req.body.contact,
                    password: req.body.password,
                   // fcm_token: req.body.fcmToken,
                })
            }
        }
        return res.status(200).send({
            message: 'Driver Created Successfully',
            body:{
                driver_id: driver_id
            }
        });
    } catch (err) {
        if (err)
            return res.status(500).send(err);
    }
}
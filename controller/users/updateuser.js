const models = require('../../models/init-models').initModels()
const moment = require('moment')


exports.updateuserprofile = async function (req, res) {
    console.log('User route')
    console.log(req)
    try {
        console.log('+++++++++++++++ Update User Profile Start +++++++++++++++')
        const tempJson = {            
            name: req.body.name,
            dob: req.body.dob,
            gender: req.body.gender,
            email: req.body.email, 

        }
        console.log(tempJson)
        const upadteuserdata = await models.users.update(tempJson, {
            where: {
                user_id: req.body.userId
            }
        })
        console.log(upadteuserdata)
        console.log('+++++++++++++++ Update User Profile End +++++++++++++++')

        return res.status(200).send('User updated Successfully');
    } catch (err) {
        if (err)
            return res.status(500).send(err);
    }
} 
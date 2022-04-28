const models = require('../../models/init-models').initModels()
const moment = require('moment')


exports.getalluserdata = async function (req, res) {
    console.log('User route')
    console.log(req)
    try {
        const getuserdata = await models.users.findOne({
            raw: true,
            where: {
                user_id: req.body.userId
            }
        })
       console.log(getuserdata)
       return res.status(200).send(getuserdata);
    } catch (err) {
        if (err)
            return res.status(500).send(err);
    }
} 
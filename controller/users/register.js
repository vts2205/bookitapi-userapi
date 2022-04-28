const models = require('../../models/init-models').initModels()
const moment = require('moment')


exports.registerUser = async function (req, res) {

    console.log('register route')
    console.log(req)

    try {
        const usersData = await models.users.findOne({
            raw: true,
            where: {
                contact: req.body.contact
            }
        })
        console.log(usersData)
        //  if (usersData === null) {
        await models.users.create({
            name: req.body.name,
            contact: req.body.contact,
            dob: req.body.dob,
            state: req.body.state,
            nationality: req.body.nationality,
            gender: req.body.gender,
            customer_type: "new",
            user_id: '001',
            age: 24,
            email : req.body.email,
            password: req.body.password,
            fcm_token: req.body.fcm_token


        })
        // }

        return res.status(200).send('User Created Successfully');
    } catch (err) {
        if (err)
            return res.status(500).send(err);
    }
} 
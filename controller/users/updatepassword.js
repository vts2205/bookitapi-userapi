const models = require('../../models/init-models').initModels()
const moment = require('moment')
const { Sequelize } = require('sequelize')

exports.getpasswordupdate = async function (req, res) {
    console.log('password Route')
    console.log(req)

    try {
        console.log('+++++++++ Upadte Password Details +++++++++++')
        console.log(req.body)
        const getcorrectpassword = await models.users.findOne({
            raw: true,
            where: {
                user_id: req.body.userId,
                password: req.body.oldPassword
            }
        })
        console.log('<<<<<<<< get Correct Password >>>>>>>>>>>>>>>>>>')
        console.log(getcorrectpassword)
        console.log('<<<<<<<< get Correct Password >>>>>>>>>>>>>>>>>>')
        if (getcorrectpassword !== null) {
            const getpassword = {
                name: req.body.newPassword,
            }
            const updatepassword = await models.users.update(getpassword, {
                where: {
                    user_id: req.body.userId
                }
            })
            console.log(updatepassword)
            console.log('<<<<<<<< Upadte Password Details >>>>>>>>>>>>>>>>>>')
            return res.status(200).send('The Given Password is Changed Sucessfully');
        }
        else{
            return res.status(200).send('The Given Old Password is Incorrect');
        }

    } catch (err) {
        if (err)
            return res.status(500).send(err);
    }
} 
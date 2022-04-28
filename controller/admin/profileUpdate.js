const models = require('../../models/init-models').initModels()

exports.profileUpdateAdmin = async function(req,res) {

    console.log(req)

    try{
        await models.admin.update({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact
        }, {where:{
            admin_id: req.body.adminId
        }})
        return res.status(200).send('Profile Update Successfully');

    } catch(err) {
        return res.status(500).send('Internal Server Error');

    }

}
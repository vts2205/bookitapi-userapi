const models = require('../../models/init-models').initModels()
const moment = require('moment')
const Ippopay = require("node-ippopay");


exports.ippopayorder = async function (req, res) {
    console.log('ippopay')
    console.log(req)
    try {
        var ippopay_instance = new Ippopay({
            public_key: 'pk_live_oLut0PTJTVhp',
            secret_key: 'sk_live_PeRtZaXq1oXkp7Vm0eb3E54VbTVYpq66jX2j5pVy',
        });

        const userDetails = await models.users.findOne({
            raw: true,
            where: {
                user_id: req.body.userId,
            }
        })

        console.log(userDetails)

        if (userDetails !== null) {
            ippopay_instance.createOrder({
                amount: req.body.amount,
                currency: 'INR',
                payment_modes: req.body.paymentMode,
                customer: {
                    name: userDetails.name,
                    email: userDetails.email,
                    phone: {
                        country_code: "91",
                         national_number: userDetails.contact
                    }
                }
            }, async function (err, data) {
                console.log(data)

                let json = {
                    payment_id : req.body.userId +'_'+ moment().valueOf(),
                    user_id: req.body.userId,
                    order_id:data.orderId,
                    payment_type: req.body.paymentMode,
                    amount: req.body.amount,
                    status: data.data.status
                }

                await models.payments.create(json)
                return res.status(200).send(data);
            });
        }
    } catch (err) {
        if (err)
            return res.status(500).send(err);
    }
} 
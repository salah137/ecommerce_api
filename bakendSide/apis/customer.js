const helpers = require('../db&Modules/db/helper')
const paypal = require("paypal-rest-sdk")

const checkOut = {
    url: '/api/user/checkOut/query?',
    method: async (req, res) => {
        const product = await helpers.getSingleProduct(req.query.id)
        paypal.configure(
            {
                'mode': 'sandbox', //sandbox or live
                'client_id': 'AacEODo1N4HRd1aAp0S18BgGHpH1Oq4xPkjMeRJ5eEkeubl7CO55Ws6dMdyTk6GQVE-6iMCXXbevftv8',
                'client_secret': 'EELNfs1neJ65vdX26A_YtQ1kbGVqlpHYhm9Qga8IKg9yI7dl8zUQZqfs6Lyr3yTQQs5ZhLvkyQ9zOQUB'

            }
        )
        var create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://return.url",
                "cancel_url": "http://cancel.url"
            },

            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": product.title,
                        "sku": product._id,
                        "price": product.price,
                        "currency": "USD",
                        "quantity": req.query.quantity
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": `${product.price * req.query.quantity}`
                },
                "description": "This is the payment description."
            }]
        };
        paypal.payment.create(create_payment_json, async (err, re) => {
            if (err) {
                console.log(err);
                return;
            }
            product.totalErnings += product.price * req.query.quantity
            await helpers.updateProduct(req.query.id, product)
            res.json(product)
        })

    },
}

const getSingleProduct = {
    url: "/api/customer/getSingleProduct/query?",
    method: async (req, res) => {
        const { title, images, deskription, price,_id } = await helpers.getSingleProduct(req.query.id)
        res.json(
            {
                title: title,
                images:images,
                deskription: deskription,
                price: price,
                id:_id,
            }
        )
    }
}

module.exports = { checkOut,getSingleProduct }
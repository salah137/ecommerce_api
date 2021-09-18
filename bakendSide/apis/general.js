const helper = require("../db&Modules/db/helper")
const getAllProducts = {
    url: '/api/all/getAll',
    method: async (req, res) => {
         paypal.configure(

        )
        res.json(
            (await helper.getAll()).map(
                (e) => {
                    return {
                        title: e.title,
                        image: e.images[0],
                        price: e.price,
                        id: e._id,
                        type: e.type
                    }
                }
            )
        )
    }
}




module.exports = { getAllProducts,  }
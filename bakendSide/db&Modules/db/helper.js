const Products = require("../modules/productModel")

const createProduct = async (query) => {
    return await Products.create(
        {
            title: query.title,
            deskription: query.deskription,
            images: query.images,
            type: query.type,
            price: query.price,
            totalErnings: 0,
            earningsByDays: []
        }
    )
}

const deleteProduct = async (id) => {
    await Products.findByIdAndDelete(id)
}

const updateProduct = async (id, model) => {
    await Products.findByIdAndUpdate(id, model)
}

const getAll = async () => {
    return await Products.find({})
}

const getSingleProduct = async (id) => {
    return await Products.findById(id)
}

module.exports = { createProduct, deleteProduct, updateProduct, getAll, getSingleProduct }
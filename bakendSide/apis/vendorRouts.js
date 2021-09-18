const helper = require("../db&Modules/db/helper")

const createTask = {
    url: "/api/vendor/createProducts/query?",
    method: async (req, res) => {
        if (req.query.title == undefined) {
            res.status(400).json(
                {
                    title: "Error",
                    msg: "Non geved title"
                }
            )
            return;
        }
        if (req.query.deskription == undefined) {
            res.status(400).json(
                {
                    title: "Error",
                    msg: "Non geved deskription"
                }
            )
            return;
        }
        if (req.query.images == undefined) {
            res.status(400).json(
                {
                    title: "Error",
                    msg: "Non geved images"
                }
            )
            return;
        }
        if (req.query.type == undefined) {
            res.status(400).json(
                {
                    title: "Error",
                    msg: "Non geved type"
                }
            )
            return;
        }
        if (req.query.price == undefined) {
            res.status(400).json(
                {
                    title: "Error",
                    msg: "Non geved price"
                }
            )
            return;
        }
        const p = await helper.createProduct(req.query)
        res.json(
            {
                title: "done",
                msg: p
            }
        )

    }
}

const deleteProduct = {
    url: "/api/vendor/deleteProducts/query?",
    method: async (req, res) => {
        console.log('hello');
        if (req.query.id == undefined) {
            res.status(404).json(
                {
                    title: "Error",
                    msg: "Non geved id"
                }
            )
            return;
        }
        await helper.deleteProduct(req.query.id)
        res.json(
            {
                title: "done",
                msg: "product is deleted successfully"
            }
        )
    }
}

const updateProduct = {
    url: '/api/vendor/updateProduct/query?',
    method: async (req, res) => {
        console.log('hello');
        if (req.query.title == undefined) {
            res.status(400).json(
                {
                    title: "Error",
                    msg: "Non geved title"
                }
            )
            return;
        }
        if (req.query.deskription == undefined) {
            res.status(400).json(
                {
                    title: "Error",
                    msg: "Non geved deskription"
                }
            )
            return;
        }
        if (req.query.images == undefined) {
            res.status(400).json(
                {
                    title: "Error",
                    msg: "Non geved images"
                }
            )
            return;
        }
        if (req.query.type == undefined) {
            res.status(400).json(
                {
                    title: "Error",
                    msg: "Non geved type"
                }
            )
            return;
        }
        if (req.query.price == undefined) {
            res.status(400).json(
                {
                    title: "Error",
                    msg: "Non geved price"
                }
            )
            return;
        }
        await helper.updateProduct(req.query.id, req.query)
        res.status(200).json(
            {
                title: "Success",
                msg: "Product updated successfully"
            }
        )
    },
}

const getSingleProduct = {
    url: "/api/vendor/getSingle/query?",
    method: async (req, res) => {
        if (req.query.id == undefined) {
            res.json(
                {
                    title: "Error",
                    msg: "Non Id"
                }
            )
            return;
        }
        res.json(await helper.getSingleProduct(req.query.id))
    }
}
module.exports = { createTask, deleteProduct, updateProduct,getSingleProduct }
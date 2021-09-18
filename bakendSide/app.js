// import all what we need
const express = require("express")
const connect = require("./db&Modules/db/connect")
const vendorUrls = require("./apis/vendorRouts")
const generalApi = require("./apis/general")
const userApi = require("./apis/customer")

// set up the .env fil
require("dotenv").config()

// create the server
const app = express()


// wait for the database then run the server
const start = async (port) => {
    await connect.connect(process.env.MONGO_URL)
    app.listen(
        port,
        () => {
            console.log(`http://localhost:${port}`);
        }
    )
}
start(process.env.PORT || 3000)


// get all productes
app.get(
    `${generalApi.getAllProducts.url}`,
    (req, res) => generalApi.getAllProducts.method(req, res)
)

// get single producte
app.get(
    vendorUrls.getSingleProduct.url,
    (req, res) => vendorUrls.getSingleProduct.method(req, res)
)

// create a producte
app.post(
    `${vendorUrls.createTask.url}`,
    (req, res) => vendorUrls.createTask.method(req, res)
)
// delete the producte
app.delete(
    `${vendorUrls.deleteProduct.url}`,
    (req, res) => vendorUrls.deleteProduct.method(req, res)
)
// update the producte
app.put(
    `${vendorUrls.updateProduct.url}`,
    (req, res) => vendorUrls.updateProduct.method(req, res)
)
// checkout the payment
app.post(
    `${userApi.checkOut.url}`,
    (req, res)=>userApi.checkOut.method(req, res)
)
// get a single product to user
app.get(
    `${userApi.getSingleProduct.url}`,
    (req, res)=>userApi.getSingleProduct.method(req, res)
)
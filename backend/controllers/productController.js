

//Add product
const addProduct = async (req, res) => {
    try {

        const { name, description, price, category, subCategory, sizes, bestseller } = req.body

        const image1 = req.files.image1[0]
        const image2 = req.files.image2[0]
        const image3 = req.files.image3[0]
        const image4 = req.files.image4[0]

        console.log(name, description, price, category, subCategory, sizes, bestseller)
        console.log(image1, image2, image3, image4)

        res.json({ success: true, message: "Product added successfully" });
    } catch (error) {
        console.log
        res.json({ success: false, message: error.message })
    }
}


//list product
const listProducts = async (req, res) => {

};

//remove product
const removeProducts = async (req, res) => {

};

//single product info
const singleProduct = async (req, res) => {

};

module.export = {
    listProducts,
    addProduct,
    removeProducts,
    singleProduct
}
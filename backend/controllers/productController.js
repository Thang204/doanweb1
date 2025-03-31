// Add product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        // Validate required fields
        if (!name || !description || !price || !category) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        // Validate file uploads
        const image1 = req.files?.image1?.[0];
        const image2 = req.files?.image2?.[0];
        const image3 = req.files?.image3?.[0];
        const image4 = req.files?.image4?.[0];

        if (!image1 || !image2 || !image3 || !image4) {
            return res.status(400).json({ success: false, message: "All images are required" });
        }

        console.log(name, description, price, category, subCategory, sizes, bestseller);
        console.log(image1, image2, image3, image4);

        res.json({ success: true, message: "Product added successfully" });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// List products
const listProducts = async (req, res) => {
    try {
        // Fetch products from the database (placeholder logic)
        const products = []; // Replace with actual database query
        res.json({ success: true, products });
    } catch (error) {
        console.error("Error listing products:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Remove products
const removeProducts = async (req, res) => {
    try {
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({ success: false, message: "Product ID is required" });
        }

        // Remove product from the database (placeholder logic)
        console.log(`Removing product with ID: ${productId}`);
        res.json({ success: true, message: "Product removed successfully" });
    } catch (error) {
        console.error("Error removing product:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Single product info
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({ success: false, message: "Product ID is required" });
        }

        // Fetch product from the database (placeholder logic)
        const product = {}; // Replace with actual database query
        res.json({ success: true, product });
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Export controllers
module.exports = {
    listProducts,
    addProduct,
    removeProducts,
    singleProduct,
};

import Product from '../schema/productSchema.js';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);

    } catch (error) {
        console.log('Error:', error.messasge);
    }
}
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({ 'id': req.params.id });
        res.json(product);
    } catch (error) {
        console.log('Error:', error.message);
    }
}
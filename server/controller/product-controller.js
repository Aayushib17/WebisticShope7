import Product from '../model/productSchema.js';


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.json(products);
    }catch (error) {

    }
}

export const getProductById = async (request, response) => {
    try {
        const products = await Product.findOne({ 'id': request.params.id });
        response.json(products);

        const id = request.params.id;
        const product = await Product.findOne({'id': id})
        response.status(200).json(product);
    }catch (error) {
        response.status(500).json({message: error.message});
    }
}
import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: Array,
        required: true
    },
    image: {
        type: Array,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    offerPrice: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true })

const Product = model('product', productSchema)

export default Product
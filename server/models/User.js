import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cartItems: {
        type: Object,
        default: {}
    },
}, { minimize: false }) // minimize used to remove empty data

const User = model('user', userSchema)

export default User
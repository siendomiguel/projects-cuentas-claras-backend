import mongoose from 'mongoose'

export const schemaUser = new mongoose.Schema({
    name: { type: String, required: true },
    user_name: { type: String, required: false },
    email: { type: String, required: true },
    phone_number: { type: String, required: false },
    password: { type: String, required: true },
},
{
    timestamps: true,
    versionKey: false
})
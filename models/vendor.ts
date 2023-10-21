import mongoose, { Schema, Model, Document } from "mongoose";

interface vendorInputs extends Document{
    name: string;
    owenerName: string;
    foodType: [string];
    pincode: string;
    address: string;
    phone: string;
    password: string;
    email: string;
    serviceAvailable: boolean;
    coverImage: [string];
    rating: number;
}

const vendorSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    owenerName: {
        type: String,
        require: true
    },
    foodType: {
        type: [String],
        require: true
    },
    pincode: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    serviceAvailable: {
        type: Boolean,
        require: true
    },
    coverImage: {
        type: [String],
        require: true
    },
    rating: {
        type: Number,
        require: true
    },
})

const Vendor = mongoose.model<vendorInputs>("vendor", vendorSchema)
export {Vendor}
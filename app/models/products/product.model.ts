import { Document, Schema, Types, model } from "mongoose";

const productsSchema: Schema = new Schema({
    productTitle: {
        type: String,
        required: [true, "Please Enter Product Title"],
    },
    productDetail: {
        type: String,
        required: [true, "Please Enter Product Detail"],
    },
    productPrice: {
        type: Number,
        required: [true, "Please Enter Product Price"],
        maxLength: [8, "Price cannot exceed 8 characters"],
    },
    productImage: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],
    categories: [
        {
            type: Schema.Types.ObjectId,
            ref: "Categories",
            required: true
        },
    ],
});
export const Products = model("Products", productsSchema);
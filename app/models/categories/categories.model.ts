import { Document, Schema, Types, model } from "mongoose";

const categoriesSchema: Schema = new Schema({
    categoryTitle: {
        type: String,
        required: [true, "Please Enter Categories Title"],
    },
    categorySlug: {
        type: String,
        required: [true, "Please Enter Categories Slug"],
    },
});
export const Categories = model("Categories", categoriesSchema);
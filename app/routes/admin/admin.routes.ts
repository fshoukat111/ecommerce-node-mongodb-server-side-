import { Router } from "express";
import {
    adminCreateProduct,
    adminGetProductList,
    adminUpdateProductById,
    adminDeleteProductById,
    adminGetCategoryList,
    adminCreateCategory,
    adminDeleteCategoryById,
    adminUpdateCategoryById
} from "@app/controllers/admin";

export const adminProductRouter = Router();

//Categories
adminProductRouter.route("/categories").get(adminGetCategoryList);
adminProductRouter.route("/create/category").post(adminCreateCategory);
adminProductRouter.route("/category/:id").put(adminUpdateCategoryById).delete(adminDeleteCategoryById);

//Products
adminProductRouter.route("/products").get(adminGetProductList);
adminProductRouter.route("/create/product").post(adminCreateProduct);
adminProductRouter.route("/product/:id").put(adminUpdateProductById).delete(adminDeleteProductById);

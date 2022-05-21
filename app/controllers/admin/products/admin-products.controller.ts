import { NextFunction, Request, Response } from "express";
import { Products } from "@app/models/products/product.model";

export const adminCreateProduct = async (req: Request, res: Response, next: NextFunction) => {
    const createProduct = await Products.create(req.body);
    res.status(201).json({
        success: true,
        createProduct
    });
};

export const adminGetProductList = async (req: Request, res: Response, next: NextFunction) => {
    const productList = await Products.find().populate('categories');
    res.status(200).json({
        success: true,
        productList
    });
};

export const adminUpdateProductById = async (req: Request, res: Response, next: NextFunction) => {
    const productById = await Products.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    if (!productById) {
        return next("Product not found")
    }
    res.status(200).json({
        success: true,
        productById
    });
};

// Delete Product
export const adminDeleteProductById = async (req: Request, res: Response, next: NextFunction) => {
    const productById = await Products.findById(req.params.id);
    if (!productById) {
      return next("Product not found");
    }
    // Deleting Images From Cloudinary
    // for (let i = 0; i < product.images.length; i++) {
    //   await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    // }
    await productById.remove();
    res.status(200).json({
        success: true,
        message: "Product Delete Successfully",
    });
};
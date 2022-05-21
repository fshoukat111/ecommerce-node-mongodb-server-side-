import { Categories } from "@app/models/categories/categories.model";
import { NextFunction, Request, Response } from "express";

export const adminCreateCategory = async (req: Request, res: Response, next: NextFunction) => {
    const createCategory = await Categories.create(req.body);
    res.status(201).json({
        success: true,
        createCategory
    });
};

export const adminGetCategoryList = async (req: Request, res: Response, next: NextFunction) => {
    const categoryList = await Categories.find();
    res.status(200).json({
        success: true,
        categoryList
    });
};

export const adminUpdateCategoryById = async (req: Request, res: Response, next: NextFunction) => {
    const categoryById = await Categories.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    if (!categoryById) {
        return next("Category not found")
    }
    res.status(200).json({
        success: true,
        categoryById
    });
};

// Delete Product
export const adminDeleteCategoryById = async (req: Request, res: Response, next: NextFunction) => {
    const categoryById = await Categories.findById(req.params.id);
    if (!categoryById) {
        return next("Product not found");
    }
    // Deleting Images From Cloudinary
    // for (let i = 0; i < product.images.length; i++) {
    //   await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    // }
    await categoryById.remove();
    res.status(200).json({
        success: true,
        message: "Category Delete Successfully",
    });
};
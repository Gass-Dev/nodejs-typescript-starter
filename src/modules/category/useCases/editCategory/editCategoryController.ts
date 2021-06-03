import { EditCategory } from "./editCategory";
import { Request, Response } from "express";

export class EditCategoryController {
  private useCase: EditCategory;

  constructor(editCategory: EditCategory) {
    this.useCase = editCategory;
  }

  public async execute(req: Request, res: Response) {
    const updateCategory = await this.useCase.editCategory(
      req.params,
      req.body
    );
    res.status(200).json(updateCategory);
  }
}

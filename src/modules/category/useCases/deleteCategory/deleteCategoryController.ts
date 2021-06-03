import { DeleteCategory } from "./deleteCategory";
import { Request, Response } from "express";


export class DeleteCategoryController {
  private useCase: DeleteCategory;

  constructor(deleteCategory: DeleteCategory) {
    this.useCase = deleteCategory;
  }

  public async execute(req: Request, resp: Response) {
    const { id } = req.body;
    const deleteCategory = await this.useCase.deleteCategory(id);
    resp.status(200).json(deleteCategory);
  }
}
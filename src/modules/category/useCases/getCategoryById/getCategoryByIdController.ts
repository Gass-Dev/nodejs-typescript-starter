import { GetCategoryById } from "./getCategoryById";
import { Request, Response } from "express";

export class GetCategoryByIdController {
  private useCase: GetCategoryById;

  constructor(getCategoryById: GetCategoryById) {
    this.useCase = getCategoryById;
  }

  public async execute(req: Request, resp: Response) {
    const id = req.params.id;
    const categories = await this.useCase.getCategoryById(id);
    resp.status(200).json(categories);
  }
}

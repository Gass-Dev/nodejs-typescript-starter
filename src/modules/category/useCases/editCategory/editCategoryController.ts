import { EditCategory } from './editCategory'
import { Request, Response } from 'express'
//Controller

export class EditCategoryController {
    private useCase: EditCategory

    constructor(editCategory: EditCategory) {
        this.useCase = editCategory;
    }

    public async execute(_req: Request, res: Response) {

        const categories = await this.useCase.execute()
        console.log(categories);

        res.status(200).json(categories)
    }
}
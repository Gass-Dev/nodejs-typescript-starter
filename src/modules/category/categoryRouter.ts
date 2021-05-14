import { Router } from 'express'
import { createCategoryController } from './useCases/createCategory/'
import { getCategoriesController } from './useCases/getCategories'

const categoryRouter: Router = Router();

///api/v1/skills/
categoryRouter.post('/', (req, res) => createCategoryController.execute(req, res))
categoryRouter.get('/', (req, res) => getCategoriesController.execute(req,res))

export { categoryRouter }
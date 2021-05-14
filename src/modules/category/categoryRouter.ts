import { Router } from 'express'
import { createCategoryController } from './useCases/createCategory/'
import { getCategoriesController } from './useCases/getCategories'
import { editCategoryController} from './useCases/editCategory'
// import { deleteCategoryController } from './useCases/deleteCategory'

const categoryRouter: Router = Router();

///api/v1/skills/
categoryRouter.post('/', (req, res) => createCategoryController.execute(req, res))
categoryRouter.get('/', (req, res) => getCategoriesController.execute(req,res))
categoryRouter.put('/update', (req, res) => editCategoryController.execute(req, res))
// categoryRouter.get('/delete', (req, res) => deleteCategoryController.execute(req, res))

export { categoryRouter }
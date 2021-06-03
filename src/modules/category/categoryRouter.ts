import { Router } from "express";
import { createCategoryController } from "./useCases/createCategory";
import { getCategoryController } from "./useCases/getCategory/";
import { getCategoryByIdController } from "./useCases/getCategoryById";
import { editCategoryController } from "./useCases/editCategory/";
import { deleteCategoryController } from "./useCases/deleteCategory";

const categoryRouter: Router = Router();

categoryRouter.post("/", (req, resp) => {
  createCategoryController.execute(req, resp);
});

categoryRouter.get("/", (req, resp) =>
  getCategoryController.execute(req, resp)
);

categoryRouter.get("/:id", (req, resp) =>
  getCategoryByIdController.execute(req, resp)
);

categoryRouter.patch("/:id", (req, resp) => {
  editCategoryController.execute(req, resp);
});

categoryRouter.delete("/:id", (req, resp) => {
  deleteCategoryController.execute(req, resp);
});

export { categoryRouter };

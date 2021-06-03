import { CategoryRepo } from "../../categoryRepo";
import { categoryPropsId } from "../../categoryTypes";

export class DeleteCategory {
  private categoryRepo: CategoryRepo;

  constructor(categoryRepo: CategoryRepo) {
    this.categoryRepo = categoryRepo;
  }

  public async deleteCategory(params: categoryPropsId) {
    const categoryId = { id: params.id };
    const deleteCategory = await this.categoryRepo.deleteCategory(categoryId);
    const messageCategory = {
      deleteCategory,
      message: "The category has been deleted ",
    };
    return messageCategory;
  }
}

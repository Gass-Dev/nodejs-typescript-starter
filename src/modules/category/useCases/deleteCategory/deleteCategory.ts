import { CategoryRepo } from "../../categoryRepo";
import { categoryProps } from "../../categoryTypes";

export class DeleteCategory {
  private categoryRepo: CategoryRepo;

  constructor(categoryRepo: CategoryRepo) {
    this.categoryRepo = categoryRepo;
  }

  public async deleteCategory(params: categoryProps) {
    const categoryId = { id: params};
    const deleteCategory = await this.categoryRepo.deleteCategory(categoryId);
    const messageCategory = {
      deleteCategory,
      message: "The category has been deleted ",
    };
    return messageCategory;
  }
}

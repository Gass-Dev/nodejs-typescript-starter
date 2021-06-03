import { CategoryRepo } from "../../categoryRepo";

export class GetCategoryById {
  private categoryRepo: CategoryRepo;

  constructor(categoryRepo: CategoryRepo) {
    this.categoryRepo = categoryRepo;
  }

  public async getCategoryById(props: any) {
    const category = await this.categoryRepo.getCategoryById(props);
    return category;
  }
}
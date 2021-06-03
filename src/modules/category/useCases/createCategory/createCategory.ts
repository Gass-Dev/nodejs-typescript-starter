//UseCase -> Service -> de la logique
import { CategoryRepo } from "../../categoryRepo";
import { categoryProps } from "../../categoryTypes";

export class CreateCategory {
  private categoryRepo: CategoryRepo;

  constructor(categoryRepo: CategoryRepo) {
    this.categoryRepo = categoryRepo;
  }

  public async createCategories(props: categoryProps) {
    const category = {
      name: props.name,
      description: props.description,
    };
    return await this.categoryRepo.createCategories(category);
  }
}

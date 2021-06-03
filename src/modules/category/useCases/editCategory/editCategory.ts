//UseCase -> Service -> de la logique
import { CategoryRepo } from "../../categoryRepo";

export class EditCategory {
  private categoryRepo: CategoryRepo;

  constructor(categoryRepo: CategoryRepo) {
    this.categoryRepo = categoryRepo;
  }

  public async editCategory(Props: any, params: any) {
    const updatecategory = await this.categoryRepo.editCategory(
      Props,
      params.id
    );
    return updatecategory;
  }
}

//UseCase -> Service -> de la logique
import { CategoryRepo } from "../../categoryRepo";

export class EditCategory {
    private categoryRepo: CategoryRepo;

    constructor(categoryRepo: CategoryRepo) {
        this.categoryRepo = categoryRepo
    }

    public async execute() {
        return await this.categoryRepo.editCategory();
    }
}
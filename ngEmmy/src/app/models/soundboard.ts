import { User } from "./user";

export class Soundboard {
  id: number;
  name: string;
  description: string;
  createDate: string;
  isPublic: boolean;
  isDefault: boolean;
  user: User;
  categories: Category[]

  constructor(id?: number, name?: string, description?: string, createDate?: string, isPublic?: boolean, isDefault?: boolean, user?: User, categories?: Category[] ){

    this.id = id;
    this.name = name;
    this.description = description;
    this.createDate = createDate;
    this.isPublic = isPublic;
    this.isDefault = isDefault;
    this.user = user;
    this.categories = categories;
  }

}

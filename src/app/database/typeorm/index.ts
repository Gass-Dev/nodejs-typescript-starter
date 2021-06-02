import { databaseCredentials } from './config'
import { entities } from './entities'
import { __prod__, NODE_ENV } from '../../../constant'

//Ici on load le tableau d'entité utilisé par TypeORM
//Cet objet nous servira à l'intérieur de nos services, pour pouvoir faire
// this.entities.User | this.entities.Skill | this.entities.Category
const typeORMConfig: any = databaseCredentials[NODE_ENV]
typeORMConfig.entities = entities;

export { typeORMConfig };
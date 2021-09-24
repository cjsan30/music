import { AbstractRepository, EntityRepository } from "typeorm";
import { User } from "../entity/user.eneity";

@EntityRepository(User)
export class UserRepository extends AbstractRepository<User> {
	
}
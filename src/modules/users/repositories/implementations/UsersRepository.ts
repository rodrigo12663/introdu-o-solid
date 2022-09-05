import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {

    const user = new User();
    const userObject = {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date()
    }
  
    const userCreate = Object.assign(user,userObject)

     this.users.push(userCreate)

     return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((element)=>element.id === id)

    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((element)=>element.email === email)

    return user;
  }

  turnAdmin(receivedUser: User): User {
    Object.assign(receivedUser, {
      name:receivedUser.name,
      email:receivedUser.email,
      admin: true,
      updated_at: new Date(),
    });

    return receivedUser;
  }

  list(): User[] {
  
    return this.users;
  }
}

export { UsersRepository };

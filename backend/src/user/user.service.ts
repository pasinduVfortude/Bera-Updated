import { Dependencies, Injectable } from '@nestjs/common';
import { getCustomRepositoryToken, getRepositoryToken } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Sec_user } from './entities/user.entity';

@Injectable()
@Dependencies(getRepositoryToken(Sec_user))
export class UserService {
  userRepository:any
  constructor(userRepository:Sec_user){
    this.userRepository=userRepository

  }
  create(createUserDto: CreateUserDto) {
  //   createUserDto.forEach((value, key) => {
      console.log("+++++++++++")
      console.log(createUserDto)
  //     console.log(key+" "+value)
  // })

  

    createUserDto.client_id = ""
    createUserDto.userName = ""

    return this.userRepository.create({createUserDto})
    
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(userid: string) {
    return this.userRepository.findOneBy({username:userid})
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}

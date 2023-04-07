import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  create(@Body() createUserDto) {
    // console.log("triggered123")
  //   createUserDto.forEach((value, key) => {
  //     console.log(key+" "+value)
  // })
    console.log(".................")
    console.log(createUserDto)
    console.log("..................")
    return this.userService.create(createUserDto);
  }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  @Get(':userid')
  findOne(@Param('userid') userid: string) {
    return this.userService.findOne(userid);
  }

  @Get('/hello')
  getHello(): string {
    const str = "str hello world";
    return str;
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}

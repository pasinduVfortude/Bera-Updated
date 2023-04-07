import { Dependencies, Injectable } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateFiledetailDto } from './dto/create-filedetail.dto';
import { UpdateFiledetailDto } from './dto/update-filedetail.dto';
import {Files} from "./entities/filedetail.entity"

@Injectable()
@Dependencies(getRepositoryToken(Files))
export class FiledetailService {
  filedetailRepository:any
  constructor(filedetailRepository:Files){
    this.filedetailRepository=filedetailRepository
  }
  create(createFiledetailDto: CreateFiledetailDto) {
    return this.filedetailRepository.save(createFiledetailDto)
  }

 async findAll() {
    return this.filedetailRepository.find()
  }

 async findOne(id: number) {
    return `This action returns a #${id} filedetail`;
  }

  async findOneByName(filename:string){
    return this.filedetailRepository.findOneBy({filename:filename})
  }

 async update(id: number, updateFiledetailDto: UpdateFiledetailDto) {
    return `This action updates a #${id} filedetail`;
  }

  async remove(filename: string) {
    return this.filedetailRepository.delete({filename:filename})
  }
}

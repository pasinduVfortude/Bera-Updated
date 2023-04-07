import { Body, Controller, Dependencies, HttpException, HttpStatus, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { getRepositoryToken } from '@nestjs/typeorm';
import { diskStorage } from 'multer';
import { extname } from 'path';

import { FiledetailService } from 'src/filedetail/filedetail.service';
import { FileuploaderService } from './fileuploader.service';

@Controller('fileuploader')

export class FileuploaderController {
  constructor(private readonly fileuploaderService: FileuploaderService,private filedetailService:FiledetailService) {}
 

  @Post('upload')
  @UseInterceptors( FileInterceptor('file', {
    storage: diskStorage({
      destination: 'C://Users//PasinduV//Documents//Projects//BERA//BERA//backend//uploads//',
      filename: (req: any, file: any, cb: any) => {
               cb(null, `${file.originalname}`);
        //  cb(null, `${file.originalname + extname(file.originalname)}`);

    },
    }),
   // fileFilter: imageFileFilter,
  }),)
  async uploadFile(@UploadedFile() file: Express.Multer.File,@Body() data:any) {
    // const response = {
    // 	originalname: file.originalname,
    // 	filename: file.filename,
    // };
    // return response;
    //commented by pasinduV

    const exist = await this.filedetailService.findOneByName(file.originalname);
    // if (exist){
    //   return new HttpException("File Already Exists",HttpStatus.BAD_REQUEST)
    // }else{
    //  return this.filedetailService.create({...data,filename:file.originalname})
    //   console.log(data)
    // }
    if (exist) {
      console.log("File already exists")
      return {
        message: "File already exists",
        statusCode: HttpStatus.BAD_REQUEST,
        data: "File already exists"
      };
    } else {
      const created = await this.filedetailService.create({...data, filename: file.originalname});
      console.log(data);
      return {
        message: "File created successfully",
        statusCode: HttpStatus.CREATED,
        data: "Successfully uploaded!"
      };
    }
  } 
}

export const editFileName = (req, file, callback) => {
  console.log(file)
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  callback(null, `${name}-${randomName}${fileExtName}`);
};

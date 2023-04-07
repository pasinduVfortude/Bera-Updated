import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { FiledetailService } from './filedetail.service';
import { CreateFiledetailDto } from './dto/create-filedetail.dto';
import { UpdateFiledetailDto } from './dto/update-filedetail.dto';
const fs = require('fs');

@Controller('filedetail')
export class FiledetailController {
  constructor(private readonly filedetailService: FiledetailService) {}

  @Post()
  create(@Body() createFiledetailDto: CreateFiledetailDto) {
    console.log(createFiledetailDto)
    return this.filedetailService.create(createFiledetailDto);
  }

  @Get("findAll")
  async findAll() {
    console.log("request")
   return this.filedetailService.findAll();

  }

  @Get(':id')
 async findOne(@Param('id') id: string) {
    return this.filedetailService.findOne(+id);
  }

  @Patch(':id')
 async update(@Param('id') id: string, @Body() updateFiledetailDto: UpdateFiledetailDto) {
    return this.filedetailService.update(+id, updateFiledetailDto);
  }


//-------download pdf ---------------------------

@Get('downloadPDF/:filename')
downloadFile(@Param() file,@Res() res){
  console.log("filename",file.filename)
  return res.download('C://Users//PasinduV//Documents//Projects//BERA//BERA//backend//uploads//' + file.filename)
}


//-----Delete file -------------------------------
@Get('deletePDF/:filename')
deleteFile(@Param() file){
  console.log(file.filename)
  fs.unlink("C://Users//PasinduV//Documents//Projects//BERA//BERA//backend//uploads//" + file.filename, (err) => {
    if (err) {
        throw err;
    }
    return this.filedetailService.remove(file.filename)
    console.log("Delete File successfully.");
});
}

}



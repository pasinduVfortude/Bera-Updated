import { Module } from '@nestjs/common';
import { FileuploaderService } from './fileuploader.service';
import { FileuploaderController } from './fileuploader.controller';
import { MulterModule } from '@nestjs/platform-express';
import { FiledetailService } from 'src/filedetail/filedetail.service';
import { FiledetailModule } from 'src/filedetail/filedetail.module';
import { Files } from 'src/filedetail/entities/filedetail.entity';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  // imports:[MulterModule.register({
  //   dest: './uploads',
  // })],
  imports:[TypeOrmModule.forFeature([Files])],
  controllers: [FileuploaderController],
  providers: [FileuploaderService,FiledetailService]
})
export class FileuploaderModule {}

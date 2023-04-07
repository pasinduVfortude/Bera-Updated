import { Module } from '@nestjs/common';
import { FiledetailService } from './filedetail.service';
import { FiledetailController } from './filedetail.controller';
import { Files } from './entities/filedetail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Files])],
  controllers: [FiledetailController],
  providers: [FiledetailService],
  exports:[FiledetailService]
})
export class FiledetailModule {}

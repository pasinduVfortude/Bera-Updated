import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileuploaderModule } from './fileuploader/fileuploader.module';
import { FiledetailModule } from './filedetail/filedetail.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [FileuploaderModule, FiledetailModule,UserModule,TypeOrmModule.forRoot({
    type:"postgres",
    host:"localhost",
    database:"postgres",
    username:"postgres",
    password:"postgress",
    port: 5432,
    // entities:[User],
    autoLoadEntities:true,
    synchronize:true
  }
  ),
   ServeStaticModule.forRoot({
    rootPath: join("C://Users//PasinduV//Documents//Projects//BERA//BERA//backend//uploads//"),
  }),   AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

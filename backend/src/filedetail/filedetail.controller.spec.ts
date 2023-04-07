import { Test, TestingModule } from '@nestjs/testing';
import { FiledetailController } from './filedetail.controller';
import { FiledetailService } from './filedetail.service';

describe('FiledetailController', () => {
  let controller: FiledetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FiledetailController],
      providers: [FiledetailService],
    }).compile();

    controller = module.get<FiledetailController>(FiledetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

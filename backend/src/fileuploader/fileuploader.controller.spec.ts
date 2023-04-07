import { Test, TestingModule } from '@nestjs/testing';
import { FileuploaderController } from './fileuploader.controller';
import { FileuploaderService } from './fileuploader.service';

describe('FileuploaderController', () => {
  let controller: FileuploaderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileuploaderController],
      providers: [FileuploaderService],
    }).compile();

    controller = module.get<FileuploaderController>(FileuploaderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

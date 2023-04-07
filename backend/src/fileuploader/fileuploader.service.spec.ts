import { Test, TestingModule } from '@nestjs/testing';
import { FileuploaderService } from './fileuploader.service';

describe('FileuploaderService', () => {
  let service: FileuploaderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileuploaderService],
    }).compile();

    service = module.get<FileuploaderService>(FileuploaderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

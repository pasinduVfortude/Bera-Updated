import { Test, TestingModule } from '@nestjs/testing';
import { FiledetailService } from './filedetail.service';

describe('FiledetailService', () => {
  let service: FiledetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiledetailService],
    }).compile();

    service = module.get<FiledetailService>(FiledetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

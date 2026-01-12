import { Test, TestingModule } from '@nestjs/testing';
import { MultipartUploadService } from './multipart-upload.service';

describe('MultipartUploadService', () => {
  let service: MultipartUploadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MultipartUploadService],
    }).compile();

    service = module.get<MultipartUploadService>(MultipartUploadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

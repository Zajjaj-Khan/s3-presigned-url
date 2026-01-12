import { Test, TestingModule } from '@nestjs/testing';
import { MultipartUploadController } from './multipart-upload.controller';
import { MultipartUploadService } from './multipart-upload.service';

describe('MultipartUploadController', () => {
  let controller: MultipartUploadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MultipartUploadController],
      providers: [MultipartUploadService],
    }).compile();

    controller = module.get<MultipartUploadController>(MultipartUploadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

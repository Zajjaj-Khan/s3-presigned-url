import { Module } from '@nestjs/common';
import { MultipartUploadService } from './multipart-upload.service';
import { MultipartUploadController } from './multipart-upload.controller';

@Module({
  controllers: [MultipartUploadController],
  providers: [MultipartUploadService],
})
export class MultipartUploadModule {}

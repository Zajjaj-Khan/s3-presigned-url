import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MultipartUploadService } from './multipart-upload.service';
import { CreateMultipartUploadDto } from './dto/create-multipart-upload.dto';
import { UpdateMultipartUploadDto } from './dto/update-multipart-upload.dto';

@Controller('multipart-upload')
export class MultipartUploadController {
  constructor(private readonly multipartUploadService: MultipartUploadService) {}

  
}

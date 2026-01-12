import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException,HttpStatus } from '@nestjs/common';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('initiate')
  async initiateUpload(
    @Body() body: { fileName: string; contentType: string }
  ) {
    try {
      // Validate that the body has the required fields
      if (!body.fileName || !body.contentType) {
        throw new HttpException('key and contentType are required', HttpStatus.BAD_REQUEST);
      }

      const url = await this.uploadService.getPreSignedURL(
        body.fileName,
        body.contentType,
      );
      return { uploadUrl: url };
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to generate signed URL',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
import { PartialType } from '@nestjs/mapped-types';
import { CreateMultipartUploadDto } from './create-multipart-upload.dto';

export class UpdateMultipartUploadDto extends PartialType(CreateMultipartUploadDto) {}

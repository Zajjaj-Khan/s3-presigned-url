import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { v4 as uuidv4} from 'uuid';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UploadService {
   constructor(private configService: ConfigService) { }
  async getPreSignedURL( filename: string, contentType: string) {
    const key = `uploads/${uuidv4()}/${filename}`;
        const region = this.configService.get('AWS_REGION');
        const accessKey = this.configService.get('AWS_ACCESS_KEY_ID');
        const secretKey = this.configService.get('AWS_SECRET_KEY');
        const bucketName = this.configService.get("AWS_BUCKET_NAME")
        try {
            const s3 = new S3({
                region: region,
                accessKeyId: accessKey,
                secretAccessKey: secretKey
            });

            let params = {
                Bucket: bucketName,
                Key: key,
                ContentType: contentType,
                Expires: 1800
            };

            return await s3.getSignedUrlPromise('putObject', params);
        } catch (error) {
            throw error;
        }
    }
}

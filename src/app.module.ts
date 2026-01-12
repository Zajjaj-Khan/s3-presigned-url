import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UploadModule } from './upload/upload.module';
import { MultipartUploadModule } from './multipart-upload/multipart-upload.module';
import appConfig from './config/app.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes config accessible throughout the application
      load: [appConfig],
    }),
    UploadModule,
    MultipartUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

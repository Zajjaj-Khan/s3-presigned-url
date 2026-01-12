import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UploadModule } from './upload/upload.module';
import { MultipartUploadModule } from './multipart-upload/multipart-upload.module';
import { VaultService } from './vault/vault.service';
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
  providers: [AppService, VaultService],
})
export class AppModule {
  constructor(private readonly vaultService: VaultService) {}
    async onModuleInit() {
    const secrets = await this.vaultService.getS3Secrets();
     console.log('Secrets from Vault:', secrets); 
    Object.assign(process.env, secrets);
     console.log('Env now has AWS key:', process.env.AWS_ACCESS_KEY_ID); 
  }
}

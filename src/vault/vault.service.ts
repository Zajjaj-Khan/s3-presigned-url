import { Injectable, OnModuleInit } from '@nestjs/common';
import vault from 'node-vault';

@Injectable()
export class VaultService implements OnModuleInit {
  private client: any;

  async onModuleInit() {
    this.client = vault({
      endpoint: process.env.VAULT_ADDR,
      token: process.env.VAULT_TOKEN,
    });
  }

  async getS3Secrets() {
    const result = await this.client.read('kv/data/s3');
    return result.data.data;
  }
}


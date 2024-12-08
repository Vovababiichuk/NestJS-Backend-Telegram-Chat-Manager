import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TelegramService } from './telegram.service';
import { TelegramController } from './telegram.controller';
import {
  TelegramConnection,
  TelegramConnectionSchema,
} from './schemas/telegram-connection.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TelegramConnection.name, schema: TelegramConnectionSchema },
    ]),
  ],
  controllers: [TelegramController],
  providers: [TelegramService],
})
export class TelegramModule {}

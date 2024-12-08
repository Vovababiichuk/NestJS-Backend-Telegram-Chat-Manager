import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TelegramConnection extends Document {
  @Prop({ required: true })
  userId: string; // Foreign key до користувача

  @Prop({ required: true })
  telegramToken: string; // Токен для підключення

  @Prop({ default: Date.now })
  connectedAt: Date; // Час підключення
}

export const TelegramConnectionSchema =
  SchemaFactory.createForClass(TelegramConnection);

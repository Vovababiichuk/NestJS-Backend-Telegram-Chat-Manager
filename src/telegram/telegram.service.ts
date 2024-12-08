import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TelegramConnection } from './schemas/telegram-connection.schema';

@Injectable()
export class TelegramService {
  constructor(
    @InjectModel(TelegramConnection.name)
    private readonly telegramConnectionModel: Model<TelegramConnection>,
  ) {}

  async connectAccount(userId: string, telegramToken: string): Promise<string> {
    const existingConnection = await this.telegramConnectionModel.findOne({
      userId,
    });

    if (existingConnection) {
      throw new BadRequestException('Telegram account already connected');
    }

    const connection = new this.telegramConnectionModel({
      userId,
      telegramToken,
    });

    await connection.save();
    return 'Telegram account connected successfully';
  }

  async isAccountConnected(userId: string): Promise<boolean> {
    return !!(await this.telegramConnectionModel.findOne({ userId }));
  }

  async getChats(userId: string): Promise<any[]> {
    const connection = await this.telegramConnectionModel.findOne({ userId });

    if (!connection) {
      throw new BadRequestException('Telegram account not connected');
    }

    // Емуляція запиту чатів
    return [
      { id: 1, name: 'Chat 1' },
      { id: 2, name: 'Chat 2' },
    ];
  }

  async getMessages(userId: string, chatId: string): Promise<any[]> {
    const connection = await this.telegramConnectionModel.findOne({ userId });

    if (!connection) {
      throw new BadRequestException('Telegram account not connected');
    }

    // Емуляція запиту повідомлень
    return [
      { id: 1, text: 'Hello', chatId },
      { id: 2, text: 'How are you?', chatId },
    ];
  }
}

import {
  Controller,
  Post,
  Get,
  Body,
  Req,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { AuthenticationGuard } from '../guards/auth.guard';
import { ConnectTelegramDto } from './dtos/connect-telegram.dto';

@UseGuards(AuthenticationGuard)
@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Post('connect')
  async connectTelegramAccount(
    @Body() connectTelegramDto: ConnectTelegramDto,
    @Req() req,
  ) {
    const userId = req.userId; // Додається з AuthenticationGuard
    return this.telegramService.connectAccount(
      userId,
      connectTelegramDto.telegramToken,
    );
  }

  @Get('chats')
  async getChats(@Req() req) {
    const userId = req.userId;
    return this.telegramService.getChats(userId);
  }

  @Get('messages')
  async getMessages(@Req() req, @Query('chatId') chatId: string) {
    const userId = req.userId;
    return this.telegramService.getMessages(userId, chatId);
  }
}

import { IsString, IsNotEmpty } from 'class-validator';

export class ConnectTelegramDto {
  @IsString()
  @IsNotEmpty()
  telegramToken: string;
}

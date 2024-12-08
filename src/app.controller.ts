import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticationGuard } from './guards/authentication.guard';

@UseGuards(AuthenticationGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Permissions([{ resource: Resource.settings, actions: [Action.read] }])
  // @Get()
  // someProtectedRoute(@Req() req) {
  //   return { message: 'Accessed Resource', userId: req.userId };
  // }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

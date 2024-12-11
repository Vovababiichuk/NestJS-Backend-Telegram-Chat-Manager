import {
	Controller,
	Param,
	Get,
	Post,
	Body,
	UsePipes,
	ValidationPipe,
	Delete,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'

@Controller()
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post('signup')
	@UsePipes(new ValidationPipe())
	create(@Body() createUserDto: CreateUserDto) {
		return this.userService.create(createUserDto)
	}

	@Get(':email')
	findOne(@Param('email') email: string) {
		return this.userService.findOne(email)
	}

	@Get('users')
	findAll() {
		return this.userService.findAll()
	}

	@Delete(':id')
	delete(@Param('id') id: string) {
		return this.userService.delete(id)
	}
}

import {
	IsEmail,
	IsString,
	MinLength,
	Matches,
	IsNotEmpty,
} from 'class-validator'

export class CreateUserDto {
	@IsString({ message: 'Name is required' })
	@MinLength(4, { message: 'Name must be at least 4 chars long' })
	@IsNotEmpty({ message: 'Name cannot be empty' })
	name: string

	@IsEmail({}, { message: 'Invalid email format' })
	@IsNotEmpty({ message: 'Email cannot be empty' })
	email: string

	@MinLength(6, { message: 'Password must be at least 6 char long' })
	@Matches(/^(?=.*[0-9])/, {
		message: 'Password must contain at least 1 number',
	})
	@IsNotEmpty({ message: 'Password cannot be empty' })
	password: string
}

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { cors: true })
	app.setGlobalPrefix('api')
	app.enableCors()
	await app.listen(3001)

	console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap()

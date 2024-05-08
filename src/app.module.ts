import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [BookModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

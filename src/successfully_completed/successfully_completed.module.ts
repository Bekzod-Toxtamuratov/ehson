import { Module } from '@nestjs/common';
import { SuccessfullyCompletedService } from './successfully_completed.service';
import { SuccessfullyCompletedController } from './successfully_completed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuccessfullyCompleted } from './entities/successfully_completed.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([SuccessfullyCompleted]),
    JwtModule.register({}),
  ],
  controllers: [SuccessfullyCompletedController],
  providers: [SuccessfullyCompletedService],
})
export class SuccessfullyCompletedModule {}

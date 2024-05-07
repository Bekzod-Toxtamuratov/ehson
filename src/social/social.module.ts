import { Module } from '@nestjs/common';
import { SocialService } from './social.service';
import { SocialController } from './social.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Social } from './entities/social.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Social]), JwtModule.register({})],
  controllers: [SocialController],
  providers: [SocialService],
})
export class SocialModule {}

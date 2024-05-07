import { Module } from '@nestjs/common';
import { EhsonInfoService } from './ehson_info.service';
import { EhsonInfoController } from './ehson_info.controller';
import { EhsonInfo } from './entities/ehson_info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([EhsonInfo]), JwtModule.register({})],
  controllers: [EhsonInfoController],
  providers: [EhsonInfoService],
})
export class EhsonInfoModule {}

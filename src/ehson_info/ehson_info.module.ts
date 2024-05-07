import { Module } from '@nestjs/common';
import { EhsonInfoService } from './ehson_info.service';
import { EhsonInfoController } from './ehson_info.controller';
import { EhsonInfo } from './entities/ehson_info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EhsonInfo])],
  controllers: [EhsonInfoController],
  providers: [EhsonInfoService],
})
export class EhsonInfoModule {}

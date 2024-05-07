import { Module } from '@nestjs/common';

import { EhsonTypeController } from './ehson_type.controller';
import { EhsonTypesService } from './ehson_type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EhsonType } from './entities/ehson_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EhsonType])],
  controllers: [EhsonTypeController],
  providers: [EhsonTypesService],
})
export class EhsonTypeModule {}

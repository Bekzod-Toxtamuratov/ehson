import { Module } from '@nestjs/common';
import { SocialDistributorService } from './social_distributor.service';
import { SocialDistributorController } from './social_distributor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialDistributor } from './entities/social_distributor.entity';
import { Social } from '../social/entities/social.entity';
import { Distributor } from '../distributors/entities/distributor.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([SocialDistributor]),
    Social,
    Distributor,
    JwtModule.register({}),
  ],
  controllers: [SocialDistributorController],
  providers: [SocialDistributorService],
})
export class SocialDistributorModule {}

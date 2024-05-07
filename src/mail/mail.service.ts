// import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { User } from '../users/entities/user.entity';



@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
  ) {}
  async sendMail(user: User) {
    await this.mailerService.sendMail({
      to: user.email,
      subject:
        'Iltimos bu kodni hech kimga bermang, bu kod sizning kartangizdan oul yechish uchun tasdiqlash kodi',
      template: 'confirmation',
      context: {
        name: user.full_name,
        code: user.code,
      },
    });
  }
}

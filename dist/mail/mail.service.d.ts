import { MailerService } from '@nestjs-modules/mailer';
import { User } from '../users/entities/user.entity';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendMail(user: User): Promise<void>;
}

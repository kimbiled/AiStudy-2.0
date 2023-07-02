import { sendDto } from "./dto";
export declare class GmailService {
    private transport;
    send({ to, subject, html }: sendDto): Promise<void>;
}

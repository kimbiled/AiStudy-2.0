export declare class OpenAiService {
    private conf;
    private openai;
    private model;
    createChat(userRequest: string, systemRule: string): Promise<string>;
}

export declare class createDto {
    title: string;
    description: string;
    date: Date;
    type: "Video" | "Practice" | "Game";
    url?: string;
}
export declare class getAllDto {
    skip: number;
    limit: number;
}

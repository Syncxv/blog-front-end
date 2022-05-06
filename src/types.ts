export enum Category {
    WEB_DEVELOPMENT = 1,
    NON_TECHINCAL = 2,
}

export interface BlogPost {
    title: string;
    category: Category;
}

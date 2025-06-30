import { User } from "./user.type";

export interface Post {
    id: string; // 고유 id
    content: string; // 콘텐츠
    createdAt: string; // 생성일

    user: User;
    userId: string;
}

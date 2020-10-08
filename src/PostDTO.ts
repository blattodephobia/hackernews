export default class PostDTO {
    constructor(
        public PostID: number,
        public Url: URL,
        public Points: number,
        public Author: string,
        public DatePosted: Date,
        public CommentsCount: number) {

    }
}

export interface PostDTO2 {
    postID: number,
    url: URL,
    points: number,
    author: string,
    datePosted: Date,
    commentsCount: number
}
export default class PostDTO
{
    constructor(
        public PostID: number,
        public Url: URL,
        public Points: number,
        public Author: string,
        public DatePosted: Date,
        public CommentsCount: number)
    {

    }
}
/**
 * url
 * points
 * author
 * timestamp
 * commentscount
*/
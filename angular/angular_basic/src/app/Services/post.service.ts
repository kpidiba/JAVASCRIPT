import { Post } from "../models/post";

export class PostService {
    postList: Array<Post> = [
    { id: 1, postTitle: 'Post Time' },
    { id: 2, postTitle: 'Post Time' },
    { id: 3, postTitle: 'Post Time' },
  ];
  addNew(data:Post){
    this.postList.push(data);
  }
}

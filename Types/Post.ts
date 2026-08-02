import { IUserShortInfo } from "./User";
import { Media } from "./Media";

// Shape of the Post API response (post.model.js fields plus the
// authorInfo/parentPostInfo/likedByMe/repostNum fields post.js's post
// detail/feed services attach). Update both sides when either one's
// response shape changes.

export interface ISurveyOption {
  _id?: string;
  placeholder: string;
  value: string;
  usersId?: string[];
}

export interface IPost {
  _id?: string;
  content: string;
  media: Media[];
  survey: ISurveyOption[];
  usersTag?: any;
  usersTagInfo?: any;
  files: any;
  links?: any;
  linksInfo?: any;
  likesCount?: number;
  likedByMe?: boolean;
  replies?: IPost[];
  parentPost?: string;
  parentPostInfo?: IPost;
  status?: number;
  authorId?: string;
  authorInfo?: IUserShortInfo;
  createdAt?: Date;
  quote?: any;
  repostNum?: number;
  share?: any;
  type?: string;
}

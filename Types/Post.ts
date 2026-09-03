import { IUserShortInfo } from "./User";
import { Media } from "./Media";

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
  survey?: ISurveyOption[];
  usersTag?: any;
  usersTagInfo?: any;
  files?: any;
  links?: any;
  linksInfo?: any;
  likesCount?: number;
  likedByMe?: boolean;
  replies?: IPost[];
  repliesCount?: number;
  parentPost?: string;
  parentPostInfo?: IPost;
  status?: number;
  visibility?: number;
  authorId?: string;
  authorInfo?: IUserShortInfo;
  createdAt?: Date;
  quote?: any;
  repostNum?: number;
  share?: any;
  type?: string;
}

export interface IPostDraft extends Omit<IPost, "survey" | "files"> {
  survey: ISurveyOption[];
  files: any;
}

const ARRAY_OPTIONAL_FIELDS = [
  "survey",
  "usersTag",
  "usersTagInfo",
  "files",
  "links",
  "linksInfo",
  "replies",
] as const;

type PostResponseInput = Pick<IPost, "content" | "media"> &
  Partial<Omit<IPost, "content" | "media">>;

export class PostResponse implements IPost {
  _id?: string;
  content: string;
  media: Media[];
  survey?: ISurveyOption[];
  usersTag?: any;
  usersTagInfo?: any;
  files?: any;
  links?: any;
  linksInfo?: any;
  likesCount?: number;
  likedByMe?: boolean;
  replies?: IPost[];
  repliesCount?: number;
  parentPost?: string;
  parentPostInfo?: IPost;
  status?: number;
  visibility?: number;
  authorId?: string;
  authorInfo?: IUserShortInfo;
  createdAt?: Date;
  quote?: any;
  repostNum?: number;
  share?: any;
  type?: string;

  constructor(input: PostResponseInput) {
    this._id = input._id;
    this.content = input.content;
    this.media = input.media;

    for (const field of ARRAY_OPTIONAL_FIELDS) {
      (this as any)[field] = input[field] ?? [];
    }

    this.likesCount = input.likesCount;
    this.likedByMe = input.likedByMe;
    this.repliesCount = input.repliesCount;
    this.parentPost = input.parentPost;
    this.parentPostInfo = input.parentPostInfo;
    this.status = input.status;
    this.visibility = input.visibility;
    this.authorId = input.authorId;
    this.authorInfo = input.authorInfo;
    this.createdAt = input.createdAt;
    this.quote = input.quote;
    this.repostNum = input.repostNum;
    this.share = input.share;
    this.type = input.type;
  }
}

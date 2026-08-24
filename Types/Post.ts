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
  /** Optional (epic lean-api-response/T1): rỗng không phân biệt với "không có" — FE luôn default
   * về [] qua PostResponse, nên BE được phép lược field này khỏi response khi rỗng. */
  survey?: ISurveyOption[];
  usersTag?: any;
  usersTagInfo?: any;
  /** Optional (epic lean-api-response/T1): cùng lý do với `survey`. */
  files?: any;
  links?: any;
  linksInfo?: any;
  likesCount?: number;
  likedByMe?: boolean;
  /** Trang hiện có trong client (tự quản lý qua GET .../replies phân trang) — KHÔNG phải toàn bộ
   * reply, dùng `repliesCount` cho tổng số thật. */
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

/** State cho post ĐANG SOẠN (compose/edit) — khác `IPost` (contract response API, có thể thiếu
 * field optional). `survey`/`files` ở đây LUÔN là mảng/giá trị thật (khởi tạo qua `defaultPostInfo`),
 * không phải "có thể vắng mặt" như khi đọc từ response — dùng type riêng để tránh optional-chaining
 * thừa ở toàn bộ luồng soạn post (`PostPopup/*`). */
export interface IPostDraft extends Omit<IPost, "survey" | "files"> {
  survey: ISurveyOption[];
  files: any;
}

/** Field mảng optional của `IPost` — khi vắng mặt trong response, `PostResponse` default về `[]`
 * (khác field scalar optional, giữ `undefined` khi vắng mặt — xem constructor bên dưới). */
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

/** Default-init cho `IPost` — dùng ở CẢ FE (chuẩn hoá response trước khi vào store, FR-3) LẪN BE
 * (test contract NFR-3) để đảm bảo cùng 1 nguồn sự thật, tránh lệch giữa 2 repo (PRD Risk #4).
 * Field required (`content`, `media`) PHẢI được cung cấp — thiếu sẽ là lỗi type-check/runtime rõ
 * ràng thay vì âm thầm điền rỗng (đúng chủ đích: required nghĩa là BE cam kết luôn gửi). */
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

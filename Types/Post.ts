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

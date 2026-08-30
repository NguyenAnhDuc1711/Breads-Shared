// Shape of the User API response (raw schema fields minus password, plus
// the follow-relation/saved-post fields user.js's getUserInfo() computes
// via aggregation lookup). Kept in sync with DATN-Be's user.model.js and
// getUserInfo() service — update both sides when either one's response
// shape changes.

export interface IUserShortInfo {
  _id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  followersCount?: number;
}

export interface IUser extends IUserShortInfo {
  email: string;
  /** Optional (epic lean-api-response, mở rộng sang User): `getUserInfo(userId,
   * {includeRelations:false})` ĐÃ lược field này từ trước (xem profile người khác) — type cũ khai
   * required là SAI so với thực tế đang chạy. FE đã tự vá bằng `?.` ở nhiều nơi trước khi type này
   * được sửa. */
  followed?: string[];
  /** Optional — cùng lý do với `followed`. */
  following?: string[];
  followingCount?: number;
  /** Optional (epic lean-api-response): mảng post đã lưu, thường rỗng với user mới — an toàn để
   * lược khi rỗng, `UserResponse` default về `[]`. */
  collection?: string[];
  /** Optional (epic lean-api-response): cùng lý do với `collection`. */
  links?: string[];
  role: number;
  hasNewNotify?: boolean;
  createdAt?: Date | string | number;
  status?: number;
  statusReason?: string;
  lastActiveAt?: Date | string | number;
}

const USER_ARRAY_OPTIONAL_FIELDS = [
  "followed",
  "following",
  "collection",
  "links",
] as const;

type UserResponseInput = Pick<
  IUser,
  "_id" | "name" | "username" | "avatar" | "bio" | "email" | "role"
> &
  Partial<
    Omit<IUser, "_id" | "name" | "username" | "avatar" | "bio" | "email" | "role">
  >;

/** Default-init cho `IUser` — cùng vai trò với `PostResponse` (epic lean-api-response): field required
 * PHẢI được cung cấp; field mảng optional default `[]` khi vắng mặt; field scalar optional giữ
 * `undefined`. Dùng ở FE (chuẩn hoá response trước khi vào store) lẫn BE (test contract). */
export class UserResponse implements IUser {
  _id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  email: string;
  role: number;
  followersCount?: number;
  followed?: string[];
  following?: string[];
  followingCount?: number;
  collection?: string[];
  links?: string[];
  hasNewNotify?: boolean;
  createdAt?: Date | string | number;
  status?: number;
  statusReason?: string;
  lastActiveAt?: Date | string | number;

  constructor(input: UserResponseInput) {
    this._id = input._id;
    this.name = input.name;
    this.username = input.username;
    this.avatar = input.avatar;
    this.bio = input.bio;
    this.email = input.email;
    this.role = input.role;

    for (const field of USER_ARRAY_OPTIONAL_FIELDS) {
      (this as any)[field] = input[field] ?? [];
    }

    this.followersCount = input.followersCount;
    this.followingCount = input.followingCount;
    this.hasNewNotify = input.hasNewNotify;
    this.createdAt = input.createdAt;
    this.status = input.status;
    this.statusReason = input.statusReason;
    this.lastActiveAt = input.lastActiveAt;
  }
}

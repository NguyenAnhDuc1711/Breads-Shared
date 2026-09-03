
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
  followed?: string[];
  following?: string[];
  followingCount?: number;
  collection?: string[];
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

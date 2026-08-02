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
  followed: string[];
  following: string[];
  followingCount?: number;
  collection: string[];
  links: string[];
  role: number;
  hasNewMsg: boolean;
  hasNewNotify?: boolean;
  createdAt?: Date | string | number;
  status?: number;
}

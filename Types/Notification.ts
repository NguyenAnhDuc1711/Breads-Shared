import { IUserShortInfo } from "./User";

export interface INotificationPostDetails {
  content?: string;
}

export interface INotification {
  _id?: string;
  fromUser: string;
  toUsers?: string[];
  action: string;
  target?: string;
  isRead?: boolean;
  createdAt?: Date | string;
  FromUserDetails?:
    | IUserShortInfo
    | {
        _id?: string;
        name?: string;
        username: string;
        bio?: string;
        avatar: string;
      };
  postDetails?: INotificationPostDetails;
}

const NOTIFICATION_ARRAY_OPTIONAL_FIELDS = ["toUsers"] as const;

type NotificationResponseInput = Pick<INotification, "fromUser" | "action"> &
  Partial<Omit<INotification, "fromUser" | "action">>;

export class NotificationResponse implements INotification {
  _id?: string;
  fromUser: string;
  toUsers?: string[];
  action: string;
  target?: string;
  isRead?: boolean;
  createdAt?: Date | string;
  FromUserDetails?: any;
  postDetails?: INotificationPostDetails;

  constructor(input: NotificationResponseInput) {
    this._id = input._id;
    this.fromUser = input.fromUser;
    this.action = input.action;

    for (const field of NOTIFICATION_ARRAY_OPTIONAL_FIELDS) {
      (this as any)[field] = input[field] ?? [];
    }

    this.target = input.target;
    this.isRead = input.isRead ?? false;
    this.createdAt = input.createdAt;
    this.FromUserDetails = input.FromUserDetails;
    this.postDetails = input.postDetails;
  }
}

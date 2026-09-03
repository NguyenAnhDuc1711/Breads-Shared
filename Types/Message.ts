import { Media } from "./Media";

export interface IMessage {
  _id?: string;
  conversationId?: string;
  sender?: any;
  content?: string;
  media?: Media[];
  file?: any;
  files?: any[];
  links?: any[];
  reacts?: any[];
  usersSeen?: string[];
  isRetrieve?: boolean;
  respondTo?: IMessage;
  parentMsg?: string;
  type?: string;
  createdAt?: Date | string | null;
  updatedAt?: Date | string | null;
  icon?: string;
}

const MESSAGE_ARRAY_OPTIONAL_FIELDS = [
  "media",
  "files",
  "links",
  "reacts",
  "usersSeen",
] as const;

type MessageResponseInput = Partial<IMessage>;

export class MessageResponse implements IMessage {
  _id?: string;
  conversationId?: string;
  sender?: any;
  content: string;
  media: Media[] = [];
  file?: any;
  files: any[] = [];
  links: any[] = [];
  reacts: any[] = [];
  usersSeen: string[] = [];
  isRetrieve?: boolean;
  respondTo?: IMessage;
  parentMsg?: string;
  type?: string;
  createdAt?: Date | string | null;
  updatedAt?: Date | string | null;
  icon?: string;

  constructor(input: MessageResponseInput) {
    this._id = input._id;
    this.conversationId = input.conversationId;
    this.sender = input.sender;
    this.content = input.content ?? "";

    for (const field of MESSAGE_ARRAY_OPTIONAL_FIELDS) {
      (this as any)[field] = input[field] ?? [];
    }

    this.file = input.file;
    this.isRetrieve = input.isRetrieve ?? false;
    this.respondTo = input.respondTo;
    this.parentMsg = input.parentMsg;
    this.type = input.type ?? "TEXT";
    this.createdAt = input.createdAt;
    this.updatedAt = input.updatedAt;
    this.icon = input.icon ?? "";
  }
}

export interface IMessageDraft extends Omit<
  IMessage,
  "content" | "files" | "media" | "icon"
> {
  content: string;
  files: any[];
  media: Media[];
  icon: string;
}

import { IUserShortInfo } from "./User";
import { IMessage, MessageResponse } from "./Message";

export interface IConversation {
  _id?: string;
  participant?: IUserShortInfo | { _id: string; username: string; avatar: string };
  participants?: any[];
  lastMsg?: IMessage;
  theme?: string;
  emoji?: string;
  unreadCount?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

type ConversationResponseInput = Partial<IConversation>;

/**
 * Default-init cho `IConversation` (epic lean-api-response):
 * - Field required (`_id`, `participant`, `createdAt`, `updatedAt`) giữ nguyên.
 * - `participants` default về `[]` khi vắng mặt.
 * - `lastMsg` được bọc qua `MessageResponse` nếu có.
 * - `theme` default về `"default"`.
 * - `emoji` default về `":thumbsup:"`.
 * - `unreadCount` default về `0`.
 */
export class ConversationResponse implements IConversation {
  _id?: string;
  participant?: any;
  participants?: any[];
  lastMsg?: IMessage;
  theme?: string;
  emoji?: string;
  unreadCount?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;

  constructor(input: ConversationResponseInput) {
    this._id = input._id;
    this.participant = input.participant;
    this.participants = input.participants ?? [];
    this.lastMsg = input.lastMsg ? new MessageResponse(input.lastMsg) : undefined;
    this.theme = input.theme ?? "default";
    this.emoji = input.emoji ?? ":thumbsup:";
    this.unreadCount = input.unreadCount ?? 0;
    this.createdAt = input.createdAt;
    this.updatedAt = input.updatedAt;
  }
}

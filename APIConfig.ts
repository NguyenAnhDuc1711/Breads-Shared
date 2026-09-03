export const API_PREFIX = "/api/v1";

export const SITEMAP_MAX_RECORDS = 200_000;

export class Route {
  static USER = "/users";
  static POST = "/posts";
  static COLLECTION = "/collections";
  static NOTIFICATION = "/notifications";
  static MESSAGE = "/messages";
  static UTIL = "/util";
  static ANALYTICS = "/analytics";
  static REPORT = "/reports";
  static MEDIA = "/media";
}

export class USER_PATH {
  static ME = "/me";
  static GET_ALL = "/all";
  static ADMIN = "/admin";
  static PROFILE = "/:userId";
  static USERS_TO_FOLLOW = "/suggestions/to-follow";
  static SIGN_UP = "/";
  static LOGIN = "/sessions";
  static LOGOUT = "/sessions/logout";
  static FOLLOW = "/follow";
  static UPDATE = "/:id";
  static CHANGE_PW = "/:id/password";
  static CRAWL_USER = "/crawl";
  static USERS_FOLLOW = "/follow-list";
  static USERS_SEARCH = "/users-search";
  static USERS_TO_TAG = "/suggestions/to-tag";
  static CONNECT = "/connect";
  static UPDATE_FR_ONLINE = "/update-fr-onl";
  static GET_USERS_PENDING_POST = "/pending-post-lookup";
  static GET_USERS_WITH_STATUS = "/with-status";
  static ADMIN_DETAIL = "/:id/admin-detail";
  static ADMIN_ACTION = "/:id/admin-action";
  static VALIDATE_USER_EMAIL = "/email-validations";
  static REFRESH_TOKEN = "/sessions/refresh";
  static PW_RESET_REQUEST = "/password-reset/requests";
  static PW_RESET_VERIFY = "/password-reset/verify";
  static PW_RESET_CONFIRM = "/password-reset/confirm";
  static SITEMAP_ELIGIBLE = "/sitemap-eligible";
}

export class POST_PATH {
  static GET_ALL = "/";
  static USER = "/user-posts";
  static CREATE = "/";
  static UPDATE = "/:id";
  static LIKE = "/like/";
  static LIKE_TOGGLE = "/:id/like";
  static TICK_SURVEY = "/:id/survey-ticks";
  static CRAWL_POST = "/crawl";
  static GET_ONE = "/get-post";
  static UPDATE_POST_STATUS = "/:id/status";
  static UPDATE_POST_VISIBILITY = "/:id/visibility";
  static NEW_FROM_FOLLOWEE = "/new-from-followee";
  static ACTIVITIES = "/:id/activities";
  static REPLIES = "/:id/replies";
  static SITEMAP_ELIGIBLE = "/sitemap-eligible";
}

export class COLLECTION_PATH {
  static ADD = "/:userId/items";
  static REMOVE = "/:userId/items/:postId";
}

export class NOTIFICATION_PATH {
  static GET = "/";
  static CREATE = "/create";
  static READ = "/read";
  static GET_NEW = "/get-new";
}

export class MESSAGE_PATH {
  static GET_CONVERSATIONS = "/get-conversations";
  static GET_CONVERSATION_BY_USERS_ID = "/conversations/lookup-by-users";
  static GET_CONVERSATION_BY_ID = "/conversations/:conversationId";
  static GET_CONVERSATION_MEDIA = "/conversations/:conversationId/media";
  static GET_CONVERSATION_FILES = "/conversations/:conversationId/files";
  static GET_CONVERSATION_LINKS = "/conversations/:conversationId/links";
  static GET_MESSAGE = "/get-message";
  static GET_MESSAGES = "/get-messages";
  static GET_MSGS_BY_SEARCH = "/get-msgs-by-search";
  static CREATE = "/create";
  static GET = "/get";
  static DELETE = "/delete";
  static SEARCH = "/search";
  static REACT = "/react";
  static UPDATE_MSG = "/update-msg";
  static CONFIG_CONVERSATION = "/config-conversation";
  static RETRIEVE = "/retrieve";
  static FAKE_CONVERSATIONS = "/conversations/seed";
  static FAKE_CONVERSATIONS_MSGS = "/conversations/seed-messages";
  static SEEN_MSGS = "/seen-msgs";
  static UNREAD_UPDATE = "/unread-update";
  static SEND_NEXT = "/send-next";
}

export class UTIL_PATH {
  static UPLOAD = "/upload";
}

export class ANALYTICS_PATH {
  static CREATE = "/create";
  static GET = "/";
  static GET_SNAPSHOT_REPORT = "/get-user-active-in-date-range";
}

export class REPORT_PATH {
  static CREATE = "/";
  static GET = "/";
  static RESPONSE = "/:id/response";
  static REJECT = "/:id/reject";
  static GET_BY_USER = "/user/:id";
}

export class MEDIA_PATH {
  static SIGN_UPLOAD = "/sign-upload";
}

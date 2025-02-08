export class Route {
  static USER = "/users";
  static POST = "/posts";
  static COLLECTION = "/collections";
  static NOTIFICATION = "/notifications";
  static MESSAGE = "/messages";
  static UTIL = "/util";
  static ANALYTICS = "/analytics";
}

export class USER_PATH {
  static GET_ALL = "/all";
  static ADMIN = "/admin";
  static PROFILE = "/profile/";
  static USERS_TO_FOLLOW = "/users-to-follow";
  static SIGN_UP = "/signup";
  static LOGIN = "/login";
  static LOGOUT = "/logout";
  static FOLLOW = "/follow";
  static UPDATE = "/update/";
  static CHANGE_PW = "/change-pw/";
  static CRAWL_USER = "/crawl-user";
  static USERS_FOLLOW = "/users-follow";
  static USERS_SEARCH = "/users-search";
  static USERS_TO_TAG = "/users-to-tag";
  static CONNECT = "/connect";
  static UPDATE_FR_ONLINE = "/update-fr-onl";
  static CHECK_VALID_USER = "/check-valid-user";
  static GET_USER_ID_FROM_EMAIL = "/get-user-id-from-email";
  static GET_USERS_PENDING_POST = "/get-users-pending-post";
}

export class POST_PATH {
  static GET_ALL = "/all";
  static USER = "/user-posts";
  static CREATE = "/create";
  static UPDATE = "/update";
  static LIKE = "/like/";
  static TICK_SURVEY = "/tick-post-survey";
  static CRAWL_POST = "/crawl-post";
  static GET_ONE = "/get-post";
  static UPDATE_POST_STATUS = "/update-post-status";
}

export class COLLECTION_PATH {
  static ADD = "/add";
  static REMOVE = "/remove";
}

export class NOTIFICATION_PATH {
  static GET = "/get";
  static CREATE = "/create";
  static READ = "/read";
  static GET_NEW = "/get-new";
}

export class MESSAGE_PATH {
  static GET_CONVERSATIONS = "/get-conversations";
  static GET_CONVERSATION_BY_USERS_ID = "/get-conversation-by-users-id";
  static GET_CONVERSATION_BY_ID = "/conversation/:conversationId";
  static GET_CONVERSATION_MEDIA = "/conversation/media";
  static GET_CONVERSATION_FILES = "/conversation/files";
  static GET_CONVERSATION_LINKS = "/conversation/links";
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
  static FAKE_CONVERSATIONS = "/fake-conversations";
  static FAKE_CONVERSATIONS_MSGS = "/fake-conversations-msgs";
  static SEEN_MSGS = "/seen-msgs";
  static SEND_NEXT = "/send-next";
}

export class UTIL_PATH {
  static UPLOAD = "/upload";
  static SEND_FORGOT_PW_MAIL = "/send-forgot-pw-mail";
  static CREATE_REPORT = "/create-rp";
}

export class ANALYTICS_PATH {
  static CREATE = "/create";
  static GET = "/get";
  static GET_SNAPSHOT_REPORT = "/get-user-active-in-date-range";
}

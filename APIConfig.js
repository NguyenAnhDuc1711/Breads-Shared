export class Route {
  static USER = "/users";
  static POST = "/posts";
  static COLLECTION = "/collections";
  static NOTIFICATION = "/notifications";
  static MESSAGE = "/messages";
}

export class USER_PATH {
  //User
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
  static USERS_TO_TAG = "/users-to-tag";
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
}

export class COLLECTION_PATH {
  static ADD = "/add";
  static REMOVE = "/remove";
}

export class NOTIFICATION_PATH {
  static GET = "/get";
  static CREATE = "/create";
  static READ = "/read";
}

export class MESSAGE_PATH {
  static CREATE = "/create";
  static UPDATE = "/update/";
}

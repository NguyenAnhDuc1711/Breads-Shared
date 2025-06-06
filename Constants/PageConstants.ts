class PageConstant {
  static ALL = "";
  static AUTH = "auth";
  static LOGIN = "login";
  static SIGNUP = "signup";
  static RESET_PW = "reset_pw";
  static HOME = "home";
  static SEARCH = "search";
  static PROFILE = "profile";
  static ACTIVITY = "activity";
  static USER = "users";
  static FRIEND = "friend";
  static CHAT = "chat";
  static SETTING = {
    DEFAULT: "setting",
    PRIVACY: "setting/privacy",
    ACCOUNT: "setting/account",
    HELP: "setting/help",
  };
  static USER_REPLIES = "user_replies";
  static FOLLOWING = "following";
  static SAVED = "saved";
  static FOR_YOU = "for_you";
  static LIKED = "liked";

  static FOLLOWS = "follows";
  static REPLIES = "replies";
  static MENTIONS = "mentions";
  static LIKES = "likes";
  static REPOSTS = "reposts";
  static POST_DETAIL = "post_detail";

  static ADMIN = {
    DEFAULT: "admin",
    POSTS: "admin/posts",
    REPORT_SNAPSHOT: "admin/reports-snapshot",
    REALTIME_OVERVIEW: "admin/realtime-overview",
    REALTIME_PAGES: "admin/realtime-pages",
    POSTS_VALIDATION: "admin/posts/validation",
    USERS: "admin/users",
    REPORT: "admin/report",
  };
}

export default PageConstant;

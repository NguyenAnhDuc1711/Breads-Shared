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
  // Task 010 (D-1): param nằm ngay trong constant (thay vì nối chuỗi ":userId" ở nơi gọi) ->
  // GET /users/:userId. Route này PHẢI được đăng ký SAU CÙNG trong nhóm GET (xem user.route.ts)
  // để không "nuốt" các path literal 1-segment khác (/me, /admin, /follow-list, /with-status).
  static PROFILE = "/:userId";
  static USERS_TO_FOLLOW = "/suggestions/to-follow";
  static SIGN_UP = "/";
  static LOGIN = "/sessions";
  static LOGOUT = "/sessions/logout";
  static FOLLOW = "/follow";
  // Task 010 (D-1): param nằm ngay trong constant -> PUT /users/:id. Đăng ký SAU FOLLOW trong
  // user.route.ts để tránh "nuốt" path literal 1-segment /follow.
  static UPDATE = "/:id";
  static CHANGE_PW = "/:id/password";
  static CRAWL_USER = "/crawl";
  static USERS_FOLLOW = "/follow-list";
  static USERS_SEARCH = "/users-search";
  static USERS_TO_TAG = "/suggestions/to-tag";
  static CONNECT = "/connect";
  static UPDATE_FR_ONLINE = "/update-fr-onl";
  static CHECK_VALID_USER = "/validity-checks";
  static GET_USER_ID_FROM_EMAIL = "/id-lookup";
  static GET_USERS_PENDING_POST = "/pending-post-lookup";
  static GET_USERS_WITH_STATUS = "/with-status";
  static VALIDATE_USER_EMAIL = "/email-validations";
  static REFRESH_TOKEN = "/sessions/refresh";
}

// Task 011 (D-1): CRUD -> method + `/:id` (param nằm ngay trong constant, cùng quy ước USER_PATH của
// task 010); action không-CRUD giữ POST + danh từ tài nguyên. Constant NÀO là socket-event name
// (không phải HTTP route) được đánh dấu rõ bên dưới và CỐ Ý giữ nguyên giá trị cũ — đổi chúng sẽ
// đổi tên event mà không có lỗi biên dịch nào, làm Fe emit một đằng Be nghe một nẻo.
export class POST_PATH {
  static GET_ALL = "/";
  static USER = "/user-posts";
  static CREATE = "/";
  // GET/DELETE `/posts/:id` và GET `/posts/:id/activities` vốn đã đúng D-1, được wire literal trong
  // `post.route.ts` từ trước (ACTIVITIES dưới đây giữ nguyên giá trị).
  static UPDATE = "/:id";
  /** SOCKET EVENT NAME (`socket/listeners/post.listener.ts`), KHÔNG phải HTTP route — giữ nguyên. */
  static LIKE = "/like/";
  /** HTTP route cho like/unlike (thay cho `LIKE + ":id"` cũ). Tách khỏi `LIKE` vì `LIKE` là tên
   * socket event dùng chung, đổi giá trị sẽ phá luồng socket. */
  static LIKE_TOGGLE = "/:id/like";
  static TICK_SURVEY = "/:id/survey-ticks";
  static CRAWL_POST = "/crawl";
  /** SOCKET EVENT NAME (`socket/controllers/post.controller.ts` `io.emit`) — giữ nguyên. */
  static GET_ONE = "/get-post";
  static UPDATE_POST_STATUS = "/:id/status";
  static UPDATE_POST_VISIBILITY = "/:id/visibility";
  /** SOCKET EVENT NAME (`services/feed/fanout.ts` `io.emit`) — giữ nguyên. */
  static NEW_FROM_FOLLOWEE = "/new-from-followee";
  static ACTIVITIES = "/:id/activities";
  // Danh sách reply của 1 post, phân trang — thay cho việc BE nhúng toàn bộ `replies` không giới
  // hạn vào response GET /:id (post.model.ts đã bỏ field `replies` mảng nhúng).
  static REPLIES = "/:id/replies";
}

// Task 013 (D-1): `remove` là xoá 1 quan hệ (item khỏi collection) -> DELETE, nhất quán với pattern
// like(POST)/unlike(DELETE) đã chốt ở POST_PATH. `add` là partial update -> PATCH.
export class COLLECTION_PATH {
  static ADD = "/:userId/items";
  static REMOVE = "/:userId/items/:postId";
}

// Task 013 (D-1): GET (list) đổi từ POST sang GET; READ đã đúng PATCH từ trước, giữ nguyên.
export class NOTIFICATION_PATH {
  static GET = "/";
  static CREATE = "/create";
  static READ = "/read";
  /** SOCKET EVENT NAME (`socket/controllers/notification.controller.ts`, `socket/controllers/post.controller.ts`) — giữ nguyên. */
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
  static SEND_FORGOT_PW_MAIL = "/send-forgot-pw-mail";
}

// Task 013 (D-1): CREATE đã đúng CRUD (POST); GET (list) đổi từ POST sang GET.
export class ANALYTICS_PATH {
  static CREATE = "/create";
  static GET = "/";
  /** SOCKET EVENT NAME (`socket/listeners/admin.listener.ts`) — giữ nguyên. */
  static GET_SNAPSHOT_REPORT = "/get-user-active-in-date-range";
}

// Task 014 (D-1): CREATE -> POST / (đúng CRUD create, nhất quán POST_PATH.CREATE/USER_PATH.SIGN_UP).
// GET (list) -> GET / (route đã là GET, chỉ đổi path). RESPONSE/REJECT là partial update theo id ->
// PATCH /:id/response, /:id/reject (id chuyển từ body vào path).
export class REPORT_PATH {
  static CREATE = "/";
  static GET = "/";
  static RESPONSE = "/:id/response";
  static REJECT = "/:id/reject";
}

// Namespace REST riêng cho media (epic presigned-media-upload, AD-1). Cố ý KHÔNG gộp vào
// MESSAGE_PATH/POST_PATH: đây là 1 endpoint DÙNG CHUNG cho cả message lẫn post, và không lẫn với
// path socket event (`message/create`).
export class MEDIA_PATH {
  static SIGN_UPLOAD = "/sign-upload";
}

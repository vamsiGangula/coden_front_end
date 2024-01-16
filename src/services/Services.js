import { createSessionId } from "../utils/utils";

export const headersData = async (cookies) => {
  let sessionId = cookies ? (cookies.sessionid ? cookies.sessionid : "") : "";
  if (!sessionId || sessionId == "") sessionId = await createSessionId(cookies);
  return {
    headers: {
      "Content-Type": "application/json",
      userid:
        cookies && cookies.userDetails && cookies.userDetails.id
          ? cookies.userDetails.id
          : cookies && cookies.userDetailspre && cookies.userDetailspre.id
          ? cookies.userDetailspre.id
          : cookies && cookies.userOrderDetails
          ? cookies.userOrderDetails.user_id
          : sessionId,
      sessionid: cookies
        ? cookies.sessionid
          ? cookies.sessionid
          : sessionId
        : sessionId,
    },
  };
};
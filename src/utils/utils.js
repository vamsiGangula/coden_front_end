import { default as UUID } from "node-uuid";
import JsCookies from "js-cookie";
export const createSessionId = (cookies) => {
    const sessionID = cookies.sessionid;
    if (!sessionID) {
      let UUid = UUID.v4();
      let CurrentTimeStamp = Math.round(new Date().getTime() / 1000);
      let SessionID = UUid + CurrentTimeStamp;
      JsCookies.set("sessionid", SessionID);
      return SessionID;
    }
  };
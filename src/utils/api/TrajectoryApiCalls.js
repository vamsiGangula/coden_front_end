import HttpCalls from "../../services/ApiCall";
import { headersData } from "../../services/Services";
export const _Signup = async (payload,cookies)=>{
    let { _do_call } = HttpCalls;
    let headers = await headersData(cookies);
    return _do_call("POST", "addtrajectorypoints", headers, payload);
}

export const _GetTrajectoryData = async (cookies)=>{
    let { _do_call } = HttpCalls;
    let headers = await headersData(cookies);
    return _do_call("GET", "gettrajectorypoints", headers);
}
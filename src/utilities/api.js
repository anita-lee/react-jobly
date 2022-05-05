import axios from "axios";
import { useReducer } from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = this.token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};


    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get details on a job by jobId. */

  static async getJob(jobId) {
    let res = await this.request(`jobs/${jobId}`);
    return res.job;
  }

  /** Get a token with username/password.  */

  static async login(user) {
    const data = user;
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  /** Register a user and get back a token. */

  static async register(user) {
    const data = user;
    let res = await this.request(`auth/register`, data, "post");

    return res.token;
  }

  /** Pass in a username and token and get back a user. */

  static async getUser(username, token) {
    this.token = token;
    let res = await this.request(`users/${username}`);
    return res.user;
  }

}

export default JoblyApi;

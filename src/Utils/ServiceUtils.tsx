import axios from "axios";

// URL for Development

const URL = "http://localhost:5000/users";
const URLRegister = "http://localhost:5000/users/register";
const URLLogin = "http://localhost:5000/users/login";

type httpVerb =
  | "head"
  | "options"
  | "put"
  | "post"
  | "patch"
  | "delete"
  | "get";

const doRequest = async (httpVerb: httpVerb, url: any, payload: any) => {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json;charset=utf-8",
    Authorization: token,
    "Access-Control-Allow-Origin": "*",
  };

  try {
    const response = await axios[httpVerb](url, payload, { headers });
    return response;
  } catch (error) {
    console.log(error, "DB might be out of sync");
  }
};

export { doRequest, URL, URLRegister, URLLogin };

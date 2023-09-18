import axios from "axios";

export const sendHttpRequest = async (
  apiURL: string,
  httpMethod: string = "GET",
    body: object = {}
) => {
  try {
    const data = await axios({
      url: apiURL,
      method: httpMethod,
      data: body,
      // headers:{
      //     Authorization:`Bearer ${process.env.REACT_APP_API_KEY}`
      // }
    });

    return data.data;
  } catch (ex) {
    console.log("EX-", ex);
  }
};

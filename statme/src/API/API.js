import awsmobile from "../aws-exports";
import { Storage } from "aws-amplify";
import axios from "axios";

export const uploadToS3 = async (key, file) => {
  return await Storage.put(`test/${key}`, file, {
    contentType: "image/png",
  })
    .then((response) => {
      return `public/${response.key}`;
    })
    .catch((err) => {
      return "error " + err;
    });
};

export const statScreenshot = async (key, type) => {
  return await axios
    .post(
      "https://l6po1g6d09.execute-api.us-east-1.amazonaws.com/dev",
      {
        data: {
          key: key,
          type: type,
        },
      },
      {
        headers: {
          "x-api-key": "aI3XjjzoPw4CM74f5in2gibeIxYjnI38Lss1hCf0",
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("err", err);
    });
};

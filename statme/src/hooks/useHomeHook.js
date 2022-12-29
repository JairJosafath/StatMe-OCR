import { useState, useEffect } from "react";
import { statScreenshot, uploadToS3 } from "../API/API";

export const useHomeHook = () => {
  const [file, setFile] = useState({});
  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);
  const [type, setType] = useState("");

  const getStats = async () => {
    setIsLoading(true);
    if (!file[0]) {
      setIsLoading(false);
      return {
        data,
        setData,
        isLoading,
        setIsLoading,
        isErr,
        setIsErr,
        file,
        setFile,
        type,
        setType,
      };
    }

    const date = `${new Date().getFullYear()}/${
      new Date().getMonth() + 1
    }/${new Date().getDate()}/${new Date().getTime()}`;

    const imageKey = await uploadToS3(
      `${date}/${file[0].name}`,
      file[0].blobFile
    )
      .then((data) => {
        console.log("fetching");
        return data;
      })
      .catch((err) => {
        console.log(err, "the err");
        setIsErr(true);
      });

    const imageData = await statScreenshot(imageKey, type)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        setIsErr(true);
        setIsLoading(false);
      });

    setIsLoading(false);
    setData(imageData);
  };

  useEffect(() => {
    getStats();
  }, [file]);

  return {
    data,
    setData,
    isLoading,
    setIsLoading,
    isErr,
    setIsErr,
    file,
    setFile,
    type,
    setType,
  };
};

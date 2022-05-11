import ReportSection from "../../components/ReportSection";
import UploadSection from "../../components/UploadSection";
import { uploadToS3, statScreenshot } from "../../API/API";
import { useState, useEffect } from "react";

import { useHomeHook } from "../../hooks/useHomeHook";
const Home = ({ user }) => {
  const {
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
  } = useHomeHook(user);
  const upload = (value, type) => {
    //console.log("upload", value[0]);
    setFile(value);
    setType(type);
  };

  return (
    <>
      <UploadSection upload={upload} isLoading={isLoading} />

      <ReportSection
        data={data}
        type={type}
        isLoading={isLoading}
        isError={isErr}
      />
    </>
  );
};

export default Home;

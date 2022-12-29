import ReportSection from "../../components/ReportSection";
import UploadSection from "../../components/UploadSection";

import { useHomeHook } from "../../hooks/useHomeHook";
const Home = ({ user }) => {
  const { data, isLoading, isErr, setFile, type, setType } = useHomeHook(user);
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

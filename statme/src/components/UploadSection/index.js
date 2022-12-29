import Uploader from "rsuite/Uploader";
import { BsCameraFill } from "react-icons/bs";
import InputPicker from "rsuite/InputPicker";
import Button from "rsuite/Button";
import { useEffect, useRef, useState } from "react";

const Li = () => (
  <li
    onClick={() =>
      window.open(
        "https://levvvel.com/169-resolutions/#:~:text=2160p%3A%C2%A03840%C3%972160,240p%3A%C2%A0426%C3%97240"
      )
    }
  >
    only{" "}
    <Button appearance="link" style={{ display: "inline", color: "#80c4ff" }}>
      16:9
    </Button>{" "}
    ratio is supported until further notice
  </li>
);

const UploadSection = ({ upload, isLoading }) => {
  const [value, setValue] = useState([]);
  const [type_value, setType_value] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const ref = useRef();

  useEffect(() => {
    if (type_value && value.length !== 0) setIsDisabled(false);
    else {
      setIsDisabled(true);
    }
  }, [type_value, isDisabled, value]);

  return (
    <div
      style={{
        display: "flex",
        marginBottom: 80,

        background: "#1a1d24",
        height: 400,
      }}
    >
      <Uploader
        multiple={false}
        autoUpload={false}
        fileListVisible={true}
        fileList={value}
        value={value}
        ref={ref}
        onChange={setValue}
        action=""
      >
        <Button style={styles}>
          <BsCameraFill style={{ fontSize: 80 }} />
        </Button>
      </Uploader>

      <div style={{ display: "flex", background: "#1a1d24" }}>
        <InputPicker
          data={data}
          style={{ width: 224, height: 38, margin: 20 }}
          value={type_value}
          onChange={setType_value}
        />
        <div display={{ display: "block", background: "#1a1d24" }}>
          <Button
            size="sm"
            style={{ width: 224, height: 38, margin: 20 }}
            disabled={isDisabled}
            appearance="primary"
            onClick={() => {
              if (value.length === 0) {
                return;
              }
              upload(value, type_value);
              ref.current.value = "";
              setValue([]);
              setType_value(null);
            }}
          >
            StatMe
          </Button>

          <h3>Instructions</h3>
          <ul>
            <li>choose which stat you are uploading and StatMe!</li>
            <li>only one file at a time</li>
            <Li />
            <li>only one image in the list will be statted</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  width: 250,
  height: 250,
  margin: "10px 10px 10px 10px",
  borderRadius: "60%",
  background: "#006199",
};

const data = [
  {
    value: "summary",
    label: <p>Summary</p>,
  },
  {
    value: "possession",
    label: <p>Possession</p>,
  },
  {
    value: "passing",
    label: <p>Passing</p>,
  },
  {
    value: "shooting",
    label: <p>Shooting</p>,
  },
  {
    value: "defending",
    label: <p>Defending</p>,
  },
  {
    value: "goalkeeping",
    label: <p>Goalkeeping</p>,
  },
];

export default UploadSection;

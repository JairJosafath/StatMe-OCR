/* Amplify Params - DO NOT EDIT
	AUTH_STATME94705F29_USERPOOLID
	ENV
	REGION
	STORAGE_S384335AC6_BUCKETNAME
Amplify Params - DO NOT EDIT */
import S3 from "aws-sdk/clients/s3";

const s3 = new S3();

exports.handler = async (event) => {
  // TODO implement
  const key = event.data.key;
  const type = event.data.type;

  var params = {
    Bucket: "STORAGE_S384335AC6",
    Key: key,
  };
  const IMAGE = s3
    .getObject(params)
    .promise()
    .catch((err) => console.log("th error:", err));
  console.log(IMAGE);

  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify("Hello from Lambda!", IMAGE),
  };
  return response;
};

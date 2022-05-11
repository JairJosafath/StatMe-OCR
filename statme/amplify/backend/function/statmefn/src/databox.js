//import sharp
const sharp = require("sharp");
//import modules for rectangles
const getRexAdvanced = require("./rectangles");

const getDataBoxesAdvanced = async (filePath, type) => {
  //retrieve the uintarray in data and info such as dimentions in info
  const { width, height } = await sharp(filePath).metadata();
  //get array of rex based on args
  const arr = getRexAdvanced(width, height, type);
  let boxes = arr.map(async ({ top, left, w, h }) => {
    return await sharp(filePath)
      .extract({ top, left, width: w, height: h })
      .threshold(150)
      .negate({ alpha: false })
      .blur()
      .toBuffer();
  });
  return await Promise.all(boxes);
};

module.exports = getDataBoxesAdvanced;

//for 16:9 based on 1600x900
const TOPPERC = 0.15;
const LEFTPERC = 0.035625;
const WIDTHPERC = 0.92875;
const HEIGHTPERC = 0.731;

//1486x657 left:56 top:135
//summary
const W = 1486;
const H = 657;

const TOP_SUM_PLAYER_REX = 106 / H;
const LEFT_SUM_PLAYER_REX = 1368 / W;
const LEFT_TM_PLAYER_REX = 1425 / W;
const H_REX = 32 / H;
const W_REX = 42 / W;
const DELTA = 32 / H;

//get area of statbox, based on width and height original image
const convert = (width, height) => {
  const databox = {
    left: Math.floor(width * LEFTPERC),
    top: Math.floor(height * TOPPERC),
    cwidth: Math.floor(width * WIDTHPERC),
    cheight: Math.floor(height * HEIGHTPERC),
  };
  return databox;
};
//get mini databoxes based on the type of ss
const getRexAdvanced = (width, height, type) => {
  const { left, top, cheight, cwidth } = convert(width, height);

  let rectangles = [];

  const x_offset = left;
  const y_offset = top;

  for (let i = 0; i < 17; i++) {
    //only summary has 2 columns, skip the first column for other types
    if (type === "summary") {
      rectangles.push({
        top: Math.floor(y_offset + (TOP_SUM_PLAYER_REX + i * DELTA) * cheight),
        left: Math.floor(x_offset + LEFT_SUM_PLAYER_REX * cwidth),
        w: Math.floor(W_REX * cwidth),
        h: Math.floor(H_REX * cheight),
      });
    }

    //only summary has the first row or row at i= 0, skip the first row for other types
    if (type !== "summary" && i === 0) continue;
    //possession skips row 11 and 12
    if (type === "possession" && (i === 11 || i === 12)) continue;
    //shooting and goalkeeping skips row 8 and 9
    if ((type === "shooting" || type === "goalkeeping") && (i === 8 || i === 9))
      continue;
    //defending skips row 12 and 13
    if (type === "defending" && (i === 12 || i === 13)) continue;
    //passing skips row 8,9 and 16
    if (type === "passing" && (i === 8 || i === 9 || i === 16)) continue;

    rectangles.push({
      top: Math.floor(y_offset + (TOP_SUM_PLAYER_REX + i * DELTA) * cheight),
      left: Math.floor(x_offset + LEFT_TM_PLAYER_REX * cwidth),
      w: Math.floor(W_REX * cwidth),
      h: Math.floor(H_REX * cheight),
    });
  }
  return rectangles;
};
module.exports = getRexAdvanced;

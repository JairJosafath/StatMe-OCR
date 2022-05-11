import Button from "rsuite/esm/Button";
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";
import FlexboxGrid from "rsuite/FlexboxGrid";
import Grid from "rsuite/Grid";
import Input from "rsuite/Input";
import List from "rsuite/List";
import { AiFillHeart } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import InputPicker from "rsuite/esm/InputPicker";
import ListItem from "rsuite/esm/List/ListItem";
import About from "../../containers/About";
import { AiOutlineLoading } from "react-icons/ai";

const ReportSummary = ({ data, type, isLoading, isError }) => {
  const downloadRef = useRef(null);
  return (
    <>
      <div style={{ display: "flex" }}>
        <h3 style={{ width: 80, margin: "10px auto" }}>{type}</h3>
      </div>
      {isLoading && (
        <AiOutlineLoading size={90} color={"#1675e0"} className="spinner" />
      )}
      {isError && <h3>ERROR</h3>}
      {data.team && !isLoading && (
        <>
          <FlexboxGrid justify="space-around">
            <FlexboxGridItem>
              <h5>Player</h5>
            </FlexboxGridItem>

            <FlexboxGridItem>
              <h5>Team</h5>
            </FlexboxGridItem>
          </FlexboxGrid>
          <div style={{ padding: 20, display: "flex", background: "" }}>
            {/* player results */}
            <div style={{ flex: 1 }}>
              <FlexboxGrid justify="space-around">
                <FlexboxGridItem colspan={8}>
                  {data.player.slice(0, 9).map((data, index) => (
                    <List hover key={index} style={{ padding: 8 }}>
                      <h5>{data.attr}</h5>
                      <Input
                        size="sm"
                        style={{ width: 50 }}
                        value={data.value}
                      />
                    </List>
                  ))}
                </FlexboxGridItem>
                <FlexboxGridItem colspan={8}>
                  {data.player.slice(9, 17).map((data, index) => (
                    <List hover key={index} style={{ padding: 8 }}>
                      <h5>{data.attr}</h5>
                      <Input
                        size="sm"
                        style={{ width: 50 }}
                        value={data.value}
                      />
                    </List>
                  ))}
                </FlexboxGridItem>
              </FlexboxGrid>
            </div>
            {/* team results */}

            <div style={{ flex: 1 }}>
              <FlexboxGrid justify="space-around">
                <FlexboxGridItem colspan={8}>
                  {data.team.slice(0, 9).map((data, index) => (
                    <List key={index} style={{ padding: 8 }}>
                      <h5>{data.attr}</h5>
                      <Input
                        size="sm"
                        style={{ width: 50 }}
                        value={data.value}
                      />
                    </List>
                  ))}
                </FlexboxGridItem>
                <FlexboxGridItem colspan={8}>
                  {data.team.slice(9, 17).map((data, index) => (
                    <List key={index} style={{ padding: 8 }}>
                      <h5>{data.attr}</h5>
                      <Input
                        size="sm"
                        style={{ width: 50 }}
                        value={data.value}
                      />
                    </List>
                  ))}
                </FlexboxGridItem>
              </FlexboxGrid>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <Button
              as={"a"}
              ref={downloadRef}
              appearance="primary"
              style={{ margin: "15px auto", width: 124 }}
              onClick={() => {
                const downloadData = prepareCSVSummary(data);

                const blob = new Blob([downloadData], { type: "text/plain" });

                const href = URL.createObjectURL(blob);
                downloadRef.current.download = `${type}.csv`;
                downloadRef.current.href = href;
              }}
            >
              Download csv
            </Button>
          </div>
        </>
      )}
    </>
  );
};

const Report = ({ data, type, isLoading, isError }) => {
  let length;
  if (data) length = data.player.length;
  const downloadRef = useRef(null);
  return (
    <>
      <div style={{ display: "flex" }}>
        <h3 style={{ width: 80, margin: "10px auto" }}>{type}</h3>
      </div>
      {isLoading && (
        <AiOutlineLoading size={90} color={"#1675e0"} className="spinner" />
      )}
      {isError && <h3>ERROR</h3>}
      {data && !isLoading && (
        <>
          <div style={{ padding: 20 }}>
            {/* player results */}
            <div style={{}}>
              <FlexboxGrid justify="space-around">
                <FlexboxGridItem colspan={6}>
                  <List hover style={{ padding: 8 }}>
                    {data.player
                      .slice(0, Math.ceil(length / 4))
                      .map((data, index) => (
                        <ListItem style={{ height: "100px" }} key={index}>
                          <h5>{data.attr}</h5>
                          <Input
                            size="sm"
                            style={{ width: 50 }}
                            value={data.value}
                          />
                        </ListItem>
                      ))}
                  </List>
                </FlexboxGridItem>
                <FlexboxGridItem colspan={6}>
                  <List hover style={{ padding: 8 }}>
                    {data.player
                      .slice(Math.ceil(length / 4), Math.ceil((2 * length) / 4))
                      .map((data, index) => (
                        <ListItem style={{ height: "100px" }} key={index}>
                          <h5>{data.attr}</h5>
                          <Input
                            size="sm"
                            style={{ width: 50 }}
                            value={data.value}
                          />
                        </ListItem>
                      ))}
                  </List>
                </FlexboxGridItem>
                <FlexboxGridItem colspan={6}>
                  <List hover style={{ padding: 8 }}>
                    {data.player
                      .slice(
                        Math.ceil((2 * length) / 4),
                        Math.ceil((3 * length) / 4)
                      )
                      .map((data, index) => (
                        <ListItem style={{ height: "100px" }} key={index}>
                          <h5>{data.attr}</h5>
                          <Input
                            size="sm"
                            style={{ width: 50 }}
                            value={data.value}
                          />
                        </ListItem>
                      ))}
                  </List>
                </FlexboxGridItem>
                <FlexboxGridItem colspan={6}>
                  <List hover style={{ padding: 8 }}>
                    {data.player
                      .slice(Math.ceil((3 * length) / 4), Math.ceil(length))
                      .map((data, index) => (
                        <ListItem style={{ height: "100px" }} key={index}>
                          <h5>{data.attr}</h5>
                          <Input
                            size="sm"
                            style={{ width: 50 }}
                            value={data.value}
                          />
                        </ListItem>
                      ))}
                  </List>
                </FlexboxGridItem>
              </FlexboxGrid>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <Button
              as={"a"}
              ref={downloadRef}
              appearance="primary"
              style={{ margin: "15px auto", width: 124 }}
              onClick={() => {
                const downloadData = prepareCSV(data);

                const blob = new Blob([downloadData], { type: "text/plain" });

                const href = URL.createObjectURL(blob);
                downloadRef.current.download = `${type}.csv`;
                downloadRef.current.href = href;
              }}
            >
              Download csv
            </Button>
          </div>
        </>
      )}
      {/* 
      {!data && <p>report comes here</p>} */}
    </>
  );
};

const ReportSection = ({ data, type, isLoading, isError }) => {
  let theData = false;
  if (data) theData = data.body.data;

  switch (type) {
    case "summary":
      return (
        <ReportSummary
          type={type}
          data={theData}
          isLoading={isLoading}
          isError={isError}
        />
      );

    case "possession":
      return (
        <Report
          type={type}
          data={theData}
          isLoading={isLoading}
          isError={isError}
        />
      );
    case "passing":
      return (
        <Report
          type={type}
          data={theData}
          isLoading={isLoading}
          isError={isError}
        />
      );

    case "shooting":
      return (
        <Report
          type={type}
          data={theData}
          isLoading={isLoading}
          isError={isError}
        />
      );
    case "goalkeeping":
      return (
        <Report
          type={type}
          data={theData}
          isLoading={isLoading}
          isError={isError}
        />
      );

    case "defending":
      return (
        <Report
          type={type}
          data={theData}
          isLoading={isLoading}
          isError={isError}
        />
      );

    default:
      return (
        <FlexboxGrid justify="space-around">
          <FlexboxGridItem>
            <h3>From CHEEF with</h3> <AiFillHeart color="red" size={100} />
            <p>
              A webpage dedicated to ease the process of your stats! for more
              info join our <a href="https://discord.gg/GEvg5PFnfX">discord!</a>
              {/* prettier-ignore */}
              <br/>
              <br />
              @CHEEF
            </p>
          </FlexboxGridItem>
        </FlexboxGrid>
      );
  }
};

const prepareCSV = (data) => {
  const itemsArray = data.player;

  const csvString = [
    ["attribute", "value"],
    ...itemsArray.map((item) => [item.attr, item.value]),
  ]
    .map((e) => e.join(","))
    .join("\n");

  return csvString;
};

const prepareCSVSummary = (data) => {
  const itemsArray = data.player;

  const csvString = [
    ["attribute", "player", "team"],
    ...itemsArray.map((item, index) => [
      item.attr,
      item.value,
      data.team[index].value,
    ]),
  ]
    .map((e) => e.join(","))
    .join("\n");

  return csvString;
};
export default ReportSection;

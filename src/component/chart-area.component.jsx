// @ts-nocheck
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./chart-area.module.scss";
import { roundToTwo } from "../tools/tools";

export const ChartAreaComponent = ({
  id,
  data,
  type,
  title,
  height,
  dataName,
  configOptions,
}) => {
  const [options, setOptions] = React.useState({});
  const [series, setSeries] = React.useState([]);

  const labels = [];
  const values = [];

  React.useEffect(() => {
    data.map((item) => {
      labels.push(item.type);
      item.attributes.values.map((e) => values.push(e.value));
    });

    const config = {
      ...configOptions,
      labels: [...labels],
      yaxis: {
        labels: {
          formatter: (val) => {
            return roundToTwo(val);
          },
        },
      },
    };

    const chartData = [
      {
        name: dataName,
        data: [...values],
      },
    ];

    setOptions(config);
    type === "donut" ? setSeries([...values]) : setSeries(chartData);
  }, [data]);

  return (
    <div className={styles.mainChartContainer}>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Card
        style={{ border: "none" }}
        id={id}
        variant="outlined"
        className={styles.chardCardContainer}
      >
        <CardMedia>
          <ReactApexChart
            options={options}
            series={series}
            type={type}
            height={height}
          />
        </CardMedia>
      </Card>
    </div>
  );
};

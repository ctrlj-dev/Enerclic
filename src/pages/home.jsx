import { Box, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import { ChartAreaComponent } from "../component/chart-area.component";
import StickyFooter from "../layout/footer";
import Header from "../layout/header";
import { getRedDataService } from "../services/redDataService";
import styles from "./home.module.scss";

export const Home = () => {
  const [market, setMarket] = React.useState([]);
  const [demand, setDemand] = React.useState([]);
  const [generation, setGeneration] = React.useState([]);

  const queryParams = [
    "start_date=2021-01-01T00:00",
    "end_date=2021-12-31T23:59",
    "time_trunc=year",
  ];

  const getMarketValues = (lang, category, widget, queryParams) => {
    getRedDataService(lang, category, widget, queryParams).then((res) => {
      setMarket(res.included);
    });
  };

  const getDemandValues = (lang, category, widget, queryParams) => {
    getRedDataService(lang, category, widget, queryParams).then((res) => {
      setDemand(res.included);
    });
  };

  const getGenerationValues = (lang, category, widget, queryParams) => {
    getRedDataService(lang, category, widget, queryParams).then((res) => {
      setGeneration(res.included);
    });
  };

  React.useEffect(() => {
    getMarketValues(
      "es",
      "mercados",
      "banda-regulacion-secundaria",
      queryParams
    );
    getDemandValues(
      "es",
      "demanda",
      "potencia-maxima-instantanea",
      queryParams
    );
    getGenerationValues(
      "es",
      "generacion",
      "estructura-generacion",
      queryParams
    );
  }, []);

  return (
    <>
      <Header />
      <Box
        className={styles.mainContainer}
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Container maxWidth="xl" sx={{ mt: 8, mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ChartAreaComponent
                data={market}
                id="marketChart"
                type="area"
                title="Banda de regulación secundaria"
                height={450}
                dataName="Valor"
                configOptions={{
                  dataLabels: {
                    enabled: false,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ChartAreaComponent
                data={demand}
                id="demandChart"
                type="bar"
                title="Potencia máxima instantánea"
                height={450}
                dataName="Valor"
                configOptions={{}}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <ChartAreaComponent
                data={generation}
                id="emissionChart"
                type="donut"
                title="Generación por tecnología"
                height={450}
                dataName=""
                configOptions={{
                  dataLabels: {
                    enabled: false,
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <StickyFooter/>
    </>
  );
};

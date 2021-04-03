import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Chart from "react-google-charts";
import Grid from "@material-ui/core/Grid";
import Dashboard from "./Dashboard";
import { getAllRecord, getCurrencyRecord } from "../../store/Record/";
import "./index.css";

const SelectArray = ["EUR", "GBP", "USD"];

function Record(props) {
  //state
  const [currency, setCurrency] = useState("USD");

  // handle mtd
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  useEffect(() => {
    props.getCurrencyRecord();
  }, []);

  useEffect(() => {
    props.getCurrencyRecord();
    props.getAllRecord(currency);
  }, [currency]);

  //const
  const RecordList = props.RecordState.getAllRecordList.data.data;
  const CurrencyList = props.RecordState.getCurrencyList.data.data;

  const date = RecordList.bpi != null ? Object.keys(RecordList.bpi) : [];
  const value = RecordList.bpi != null ? Object.values(RecordList.bpi) : [];
  const rateValue = currency === "USD" ? 0 : currency === "GBP" ? 1 : 2;
  const rateName =
    currency === "USD"
      ? "United States Dollar"
      : currency === "GBP"
      ? "British Pound Sterling"
      : "Euro";
  const CurrencyValue =
    CurrencyList.bpi != null ? Object.values(CurrencyList.bpi) : [];
  const rates = CurrencyValue != null ? CurrencyValue[rateValue]?.rate : 0;

  console.log("data", RecordList);
  console.log("data3", CurrencyList.bpi);
  console.log("data2", rateName);

  return (
    <div className="margin_withBorder">
      <Grid container>
        <Grid item xs={4} sm={4}>
          <div>
            <Dashboard
              handleChange={handleChange}
              currency={currency}
              SelectArray={SelectArray}
              rate={rates}
              ratename={rateName}
            />
          </div>
        </Grid>
        <Grid item xs={8} sm={8}>
          <Chart
            width={"100%"}
            height={"450px"}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Month", "Rate"],
              [date[0], value[0]],
              [date[1], value[1]],
              [date[2], value[2]],
              [date[3], value[3]],
              [date[4], value[4]],
              [date[5], value[5]],
              [date[6], value[6]],
              [date[7], value[7]],
              [date[8], value[8]],
              [date[9], value[9]],
              [date[10], value[10]],
              [date[11], value[11]],
              [date[12], value[12]],
              [date[13], value[13]],
              [date[14], value[14]],
              [date[15], value[15]],
              [date[16], value[16]],
              [date[17], value[17]],
              [date[18], value[18]],
              [date[19], value[19]],
              [date[20], value[20]],
              [date[21], value[21]],
              [date[22], value[22]],
              [date[23], value[23]],
              [date[24], value[24]],
              [date[25], value[25]],
              [date[26], value[26]],
              [date[27], value[27]],
              [date[28], value[28]],
              [date[29], value[29]],
              [date[30], value[30]],
              [date[31], value[31]],
              [date[32], value[32]],
              [date[33], value[33]],
              [date[34], value[34]],
              [date[35], value[35]],
              [date[36], value[36]],
              [date[37], value[37]],
              [date[38], value[38]],
              [date[39], value[39]],
              [date[40], value[40]],
              [date[41], value[41]],
              [date[42], value[42]],
              [date[43], value[43]],
              [date[44], value[44]],
              [date[45], value[45]],
              [date[46], value[46]],
              [date[47], value[47]],
              [date[48], value[48]],
              [date[49], value[49]],
              [date[50], value[50]],
              [date[51], value[51]],
              [date[52], value[52]],
              [date[53], value[53]],
              [date[54], value[54]],
              [date[55], value[55]],
              [date[56], value[56]],
              [date[57], value[57]],
              [date[58], value[58]],
              [date[59], value[59]],
            ]}
            options={{
              hAxis: {
                title: "Month",
              },
              vAxis: {
                title: "Currency Rate",
              },
            }}
            rootProps={{ "data-testid": "1" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({
  RecordState: state.RecordReducers,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencyRecord: () => dispatch(getCurrencyRecord()),
  getAllRecord: (currency) => dispatch(getAllRecord(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Record);

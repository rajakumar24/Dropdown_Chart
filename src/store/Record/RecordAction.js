import {
  GET_ALL_RECORD_LIST_IN_PROGRESS,
  GET_ALL_RECORD_LIST_ON_SUCCESS,
  GET_ALL_RECORD_LIST_ON_FAILED,
  GET_CURRENCY_LIST_IN_PROGRESS,
  GET_CURRENCY_LIST_ON_SUCCESS,
  GET_CURRENCY_LIST_ON_FAILED,
} from "./RecordType";
import Axios from "axios";

const GetRecordListOnProgress = () => ({
  type: GET_ALL_RECORD_LIST_IN_PROGRESS,
});
const GetRecordListOnSuccess = (data) => ({
  type: GET_ALL_RECORD_LIST_ON_SUCCESS,
  payload: data,
});
const GetRecordListOnFailed = (message) => ({
  type: GET_ALL_RECORD_LIST_ON_FAILED,
  payload: message,
});

const GetCurrencyListOnProgress = () => ({
  type: GET_CURRENCY_LIST_IN_PROGRESS,
});
const GetCurrencyListOnSuccess = (data) => ({
  type: GET_CURRENCY_LIST_ON_SUCCESS,
  payload: data,
});
const GetCurrencyListOnFailed = (message) => ({
  type: GET_CURRENCY_LIST_ON_FAILED,
  payload: message,
});

// get api record
const getAllRecord = (currency) => {
  return (dispatch) => {
    try {
      dispatch(GetRecordListOnProgress());
      let url = `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}&start=2021-01-01&end=2021-03-01`;
      Axios.get(url)
        .then((res) => {
          if (res.status === 200) {
            // all success full code
            dispatch(
              GetRecordListOnSuccess({
                data: res.data,
              })
            );
          } else {
            console.log(`data`, res);
          }
        })
        .catch((err) => {
          if (err.response) {
            dispatch(GetRecordListOnFailed(err.response.data.errorList));
          } else {
            console.log("error in get Record", err.response);
          }
        });
    } catch (error) {
      console.log("error in Record action", error);
    }
  };
};

// get Currency
const getCurrencyRecord = () => {
  return (dispatch) => {
    try {
      dispatch(GetCurrencyListOnProgress());
      let URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

      Axios.get(URL)
        .then((res) => {
          if (res.status === 200) {
            // all success full code
            dispatch(
              GetCurrencyListOnSuccess({
                data: res.data,
              })
            );
          } else {
            console.log(`data`, res);
          }
        })
        .catch((err) => {
          if (err.response) {
            dispatch(GetCurrencyListOnFailed(err.response.data.errorList));
          } else {
            console.log("error in get Record", err.response);
          }
        });
    } catch (error) {
      console.log("error in Record action", error);
    }
  };
};

export { getAllRecord, getCurrencyRecord };

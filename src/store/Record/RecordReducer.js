import {
  GET_ALL_RECORD_LIST_IN_PROGRESS,
  GET_ALL_RECORD_LIST_ON_SUCCESS,
  GET_ALL_RECORD_LIST_ON_FAILED,
  GET_CURRENCY_LIST_IN_PROGRESS,
  GET_CURRENCY_LIST_ON_SUCCESS,
  GET_CURRENCY_LIST_ON_FAILED,
} from "./RecordType";

const InitialState = {
  getAllRecordList: {
    inProgress: false,
    onSuccess: false,
    onFailed: false,
    message: "",
    data: { data: [] },
  },
  getCurrencyList: {
    inProgress: false,
    onSuccess: false,
    onFailed: false,
    message: "",
    data: { data: [] },
  },
};

const RecordReducers = (state = InitialState, action) => {
  switch (action.type) {
    case GET_ALL_RECORD_LIST_IN_PROGRESS:
      return {
        ...state,
        getAllRecordList: {
          ...state.getAllRecordList,
          inProgress: true,
          onSuccess: false,
          onFailed: false,
        },
      };
    case GET_ALL_RECORD_LIST_ON_SUCCESS:
      return {
        ...state,
        getAllRecordList: {
          ...state.getAllRecordList,
          inProgress: false,
          onSuccess: true,
          onFailed: false,
          data: action.payload,
        },
      };
    case GET_ALL_RECORD_LIST_ON_FAILED:
      return {
        ...state,
        getAllRecordList: {
          ...state.getAllRecordList,
          inProgress: false,
          onSuccess: false,
          onFailed: true,
          message: action.payload,
        },
      };

    case GET_CURRENCY_LIST_IN_PROGRESS:
      return {
        ...state,
        getCurrencyList: {
          ...state.getCurrencyList,
          inProgress: true,
          onSuccess: false,
          onFailed: false,
        },
      };
    case GET_CURRENCY_LIST_ON_SUCCESS:
      return {
        ...state,
        getCurrencyList: {
          ...state.getCurrencyList,
          inProgress: false,
          onSuccess: true,
          onFailed: false,
          data: action.payload,
        },
      };
    case GET_CURRENCY_LIST_ON_FAILED:
      return {
        ...state,
        getCurrencyList: {
          ...state.getCurrencyList,
          inProgress: false,
          onSuccess: false,
          onFailed: true,
          message: action.payload,
        },
      };

    default:
      return state;
  }
};

export default RecordReducers;

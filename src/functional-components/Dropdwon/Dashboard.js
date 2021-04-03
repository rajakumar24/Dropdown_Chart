import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllRecord } from "../../store/Record";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Dashboard(props) {
  const classes = useStyles();

  return (
    <div className="" style={{ paddingLeft: "50", paddingTop: "50px" }}>
      <p className="light__title">1 BitCoin Equals</p>
      <div style={{ height: "20px", padding: "10px" }}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Select Currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.currency}
            onChange={props.handleChange}
          >
            {props.SelectArray?.map((list) => {
              console.log("list", list);
              return <MenuItem value={list}>{list}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
      <p
        className="light__titleCurrency"
        style={{ paddingLeft: "40", paddingTop: "50px" }}
      >
        <span>{props.rate}</span> <br />
        <span>{props.ratename}</span>
      </p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  RecordState: state.RecordReducers,
});

const mapDispatchToProps = (dispatch) => ({
  getAllRecord: () => dispatch(getAllRecord()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

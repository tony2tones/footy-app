import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class HomeTeamInput extends React.Component {
  state = {
    team: "",
    name: "hai",
    labelWidth: 0
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  render() {
    const { classes, changed, teams } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="team-simple">Select Team</InputLabel>
          <Select
            value="toasty"
            name={this.props.HomeTeam}
            onChange={changed}
            inputProps={{
              name: "team",
              id: "team-simple"
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {teams.map(({ value, name }) => (
              <MenuItem value={value}>{name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-team-simple"
          />
        </FormControl>
      </form>
    );
  }
}

HomeTeamInput.propTypes = {
  classes: PropTypes.object.isRequired,
  teams: PropTypes.arrayOf(
    PropTypes.shape({ value: PropTypes.number, name: PropTypes.string })
  )
};

HomeTeamInput.defaultProps = {
  teams: []
};

export default withStyles(styles)(HomeTeamInput);

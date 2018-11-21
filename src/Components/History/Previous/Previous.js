import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

const Results = props => {
  var results = props.teamNameList.firstTeam_VS_secondTeam || [];

  const { classes } = props;
  console.log(props.teamNameList);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Date</CustomTableCell>
            <CustomTableCell>Home</CustomTableCell>
            <CustomTableCell>Away</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((row,index) => {
            return (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell component="th" scope="row">
                  <CustomTableCell numeric>{row.match_date}</CustomTableCell>
                </CustomTableCell>
                <CustomTableCell>
                  <CustomTableCell numeric>
                    {row.match_hometeam_name}
                  </CustomTableCell>
                  <CustomTableCell> {row.match_hometeam_score}</CustomTableCell>
                </CustomTableCell>
                <CustomTableCell>
                  <CustomTableCell numeric>
                    {row.match_hometeam_score}
                  </CustomTableCell>
                  <CustomTableCell numeric>
                    {row.match_awayteam_name}
                  </CustomTableCell>
                </CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

Results.propTypes = {
  classes: PropTypes.object.isRequired
};

Results.defaultProps = {
  teamNameList: []
};

export default withStyles(styles)(Results);

// import React from "react";

// import "./Previous.css";

// const Previous = props => {
//   var results = props.teamNameList.firstTeam_VS_secondTeam || [];
//   console.table(results);

//   const matchDetailsList = results.map((matchDetails, index) => {
//     return (
//       <tr key={index} className="row-style">
//         <td>{matchDetails.match_date}</td>
//         <td>{matchDetails.match_hometeam_name}</td>
//         <td>{matchDetails.match_hometeam_score}</td>
//         <td>{matchDetails.match_awayteam_name}</td>
//         <td>{matchDetails.match_awayteam_score}</td>
//       </tr>
//     );
//   });

//   return (
//     <div className="boarder">
//       <table>
//         <th>Home</th><th>Away</th>
//         <tbody>{matchDetailsList}</tbody>
//       </table>
//     </div>
//   );
// };

// export default Previous;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

const Previous = props => {
    var results = props.teamNameList.firstTeam_VS_secondTeam || [];
    console.table(results);

function Results(props) {
  const { classes, teamNameList } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Dessert (100g serving)</CustomTableCell>
            <CustomTableCell numeric>Calories</CustomTableCell>
            <CustomTableCell numeric>Fat (g)</CustomTableCell>
            <CustomTableCell numeric>Carbs (g)</CustomTableCell>
            <CustomTableCell numeric>Protein (g)</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
                <CustomTableCell numeric>{row.calories}</CustomTableCell>
                <CustomTableCell numeric>{row.fat}</CustomTableCell>
                <CustomTableCell numeric>{row.carbs}</CustomTableCell>
                <CustomTableCell numeric>{row.protein}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

Results.propTypes = {
  classes: PropTypes.object.isRequired,
};

HomeTeamInput.defaultProps = {
  teams: []
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

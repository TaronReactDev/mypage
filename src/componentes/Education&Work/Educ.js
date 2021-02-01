import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, FACULTYname, position, start, end) {
  return { name, FACULTYname, position, start, end };
}

const rows = [
  createData(
    "National University of Architecture and Construction of Armenia",
    " Faculty of Municipal Services, Heat and Gas Supply",
    "Master’s",
    "2015",
    " 2018"
  ),

  createData(
    "National University of Architecture and Construction of Armenia",
    " Faculty of Construction and Operation of  Water Systems",
    "Master’s",
    "2014",
    " 2016"
  ),
  createData(
    "National University of Architecture and Construction of Armenia",
    " Faculty of Construction and Operation of  Water Systems",
    "Bachelor’s",
    "2010",
    " 2014"
  ),
  createData("Lyceum after Anania Shirakatsy", " High School", "-", "-", "-"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <>
      <h1 id="educ">Education</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>NAME OF INSTITUTE</StyledTableCell>
              <StyledTableCell>NAME OF FACULTY</StyledTableCell>
              <StyledTableCell align="right">DEGREE</StyledTableCell>
              <StyledTableCell align="right">START</StyledTableCell>
              <StyledTableCell align="right">END </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name + row.position +row.start}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.FACULTYname}
                </StyledTableCell>
                <StyledTableCell align="right">{row.position}</StyledTableCell>
                <StyledTableCell align="right">{row.start}</StyledTableCell>
                <StyledTableCell align="right">{row.end}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

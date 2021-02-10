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

function createData(name, position, start, end) {
  return { name, position, start, end };
}

const rows = [
  createData(
    "FMD K&L Europe",
    " Regulatory affairs specialist",
    " Sep. 2019",
    "Nov. 2019"
  ),
  createData(
    "Gazprom Armenia” CJSC Engineering Center  ",
    " Engineer",
    "Nov. 2016 ",
    " May 2019"
  ),
  createData(
    "Lyceum after Anania Shirakatsy, Yerevan, Armenia  ",
    " Alumni Coordinator ",
    " Apr. 2016",
    "Aug. 2017"
  ),
  createData(
    "Lyceum after Anania Shirakatsy, Yerevan, Armenia  ",
    "  Sketch teacher ",
    "Sep. 2014",
    "May 2015"
  ),
  createData("Arpa – Sevan OJSC", " Engineer ", "  Jul. 2014", "Nov. 2016"),
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
      <h1 id="work">Work</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>COMPANY NAME</StyledTableCell>
              <StyledTableCell align="right">POSITION</StyledTableCell>
              <StyledTableCell align="right">BEGINING OF WORK</StyledTableCell>
              <StyledTableCell align="right">END OF WORK</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
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

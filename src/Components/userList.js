// import React, { useState, useEffect } from "react";
// import axios from "axios";
// function App() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios("http://localhost:9090/users");
//       console.log(result.data.data);
//       setData(result.data.data);
//     };
//     fetchData();
//   }, []);
//   return (
//     <div>
//       <p>
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy text ever
//         since the 1500s, when an unknown printer took a galley of type and
//         scrambled it to make a type specimen book. It has survived not only five
//         centuries, but also the leap into electronic typesetting, remaining
//         essentially unchanged. It was popularised in the 1960s with the release
//         of Letraset sheets containing Lorem Ipsum passages, and more recently
//         with desktop publishing software like Aldus PageMaker including versions
//         of Lorem Ipsum.
//       </p>
//       <p>
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy text ever
//         since the 1500s, when an unknown printer took a galley of type and
//         scrambled it to make a type specimen book. It has survived not only five
//         centuries, but also the leap into electronic typesetting, remaining
//         essentially unchanged. It was popularised in the 1960s with the release
//         of Letraset sheets containing Lorem Ipsum passages, and more recently
//         with desktop publishing software like Aldus PageMaker including versions
//         of Lorem Ipsum.
//       </p>
//       <ul>
//         {data.map(item => (
//           <li key={item.user_id}>
//             <a href={item.email}>{item.first_name}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App;
//

import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default function CustomizedTables() {
  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  }))(TableCell);

  const StyledTableRow = withStyles(theme => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.background.default
      }
    }
  }))(TableRow);

  function createData(name, nic, email, sex, role) {
    return { name, nic, email, sex, role };
  }

  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto"
    },
    table: {
      minWidth: 700
    }
  }));

  const [data, setData] = useState([]);
  // const [count, setCount] = useState(0);
  const [state, setState] = useState("previous");

  // const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:9090/users");
      console.log(result.data.data);
      setData(result.data.data);
    };
    fetchData();
  }, []);

  const classes = useStyles();

  if (state == "previous") {
    return (
      <Router>
        <div>
          <p>fdf</p>
          <p>fdf</p>

          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">NIC</StyledTableCell>
                  <StyledTableCell align="right">Email</StyledTableCell>
                  <StyledTableCell align="right">Sex</StyledTableCell>
                  <StyledTableCell align="right">Role</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(row => (
                  <StyledTableRow
                    key={row.first_name}
                    onClick={() => setState("Next")}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.first_name} {row.last_name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.nic}</StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">{row.sex}</StyledTableCell>
                    <StyledTableCell align="right">{row.role}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <p>{state}</p>

          <NavLink to={"/usermgt/id"}>
            <button onClick={() => setState("Next")}> Click </button>
          </NavLink>
        </div>
      </Router>
    );
  }
}

// onClick={}

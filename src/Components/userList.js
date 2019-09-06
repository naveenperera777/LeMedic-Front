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
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  NavLink
} from "react-router-dom";
import { Route, Redirect } from "react-router";
import UserProfile from "../Components/userProfile";

export default function CustomizedTables(props) {
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
      // width: "100%",
      marginTop: 100,
      marginLeft: 300,
      marginRight: 30,
      display: "grid",
      overflowX: "auto",
      padding: 20
    },
    table: {
      minWidth: 700
    },
    fab: {
      margin: theme.spacing(1)
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    }
  }));

  const [data, setData] = useState([]);
  const [state, setState] = useState("previous");
  const [logged, setLogged] = useState(true);
  const [rowUser, setrowUser] = useState({});

  // const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:9090/users");
      console.log(result.data.data);
      setData(result.data.data);
    };
    fetchData();
  }, [rowUser, setrowUser]);

  const classes = useStyles();

  if (state == "previous") {
    return (
      <div>
        <Paper className={classes.root}>
          <Link to={"/usermgt/create"}>
            <Fab
              variant="extended"
              color="primary"
              aria-label="delete"
              className={classes.fab}
            >
              <NavigationIcon className={classes.extendedIcon} />
              Add User
            </Fab>
          </Link>
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
                // <Link to={"/usermgt/id"}>
                <Link
                  to={{
                    pathname: "/usermgt/id",
                    state: {
                      user: row
                    }
                  }}
                >
                  <StyledTableRow
                    key={row.first_name}
                    onClick={() => setrowUser(row)}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.first_name} {row.last_name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.nic}</StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">{row.sex}</StyledTableCell>
                    <StyledTableCell align="right">{row.role}</StyledTableCell>
                  </StyledTableRow>
                </Link>
              ))}
              <Route path="/usermgt/id" component={UserProfile} />
            </TableBody>
          </Table>
        </Paper>
      </div>
      // </Router>
    );
  } else {
    return (
      <div>
        <h1>Lorem Ipsum is simply dummy text</h1>
        <h2>{rowUser}</h2>
        {/* <NavLink to={"/usermgt/id"}>
          <button onClick={() => setState("Next")}> Click </button>
        </NavLink>
        <switch>
          <Route path="/usermgt/id" component={UserProfile} />
        </switch> */}
      </div>
    );
  }
}

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     padding: 100
//     // marginLeft: 300
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary
//   }
// }));

// export default function CenteredGrid() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper className={classes.paper}>xs=12</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

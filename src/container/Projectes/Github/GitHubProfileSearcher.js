import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import GitHubIcon from '@material-ui/icons/GitHub';
import PersonalCard from "./Card";
import "./projectStayle.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      alignItems: "center",
    },
  },
}));

export default function GitHubProfileSearcher() {
  const [input, setInput] = useState("");
  const [pages, setPages] = useState();
  const [person, setPerson] = useState([]);
  const [data, setData] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const handleInputChange = (ev) => {
    ev.preventDefault();
    const name = ev.target.asd.value;
    searche(name);
  };

  const searche = async (name) => {

   
    const a = await axios.get(" https://api.github.com/search/users", {
      params: { q: `${name.trim()} type:User`, per_page: 6, page: pageNumber },
    });

    const data = await a;
    setData(data);
    setPerson(data.data.items);
    setInput(name);

  };

  useEffect(() => {
    input.length > 0 && searche(input);
  }, [pageNumber]);

  const profiles =
    person.length &&
    person.map((item, id) => {
      return (
        <PersonalCard key={item.id} person={item} html_url={item.html_url} />
      );
    });

  const classes = useStyles();

  useEffect(() => {
    const page = Math.ceil(data?.data.total_count / 6);
    setPages(page)
  }, [data]);


  return (
    <>
    <div className="navbar"><GitHubIcon/><p>Search any profile in GitHub</p></div>
      <form
        className={classes.root, "gitanimation"}
        noValidate
        autoComplete="off"
        onSubmit={handleInputChange}
      >
        <TextField id="standard-basic" name="asd" label="enter the name for search " />
      </form>

      {input ? (
        person.length ? (
          <>
            <div className="profiles_container">{profiles}</div>
            <Pagination
              count={pages > 100 ? 100 : pages}
              variant="outlined"
              className="pagination"
              onChange={(ev, page) => {
                setPageNumber(page);
              }}
            />
          </>
        ) : (
          <p>no such</p>
        )
      ) : null}
    </>
  );
}

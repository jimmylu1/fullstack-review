import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Search from "./components/Search.jsx";
import RepoList from "./components/RepoList.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
    this.search = this.search.bind(this);
    this.response = this.response.bind(this);
  }

  //on click, send ajax post request to localhost/repos
  search(term) {
    //need to search data from API and save in db
    $.post({
      url: "http://localhost:1128/repos",
      data: { term }
    });
    //console.log(`${term} was searched`);
  }

  componentWillMount() {
    this.response();
    console.log("ComponentWillMount");
  }

  response() {
    axios
      .get("/repos")
      .then(res => console.log("working"))
      .catch(err => console.log("err"));
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos} />
        <Search onSearch={this.search.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

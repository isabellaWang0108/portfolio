import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Loading from "./components/loading"
import Homepage from "./views/homepage"

import Vogether from "./views/projects/vogether"
import Recruitment from "./views/projects/Recruitment"

class App extends Component {
  state = {
    isLoading: true
  }

  constructor() {
    super();
    this.state = { isLoading: true }
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ isLoading: false }) }, 2000)
  }


  render() {

    if (this.state.isLoading === true) {
      return <Loading />
    } else {
      return (
        <HashRouter basename='/'>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Homepage} />
            <Route exact path={process.env.PUBLIC_URL + "/vogether"} component={Vogether} />
            <Route exact path={process.env.PUBLIC_URL + "/smoothHire"} component={Recruitment} />
          </Switch>
        </HashRouter>
      )
    }

  }
}
export default App;
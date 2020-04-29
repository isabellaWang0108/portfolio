import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
    setTimeout(() => { this.setState({ isLoading: false }) }, 2000)
  }



  render() {

    if (this.state.isLoading === true) {
      return <Loading />
    } else {
      return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path={"/"} component={Homepage} />
              <Route exact path={"/vogether"} component={Vogether} />
              <Route exact path={"/smoothHire"} component={Recruitment} />
            </Switch>
          </div>
        </BrowserRouter>
      )
    }

  }
}
export default App;
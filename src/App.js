import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/footer/footer";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import Loading from "./components/loading/loading";
import store from "./store";
import "./common/css/reset.css";
import "./common/js/flexble";
import "./common/css/iconfont/iconfont.css";

//路由懒加载
let Home = Loadable({
  loader: () => import("./components/home"),
  loading: Loading
})
let Classify = Loadable({
  loader: () => import("./components/classify"),
  loading: Loading
})
let Good = Loadable({
  loader: () => import("./components/good"),
  loading: Loading
})
let Order = Loadable({
  loader: () => import("./components/order"),
  loading: Loading
})
let My = Loadable({
  loader: () => import("./components/my"),
  loading: Loading
})
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/classify" component={Classify} />
              <Route path="/good" component={Good} />
              <Route path="/order" component={Order} />
              <Route path="/my" component={My} />
              <Redirect path="/" to="/home" />
            </Switch>

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

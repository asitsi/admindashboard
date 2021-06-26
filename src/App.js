import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminRoute from "./Pages/helper/AdminRouts";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <AdminRoute
            path="/admin/dashboard"
            exact
            component={AdminDashboard}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

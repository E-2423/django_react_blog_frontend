import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Navbar from './components/Navbar';
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Router>
          <Navbar />
          <Switch>
            <Route path="/register" component={Signup}/>
            <Route path="/login" component={Signin}/>
          </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;

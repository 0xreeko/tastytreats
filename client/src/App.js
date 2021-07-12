import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Inquiry from "./components/Inquiry";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* inquiry list */}
          <Route path="/inquiries">
            <Header />
            <Inquiry />
          </Route>

          {/* contact page */}
          <Route path="/">
            <Header />
            <ContactForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

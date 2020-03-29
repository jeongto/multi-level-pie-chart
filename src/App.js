import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Container } from "react-bootstrap"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import routes from "./routes"

function App() {
  return (
    <Router>
      <ToastContainer />
      <Container>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              render={() => <route.component />}
            />
          ))}
        </Switch>
      </Container>
    </Router>
  )
}

export default App

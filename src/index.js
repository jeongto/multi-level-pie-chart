import React from "react"
import ReactDOM from "react-dom"
import { init } from "@rematch/core"
import { Provider } from "react-redux"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import * as models from "./models"
import ErrorBoundary from "./ErrorBoundary"

const store = init({
  models
})

const Root = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
)

ReactDOM.render(<Root />, document.getElementById("root"))

serviceWorker.unregister()

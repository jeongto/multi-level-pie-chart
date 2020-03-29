import React from "react"
import { init } from "@rematch/core"
import { Provider } from "react-redux"
import * as models from "../models"

export default function({ children }) {
  const store = init({
    models
  })
  return <Provider store={store}>{children}</Provider>
}

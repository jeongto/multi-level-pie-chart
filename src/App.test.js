import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

test("renders home", () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId("chart")).toBeInTheDocument()
})

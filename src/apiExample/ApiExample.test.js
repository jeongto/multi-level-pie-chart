import React from "react"
import { render } from "@testing-library/react"
import ApiExample from "./ApiExample"

test("renders image", () => {
  const { getByAltText } = render(<ApiExample />)
  expect(getByAltText(/dog/i)).toBeInTheDocument()
})

test("renders buttons", () => {
  const { getByText } = render(<ApiExample />)
  expect(getByText(/^Replace Image$/i)).toBeInTheDocument()
  expect(getByText(/^Test api error$/i)).toBeInTheDocument()
})

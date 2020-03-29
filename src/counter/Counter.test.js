import React from "react"
import { render } from "@testing-library/react"
import Counter from "./Counter"

test("renders count", () => {
  const { getByText } = render(<Counter />)
  const count = getByText(/count/i)
  expect(count).toBeInTheDocument()
})

test("renders buttons", () => {
  const { getByText } = render(<Counter />)
  expect(getByText(/^Add 1$/i)).toBeInTheDocument()
  expect(getByText(/^Add 1 Async$/i)).toBeInTheDocument()
})

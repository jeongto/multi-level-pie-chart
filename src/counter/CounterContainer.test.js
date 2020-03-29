import React from "react"
import { fireEvent, render, waitForDomChange } from "@testing-library/react"
import CounterContainer from "./CounterContainer"
import Wrapper from "../styleguidist/Wrapper"

function renderWithRedux() {
  return render(
    <Wrapper>
      <CounterContainer />
    </Wrapper>
  )
}

test("render initial count", () => {
  const { getByText } = renderWithRedux()
  const count = getByText(/0/i)
  expect(count).toBeInTheDocument()
})

test("increments count", () => {
  const { getByText } = renderWithRedux()
  fireEvent.click(getByText(/^Add 1$/i))
  expect(getByText(/count: \d+/)).toHaveTextContent("count: 1")
})

test("increments async count", async () => {
  const { container, getByText } = renderWithRedux()
  fireEvent.click(getByText(/^Add 1 Async$/i))
  await waitForDomChange(container)
  expect(getByText(/count: \d+/)).toHaveTextContent("count: 1")
})

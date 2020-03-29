import React from "react"
import { fireEvent, render, waitForDomChange } from "@testing-library/react"
import randomDog from "../api/randomDog"

jest.mock("../api/randomDog")

// eslint-disable-next-line
import ApiExampleContainer from "./ApiExampleContainer"

describe("ApiExampleContainer test", () => {
  beforeEach(() => {
    randomDog.get.mockClear()
  })
  test("renders initial fetch", async () => {
    const url = "https://initial.com/"
    randomDog.get.mockResolvedValueOnce({ url })
    const { container, getByAltText } = render(<ApiExampleContainer />)
    await waitForDomChange(container)
    expect(randomDog.get).toHaveBeenCalledTimes(1)
    expect(getByAltText(/dog/i).src).toBe(url)
  })

  test("test replace image button", async () => {
    const url = "https://replace-image.com/"
    randomDog.get.mockResolvedValue({ url })
    const { container, getByText, getByAltText } = render(
      <ApiExampleContainer />
    )
    fireEvent.click(getByText(/Replace Image/i))
    await waitForDomChange(container)
    expect(randomDog.get).toHaveBeenCalledTimes(2)
    expect(getByAltText(/dog/i).src).toBe(url)
  })
})

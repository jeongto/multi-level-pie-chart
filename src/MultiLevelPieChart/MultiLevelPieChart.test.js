import React from "react"
import { render } from "@testing-library/react"
import MultiLevelPieChart from "./MultiLevelPieChart"

test("render multi level pie chart", () => {
  const { getByText } = render(<MultiLevelPieChart />)
  expect(getByText(/home/i)).toBeInTheDocument()
})

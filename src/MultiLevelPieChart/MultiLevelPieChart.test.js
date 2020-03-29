import React from "react"
import { render } from "@testing-library/react"
import MultiLevelPieChart, {
  getMaxDepth,
  multiLevelDataToChartData
} from "./MultiLevelPieChart"

const testdata = [
  [["test1"], ["test1-1", "test1-2"]],
  [["test2"], ["test2-1", "test2-2", "test2-3", "test2-4"]]
]

test("get max depth", () => {
  expect(getMaxDepth(testdata)).toBe(2)
})

test("multi level data to chart data", () => {
  const expected = {
    datasets: [
      {
        labels: [
          "test1-1",
          "test1-2",
          "test2-1",
          "test2-2",
          "test2-3",
          "test2-4"
        ],
        backgroundColor: [
          "Crimson",
          "Crimson",
          "DarkOrange",
          "DarkOrange",
          "DarkOrange",
          "DarkOrange"
        ],
        data: [0.5, 0.5, 0.25, 0.25, 0.25, 0.25]
      },
      {
        labels: ["test1", "test2"],
        data: [1, 1],
        backgroundColor: ["Crimson", "DarkOrange"]
      }
    ]
  }
  expect(multiLevelDataToChartData(testdata)).toEqual(expected)
})

test("render multi level pie chart", () => {
  const { getByTestId } = render(<MultiLevelPieChart />)
  expect(getByTestId("chart")).toBeInTheDocument()
})

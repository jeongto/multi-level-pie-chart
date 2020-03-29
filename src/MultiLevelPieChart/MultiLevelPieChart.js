import React from "react"
import { Doughnut, Pie } from "react-chartjs-2"
import getColor from "./getColor"

function getMaxDepth(data) {
  return data.reduce((prev, curr) => {
    return Math.max(prev, curr.length)
  }, 0)
}

function multiLevelDataToChartData(data) {
  const maxDepth = getMaxDepth(data)
  const datasets = []
  for (let i = 0; i < maxDepth; i += 1) {
    const labelSets = data.map(v => (v[i] ? v[i] : [undefined]))
    const backgroundColor = labelSets
      .map((labels, index) => labels.map(() => getColor(i)))
      .flat()
    const dataset = {
      labels: labelSets.flat(),
      backgroundColor,
      data: labelSets.map(labels => labels.map(() => 1 / labels.length)).flat()
    }
    datasets.unshift(dataset)
  }
  return { datasets: [...datasets] }
}

const options = {
  plugins: {
    labels: {
      render: args => {
        const { dataset, index } = args
        return dataset.labels[index]
      },
      fontSize: 18,
      fontColor: "#fff"
    }
  }
}

export default function MultiLevelPieChart({ multiLevelData = [] }) {
  const chartData = multiLevelDataToChartData(multiLevelData)
  return (
    <div data-testid="chart">
      <Doughnut width={50} height={50} data={chartData} options={options} />
      <Pie width={50} height={50} data={chartData} options={options} />
    </div>
  )
}

export { getMaxDepth, multiLevelDataToChartData }

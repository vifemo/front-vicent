import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useEffect, useState } from 'react'

interface HighchartsCompProps {
  labels: string[]
  values: number[]
  title: string
  categories: string
}

function HighchartsComp({
  labels,
  values,
  title,
  categories,
}: HighchartsCompProps) {
  const options = {
    chart: { type: 'bar' },
    title: { text: title },
    xAxis: { categories: labels, title: { text: categories } },
    yAxis: { title: { text: null } },
    series: [{ name: title, data: values }],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default HighchartsComp

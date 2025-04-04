import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useEffect, useState } from 'react'

interface HighchartsCompProps<Generic> {
  fetchDataFunction: () => Generic[]
  mapData: (data: Generic[]) => { labels: string[]; values: number[] }
  title: string
  categories: string
  legend: string
}

function HighchartsComp<Generic>({
  fetchDataFunction,
  mapData,
  title,
  categories,
  legend,
}: HighchartsCompProps<Generic>) {
  const [chartData, setChartData] = useState<{
    labels: string[]
    values: number[]
  }>({ labels: [], values: [] })

  useEffect(() => {
    const data = fetchDataFunction()
    const { labels, values } = mapData(data)
    setChartData({ labels, values })
    console.log('sda', { const: { labels, values } })
  }, [fetchDataFunction, mapData])

  const options = {
    chart: { type: 'bar' },
    title: { text: title },
    xAxis: { categories: chartData.labels, title: { text: categories } },
    yAxis: { title: { text: null } },
    series: [{ name: title, data: chartData.values }],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default HighchartsComp

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useEffect, useState } from 'react'

interface HighchartsCompProps<Generic> {
  fetchDataFunction: () => Generic[] // Función que retorna un array genérico
  mapData: (data: Generic[]) => { labels: number[]; values: number[] } // Función de mapeo
  title: string // Permite personalizar el título de la gráfica
}

function HighchartsComp<Generic>({
  fetchDataFunction,
  mapData,
  title,
}: HighchartsCompProps<Generic>) {
  const [chartData, setChartData] = useState<{
    labels: number[]
    values: number[]
  }>({ labels: [], values: [] })

  useEffect(() => {
    const data = fetchDataFunction()
    const { labels, values } = mapData(data) // Se usa la función personalizada
    setChartData({ labels, values })
    console.log('sda', { const: { labels, values } })
  }, [fetchDataFunction, mapData])

  const options = {
    chart: { type: 'bar' },
    title: { text: title },
    xAxis: { categories: chartData.labels, title: { text: 'Categories' } },
    yAxis: { title: { text: 'Values' } },
    series: [{ name: title, data: chartData.values }],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default HighchartsComp

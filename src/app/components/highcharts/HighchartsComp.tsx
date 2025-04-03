import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useEffect, useState } from 'react'
import { getComments } from '../../services/commentsService'
import { Comment } from '../../types/types'

function HighchartsComp() {
  const [comments, setComments] = useState(Comment)

  useEffect(() => {
    const getCommenta = async () => {
      const data = await getComments()
      setComments(data)
    }
    getCommenta()
  }, [])

  const options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Comments',
    },
    xAxis: {
      categories: ['User1', 'User2', 'User3'],
    },
    yAxis: {
      title: {
        text: 'Comments',
      },
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
      },
    ],
  }
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default HighchartsComp

import { useState, useEffect } from 'react';
import { ResponsivePie } from "@nivo/pie";
import "./Charts.css";

// const data = [
//   {
//     "id": "",
//     "ranges": [
//       0.3336816061121536,
//       0.2184509493483253,
//       1.5839206391675538,
//       0,
//       2
//     ],
//     "measures": [
//       0.015011141606366117,
//       0.03454565234304585
//     ],
//     "markers": [
//       1.5637346292993346
//     ]
//   }
// ]

export default function Charts() {

  const [chartData, setChartData] = useState([
  {
    "id": "calculus",
    "label": "calculus",
    "value": 511,
    "color": "hsl(222, 70%, 50%)"
  },
  {
    "id": "algebra",
    "label": "algebra",
    "value": 183,
    "color": "hsl(279, 70%, 50%)"
  },
  {
    "id": "integration",
    "label": "integration",
    "value": 556,
    "color": "hsl(326, 70%, 50%)"
  },
  {
    "id": "differentiation",
    "label": "differentiation",
    "value": 566,
    "color": "hsl(310, 70%, 50%)"
  },
  {
    "id": "tensors",
    "label": "tensors",
    "value": 228,
    "color": "hsl(122, 70%, 50%)"
  }
]);

  useEffect(() => {
    const intervalId = setInterval(() => {

    //setChartData(Math.floor(Math.random() * 200))

    setChartData([
    {
      "id": "calculus",
      "label": "calculus",
      "value": Math.floor(Math.random() * 200),
      "color": "hsl(222, 70%, 50%)"
    },
    {
      "id": "algebra",
      "label": "algebra",
      "value": Math.floor(Math.random() * 200),
      "color": "hsl(279, 70%, 50%)"
    },
    {
      "id": "integration",
      "label": "integration",
      "value": Math.floor(Math.random() * 200),
      "color": "hsl(326, 70%, 50%)"
    },
    {
      "id": "differentiation",
      "label": "differentiation",
      "value": Math.floor(Math.random() * 200),
      "color": "hsl(310, 70%, 50%)"
    },
    {
      "id": "tensors",
      "label": "tensors",
      "value": Math.floor(Math.random() * 200),
      "color": "hsl(122, 70%, 50%)"
    }
  ])

    }, 2500);

    return () => clearInterval(intervalId); //This is important
  })

  return (
    <div className="charts">
      <div className="charts__react">
        <ResponsivePie /* or Pie for fixed dimensions */
          data={chartData}
          margin={{ top: 40, right: 40, bottom: 80, left: 40 }}
          innerRadius={0.5}
          padAngle={0.6}
          cornerRadius={2}
          activeOuterRadiusOffset={8}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
          legends={[
              {
                  anchor: 'bottom',
                  direction: 'row',
                  translateY: 60,
                  itemWidth: 220,
                  itemHeight: 18,
                  symbolShape: 'circle'
              },
          ]}
          theme={{ labels: { text: { fontSize: 30 }}, legends: { text: { fontSize: 30 }} }}
        />
      </div>
    </div>
  )
}

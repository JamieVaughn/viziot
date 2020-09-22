import React from 'react'
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';

const d = [
  {unit: 1, value: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const BarChart = (props) => {
    const data = props.data || d
    return (
      <VictoryChart 
        theme={VictoryTheme.material}
        domainPadding={30} >
          <VictoryBar
          horizontal
          barRatio={0.5}
          style={{
            data: { fill: "navy" }
          }}
          data={data}
          // data accessor for x values
          x="unit"
          // data accessor for y values
          y="value"

          />
      </VictoryChart>
    )
}

export default BarChart
import React from 'react';
import './views.css'
import { ResponsiveBar } from '@nivo/bar'

class Dashboard extends React.Component {
    render() {
       

        let data = [
            {
                "intake": 'grams',

                "carbs": 340,
                "carbs color": "hsl(254, 70%, 50%)",

                "protein": 440,
                "protein color": "hsl(254, 70%, 50%)",

                "fat": 540,
                "fat color": "hsl(254, 70%, 50%)",
              },
        ]

        return (
           <div className="dashboardBackground">
               <div className="card x-large dashboardBackgroundCard">
                   <div className="row">
                       <div className="col l6 s12">
                           <div className="card large dashboardCardLarge">
                               <div className="dashboardBarChartCard">

                                <ResponsiveBar
                                    data={data}
                                    keys={[ 'carbs', 'protein', 'fat' ]}
                                    indexBy="intake"
                                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                                    padding={0.1}
                                    groupMode="grouped"
                                    valueScale={{ type: 'linear' }}
                                    indexScale={{ type: 'band', round: true }}
                                    colors={{ scheme: 'nivo' }}
                                    defs={[
                                        {
                                            id: 'dots',
                                            type: 'patternDots',
                                            background: 'inherit',
                                            color: '#38bcb2',
                                            size: 4,
                                            padding: 1,
                                            stagger: true
                                        },
                                        {
                                            id: 'lines',
                                            type: 'patternLines',
                                            background: 'inherit',
                                            color: '#eed312',
                                            rotation: -45,
                                            lineWidth: 6,
                                            spacing: 10
                                        }
                                    ]}
                                    fill={[
                                        {
                                            match: {
                                                id: 'fries'
                                            },
                                            id: 'dots'
                                        },
                                        {
                                            match: {
                                                id: 'sandwich'
                                            },
                                            id: 'lines'
                                        }
                                    ]}
                                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                                    axisTop={null}
                                    axisRight={null}
                                    axisBottom={{
                                        tickSize: 5,
                                        tickPadding: 5,
                                        tickRotation: 0,
                                        legend: 'daily food intake',
                                        legendPosition: 'middle',
                                        legendOffset: 32
                                    }}
                                    axisLeft={{
                                        tickSize: 5,
                                        tickPadding: 5,
                                        tickRotation: 0,
                                        legend: 'food',
                                        legendPosition: 'middle',
                                        legendOffset: -40
                                    }}
                                    labelSkipWidth={12}
                                    labelSkipHeight={12}
                                    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                                    legends={[
                                        {
                                            dataFrom: 'keys',
                                            anchor: 'bottom-right',
                                            direction: 'column',
                                            justify: false,
                                            translateX: 120,
                                            translateY: 0,
                                            itemsSpacing: 2,
                                            itemWidth: 100,
                                            itemHeight: 20,
                                            itemDirection: 'left-to-right',
                                            itemOpacity: 0.85,
                                            symbolSize: 20,
                                            effects: [
                                                {
                                                    on: 'hover',
                                                    style: {
                                                        itemOpacity: 1
                                                    }
                                                }
                                            ]
                                        }
                                    ]}
                                    animate={true}
                                    motionStiffness={90}
                                    motionDamping={15}
                                />
                               </div>
                           </div>
                       </div>

                       <div className="col l6 s12">
                           <div className="card large dashboardCardLarge">
                               <h5 className="dashboardTableText">AGREED DAILY GOAL </h5>
                                    <table className="centered">
                                        <thead>
                                        <tr>
                                            <th>Intake</th>
                                            <th>Agreed Goal</th>
                                            <th>Remaining</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        <tr>
                                            <td>Calories</td>
                                            <td>800</td>
                                            <td>600</td>
                                        </tr>
                                        <tr>
                                            <td>Carbs</td>
                                            <td>800</td>
                                            <td>600</td>
                                        </tr>
                                        <tr>
                                            <td>Fat</td>
                                            <td>800</td>
                                            <td>600</td>
                                        </tr>
                                        <tr>
                                            <td>Protein</td>
                                            <td>800</td>
                                            <td>600</td>
                                        </tr>
                                        <tr>
                                            <td>Sodium</td>
                                            <td>800</td>
                                            <td>600</td>
                                        </tr>
                                        <tr>
                                            <td>Fibre</td>
                                            <td>800</td>
                                            <td>600</td>
                                        </tr>
                                        </tbody>
                                    </table>           
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}
export default Dashboard;
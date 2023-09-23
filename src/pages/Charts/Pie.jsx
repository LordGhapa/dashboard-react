import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip
} from '@syncfusion/ej2-react-charts'

import { pieChartData } from '../../data/dummy'

import { Header } from '../../components'

function Pie() {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl">
      <Header title={'Pizza'} category={'Gráfico'} />
      <AccumulationChartComponent
        id="pizza-charts"
        height="full"
        width="100%"
        legendSettings={{
          visible: true,
          textStyle: {
            size: '24px'
          }
        }}
        tooltip={{ enable: true }}
      >
        <Inject
          services={[
            AccumulationLegend,
            PieSeries,
            AccumulationDataLabel,
            AccumulationTooltip
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            name="Distribuição"
            dataSource={pieChartData}
            xName="x"
            yName="y"
            innerRadius="40%"
            startAngle={0}
            endAngle={360}
            radius="70%"
            explode
            explodeOffset="10%"
            explodeIndex={2}
            dataLabel={{
              visible: true,
              name: 'text',
              position: 'Inside',
              font: {
                fontWeight: '600',
                color: '#fff'
              }
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default Pie

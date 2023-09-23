import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PyramidSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip
} from '@syncfusion/ej2-react-charts'

import { PyramidData } from '../../data/dummy'

import { Header } from '../../components'

function Pyramid() {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl">
      <Header title={'Piramide'} category={'Gráfico'} />
      <AccumulationChartComponent
        id="pyramid-charts"
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
            PyramidSeries,
            AccumulationDataLabel,
            AccumulationTooltip
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            name="Food"
            dataSource={PyramidData}
            xName="x"
            yName="y"
            type="Pyramid"
            width="45%"
            height="80%"
            neckWidth="15%"
            explode
            emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
            dataLabel={{
              visible: true,
              position: 'Inside',
              name: 'text'
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default Pyramid

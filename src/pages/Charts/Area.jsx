import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries
} from '@syncfusion/ej2-react-charts'

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis
} from '../../data/dummy'

import { Header } from '../../components'

const Area = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl ">
      <Header title={'Porcentagem Taxa de inflação '} category={'Gráfico'} />

      <ChartComponent
        id="area-chart"
        height="420px"
        width="100%"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
      >
        <Inject services={[DateTime, Legend, SplineAreaSeries]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Area

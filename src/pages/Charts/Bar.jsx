import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel
} from '@syncfusion/ej2-react-charts'

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis
} from '../../data/dummy'

import { Header } from '../../components'

const Bar = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl ">
      <Header title={'Barras '} category={'Gráfico'} />
      <ChartComponent
        id="bar-charts"
        height="420px"
        width="100%"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
      >
        <Inject
          services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}
export default Bar

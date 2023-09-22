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
import { useStateContext } from '../../contexts/ContextProvider'

const Bar = () => {
  const { currentMode } = useStateContext()
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header
        title={'Barras '}
        category={'Gráfico'}
        custonCssTitle={'dark:text-white'}
      />
      <ChartComponent
        id="bar-charts"
        height="420px"
        width="100%"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373e' : '#fff'}
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

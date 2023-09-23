import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective
} from '@syncfusion/ej2-react-charts'

import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  rangeColorMapping
} from '../../data/dummy'

import { Header } from '../../components'

function ColorMapping() {
  return (
    <div className=" m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl ">
      <Header
        title={'Mapa de Calor '}
        category={'Gráfico'}
        // custonCssTitle={'dark:text-white'}
      />
      <ChartComponent
        id="bar-charts"
        height="420px"
        width="100%"
        primaryXAxis={ColorMappingPrimaryXAxis}
        primaryYAxis={ColorMappingPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
      >
        <Inject services={[ColumnSeries, Legend, Tooltip, Category]} />

        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={colorMappingData[0]}
            name="USA"
            xName="x"
            yName="y"
            type="Column"
            cornerRadius={{
              topLeft: 10,
              topRight: 10
            }}
          />
        </SeriesCollectionDirective>

        <RangeColorSettingsDirective>
          {rangeColorMapping.map((item, index) => (
            <RangeColorSettingDirective key={index} {...item} />
          ))}
        </RangeColorSettingsDirective>
      </ChartComponent>
    </div>
  )
}

export default ColorMapping

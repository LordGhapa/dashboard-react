import {
  SparklineComponent,
  Inject,
  SparklineTooltip
} from '@syncfusion/ej2-react-charts'

const SparkLine = ({ currentColor, id, type, height, width, data, color }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      valueType="Numeric"
      fill={color}
      type={type}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="y"
      tooltipSettings={{
        visible: true,
        format: '${x} : data ${y}',
        trackLineSettings: {
          visible: true
        }
      }}
      markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine

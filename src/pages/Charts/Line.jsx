import { ChartsHeader, Header, LineChart } from '../../components'

function Line() {
  return (
    <div className="m-4 md:m-10 mt-24 p-2 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category={'Taxa de inflação'} title={'Gráfico'} />

      <div className="w-full ">
        <LineChart />
      </div>
    </div>
  )
}

export default Line

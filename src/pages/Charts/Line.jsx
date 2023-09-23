import { Header, LineChart } from '../../components'

function Line() {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl ">
      <Header title={'Taxa de inflação'} category={'Gráfico'} />

      <div className="w-full ">
        <LineChart />
      </div>
    </div>
  )
}

export default Line

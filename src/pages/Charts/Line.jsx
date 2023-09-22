import { Header, LineChart } from '../../components'

function Line() {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header
        title={'Taxa de inflação'}
        category={'Gráfico'}
        custonCssTitle={'dark:text-white'}
      />

      <div className="w-full ">
        <LineChart />
      </div>
    </div>
  )
}

export default Line

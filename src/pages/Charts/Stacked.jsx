import { Header } from "../../components"
import {  Stacked as StackedComponent } from '../../components'
function Stacked() {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl">
      <Header title={'Piramide'} category={'Gráfico'} />
      <StackedComponent width="full" height="460px" />
    </div>
  )
}

export default Stacked

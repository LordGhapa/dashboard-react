import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Edit,
  Search,
  Inject,
  Sort,
  Toolbar
} from '@syncfusion/ej2-react-grids'

import { employeesData, employeesGrid } from '../data/dummy'
import { Header } from '../components'

function Employees() {
  const editing = { allowDeleting: true, allowEditing: true }
  return (
    <div className="m-2 md:m-10  p-4  mt-20 md:p-10 bg-white rounded-3xl">
      <Header title="Funcionários" category="Página" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
        editSettings={editing}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Edit, Search, Toolbar ,Sort]} />
      </GridComponent>
    </div>
  )
}

export default Employees

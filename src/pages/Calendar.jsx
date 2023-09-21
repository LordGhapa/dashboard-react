import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop
} from '@syncfusion/ej2-react-schedule'


import { scheduleData } from '../data/dummy'
import { Header } from '../components'

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl ">
      <Header title={'Calendário'} category={'App'} />
      <ScheduleComponent
        height={'650px'}
        eventSettings={{
          dataSource: scheduleData,

          enableTooltip: true,
          allowDeleting: true
        }}
        currentView="Week"
        allowInline
      
        selectedDate={new Date(2021, 0, 10)}
      >
        <ViewsDirective >
          <ViewDirective option="Day" displayName="Dia" />
          <ViewDirective option="Week" displayName="Semana" />
          <ViewDirective option="WorkWeek" displayName="Dia Util" />
          <ViewDirective option="Month" displayName="Mês" />
          <ViewDirective option="Agenda" displayName="Agenda" />
        </ViewsDirective>
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar

import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'

function ColorPicker() {
  const change = args => {
    document.getElementById('preview').style.backgroundColor =
      args.currentValue.hex
  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl  overflow-x-hidden">
      <Header title={'Seletor de cores'} category={'App'} />

      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Palheta</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Seletor</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker

import { MdOutlineCancel } from 'react-icons/md'

import { chatData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

import Button from './Button'

const Chat = () => {
  const { currentColor, handleClick } = useStateContext()
  return (
    <div className="absolute top-11 sm:right-52 right-1 w-320 p-2 flex flex-col rounded-md bg-white dark:bg-secondary-dark-bg dark:text-white z-10 ">
      <div className="flex items-center justify-between ">
        <p className="font-semibold text-xl dark:text-gray-200">Notificaçoes</p>
        <button
          type="button"
          onClick={() => handleClick()}
          style={{ color: 'rgb(153,171,180)', borderRadius: '50%' }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <MdOutlineCancel />
        </button>
      </div>

      {chatData.map((item, index) => (
        <div
          key={index}
          className="flex gap-2 border-t-1 items-center pb-2 pt-2 cursor-pointer  hover:bg-light-gray dark:hover:bg-[#42464D]"
        >
          <img
            src={item.image}
            className=" rounded-full h-10 w-10 flex justify-center items-center"
            style={{ color: item.iconColor, backgroundColor: item.iconBg }}
          />

          <div>
            <p className="font-semibold text-sm dark:text-gray-200">
              {item.message}
            </p>
            <p className="text-gray-500 text-xs dark:text-gray-400">
              {item.desc}
            </p>
            <p className='text-gray-500 text-xs dark:text-gray-400'>{item.time}</p>
          </div>
        </div>
      ))}

      <Button
        color="white"
        bgColor={currentColor}
        text="Ver todas as mensagens"
        borderRadius="10px"
        width="full"
      />
    </div>
  )
}

export default Chat

import { MdOutlineCancel } from 'react-icons/md'

import { userProfileData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import avatar from '../data/avatar.jpg'
import Button from './Button'

const UserProfile = () => {
  const { currentColor, handleClick } = useStateContext()
  return (
    <div className="absolute top-11 sm:right-5 right-1 w-320 p-2 flex flex-col rounded-md bg-white dark:bg-secondary-dark-bg dark:text-white z-10 ">
      <div className="flex items-center justify-between ">
       <p className='font-semibold text-xl dark:text-gray-200'>
       Perfil
        </p>
        <button
          type="button"
          onClick={() => handleClick()}
          style={{ color: 'rgb(153,171,180)', borderRadius: '50%' }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <MdOutlineCancel />
        </button>
      </div>

      <div className="flex pt-4 gap-2 mb-5 items-center">
        <img
          src={avatar}
          alt="img do usuario"
          className="rounded-full h-24 w-24"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-xl dark:text-gray-200">
            Felipe Lacerda
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Administrador
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            dashboard@infor.com
          </p>
        </div>
      </div>

      {userProfileData.map((item, index) => (
        <div
          key={index}
          className="flex gap-2 border-t-1 items-center pb-2 pt-2 cursor-pointer  hover:bg-light-gray dark:hover:bg-[#42464D]"
        >
          <button
            className=" rounded-full h-10 w-10 flex justify-center items-center"
            style={{ color: item.iconColor, backgroundColor: item.iconBg }}
          >
            {item.icon}
          </button>
          <div>
            <p className="font-semibold text-xl dark:text-gray-200">
              {' '}
              {item.title}
            </p>
            <p className="text-gray-500 text-sm dark:text-gray-400">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
      <Button
        color="white"
        bgColor={currentColor}
        text="Logout"
        borderRadius="10px"
        width="full"
      />
    </div>
  )
}

export default UserProfile

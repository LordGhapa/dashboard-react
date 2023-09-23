import { useStateContext } from '../contexts/ContextProvider'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChatLeft } from 'react-icons/bs'
import { RiNavigationLine } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import avatar from '../data/avatar.jpg'
import { Chat, Notification, UserProfile } from '.'
import { NavButton } from './NavButton'


const Navbar = () => {
  const {
    setActiveMenu,
    isClicked,
    handleClick,
    currentColor
  } = useStateContext()

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu(s => !s)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title="Chat"
          dotColor="#03c9d7"
          customFunc={() => handleClick('chat')}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notificações"
          dotColor="#ffd000"
          customFunc={() => handleClick('notification')}
          color={currentColor}
          icon={<RiNavigationLine />}
        />
        <TooltipComponent content="Perfil" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              src={avatar}
              alt="foto-pefil"
              className="rounded-full w-8 h-8 "
            />
            <p>
              <span className="text-gray-400 text-14 ">Ola,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Usuário
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14 " />
          </div>
        </TooltipComponent>

        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar

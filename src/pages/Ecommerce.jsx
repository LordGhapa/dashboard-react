import { BsCurrencyDollar } from 'react-icons/bs'
import { GoDotFill } from 'react-icons/go'
import { Pie, Stacked, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'

import { useStateContext } from '../contexts/ContextProvider'
function Ecommerce() {
  const { currentColor } = useStateContext()
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44  rounded-xl w-full lg:w-80 p-8 pt-9 m-3  bg-no-repeat bg-cover bg-center  bg-hero-pattern dark:bg-hero-pattern_dark">
          <div className="flex  justify-between items-center">
            <div>
              <p className="font font-bold text-gray-400 ">Ganhos</p>
              <p className="text-2xl">$9,532.25 </p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={ currentColor }
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center items-center ">
          {earningData.map(item => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, background: item.iconBg }}
                className="text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl "
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold "> {item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1 ">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Receitas */}
      <div className="flex gap-10  flex-wrap justify-center">
        <div
          className="bg-white
         dark:text-gray-200  dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"
        >
          <div className="flex justify-between ">
            <p className="font-semibold text-xl">Receita</p>
            <div className="flex items-center gap-4 ">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl ">
                <span>
                  <GoDotFill />
                </span>
                <span className=' dark:text-gray-200 '>Despesas</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl  ">
                <span>
                  <GoDotFill />
                </span>
                <span >Orçamento</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center ">
            <div className="border-r-1 border-color m-4 pr-10 ">
              <div>
                <p>
                  <span className="text-3xl font-semibold ">$93,532.25 </span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1  dark:text-gray-200 ">Orçamento</p>{' '}
              </div>

              <div className="mt-8 ">
                <p>
                  <span className="text-3xl font-semibold ">$48,532.25 </span>
                </p>
                <p className="text-gray-500 mt-1  dark:text-gray-200 ">Despesas</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor={ currentColor }
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={ currentColor }
                />
              </div>
              <div className="mt-10">
                <Button
                  color={'white'}
                  bgColor={ currentColor }
                  text={'Download'}
                  borderRadius={'10px'}
                />
              </div>
            </div>

            <div className=' pt-5 rounded-xl dark:bg-gray-200  '>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce

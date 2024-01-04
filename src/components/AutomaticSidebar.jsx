import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import LogoSvg from '/logo.svg'
import {
  faGauge,
  faFolderOpen,
  faFileSignature,
  faCreditCard,
  faChartPie,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons'

import { IconLogo } from './Icons'
import ListItemAutomaticSid from './ListItemAutomaticSid'

// https://github.com/Tailus-UI/vite-boilerplate/blob/master/index.html
//https://github.com/Franklin369/sidebarreact/blob/main/src/components/Sidebar.jsx

export function AutomaticSidebar() {
  return (
    <div className=' w-full bg-white dark:bg-gray-900'>
      <aside className='compact-nav fixed group left-0 top-0 z-10 h-screen w-[calc(3.73rem)] border-r border-gray-300/40  bg-white dark:bg-gray-900 dark:border-gray-700 hover:w-56 hover:shadow-2xl overflow-hidden'>
        <div className='h-full flex flex-col justify-between'>
          <div>
            <div className='h-16 flex items-center border-b border-gray-300/40 dark:border-gray-700'>
              <a href='' className='block w-max px-2.5'>
                <IconLogo />
                {/* <img src={LogoSvg} alt='' className='h-10' /> */}
              </a>
            </div>

            <div className='mt-6'>
              <ul className='px-1 -ml-px space-y-4 font-medium tracking-wide'>
                <li className='w-max space-y-4 group-hover:w-full '>
                  <a
                    href=''
                    className='block py-3 w-[52px] rounded-full bg-sky-500 group-hover:w-full hover:bg-sky-600'
                  >
                    <div className='w-max flex items-center px-3 gap-4 '>
                      <FontAwesomeIcon
                        icon={faGauge}
                        className='h-7 w-7 text-white'
                      ></FontAwesomeIcon>
                      <span>Dashboard</span>
                    </div>
                  </a>
                </li>

                <ListItemAutomaticSid icon={faFolderOpen} name={'Categorias'} />

                <ListItemAutomaticSid icon={faChartPie} name={'Reports'} />

                <ListItemAutomaticSid
                  icon={faFileSignature}
                  name={'User Data'}
                />

                <ListItemAutomaticSid icon={faCreditCard} name={'Finance'} />

                <ListItemAutomaticSid icon={faCartPlus} name={'Shopping'} />
              </ul>
            </div>
          </div>

          <div className='py-4 px-2 border-t border-gray-300/40 dark:border-gray-700'>
            <a href=''>
              <div className='w-max flex items-center gap-4'>
                <img
                  className='w-10 h-10 rounded-full'
                  src='https://randomuser.me/api/portraits/thumb/men/75.jpg'
                  alt=''
                />
                <div>
                  <h6 className='text-gray-600 font-medium dark:text-gray-200'>
                    Bernard Ng
                  </h6>
                  <span className='block -mt-0.5 text-sm text-gray-500'>
                    Full stack
                  </span>
                </div>
                {/* https://youtu.be/TNoThYg5dvo?t=357 */}
              </div>
            </a>
          </div>
        </div>
      </aside>

      {/* Content automatic */}
      <main className='w-[calc(100%-3.7rem)] ml-auto'>
        <div className='2xl:container mx-auto space-y-6'>
          <div className='h-16 border-b border-gray-300/40 dark:border-gray-700'></div>

          <div className='px-6 lg:px-12'>
            <div className='h-96 flex justify-center items-center rounded-2xl border border-dashed border-gray-300/40 dark:border-gray-700'>
              <span className='text-gray-500 dark:text-gray-200'>Content</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

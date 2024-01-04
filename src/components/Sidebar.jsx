import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react'
import { useState, createContext, useContext } from 'react'

const SidebarContext = createContext()

// eslint-disable-next-line react/prop-types
export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true)

  const handleChevron = () => {
    setExpanded(!expanded)
  }

  return (
    <aside
      className={`h-screen max-w-[250px]
      ${expanded ? '' : 'max-w-[80px]'}
    `}
    >
      <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
        {/* logo y chervon */}
        <div className='p-4 pb-2 flex justify-between items-center '>
          <img
            src='https://img.logoipsum.com/243.svg'
            alt=''
            // className='w-32'
            className={`overflow-hidden transition-all ${
              expanded ? 'w-32' : 'w-0'
            }`}
          />
          <button
            onClick={handleChevron}
            className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-200'
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        {/* lista menu */}
        <SidebarContext.Provider value={{ expanded }}>
          <ul className='flex-1 px-3 '>{children}</ul>
        </SidebarContext.Provider>

        {/* footer navbar */}
        <div className='border-t flex p-3'>
          <img
            src='https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true'
            alt=''
            className='w-10 h-10 rounded-md'
          />

          <div
            // className={`flex justify-between items-center w-52 ml-3 border-2 border-orange-400`}
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? 'w-52 ml-3' : 'w-0'
            }`}
          >
            <div className='loading-4'>
              <h4 className='font-semibold'>John Doe</h4>
              <span className='text-xs text-gray-600'>jhondoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  )
}

// eslint-disable-next-line react/prop-types
export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext)

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group   
      ${
        active
          ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
          : 'hover:bg-indigo-50 text-gray-600'
      }
      `}
    >
      {icon}
      {/* <span className='w-52 ml-3'>{text}</span> */}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? 'w-52 ml-3' : 'w-0'
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? '' : 'top-2'
          }`}
        />
      )}

      {/* opcional */}
      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6
        bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  )
}
// https://youtu.be/NFrFhBJPTmI?t=374

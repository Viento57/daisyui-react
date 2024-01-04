import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// eslint-disable-next-line react/prop-types
export default function ListItemAutomaticSid({ icon, name }) {
  return (
    <li className='w-max rounded-lg hover:w-full  hover:bg-slate-300'>
      <a href=''>
        <div className='flex items-center gap-4 px-4 py-3'>
          <FontAwesomeIcon icon={icon} className='w-7 h-7' />
          <span className='text-gray-600 dark:text-gray-300'>{name}</span>
        </div>
      </a>
    </li>
  )
}

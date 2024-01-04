import './App.css'
// import { Hero } from './components/Hero'
// import { Navbar } from './components/Navbar'

// parte 2

// import Sidebar from './components/Sidebar';
// import { SidebarItem } from './components/Sidebar';

// import {
//   LifeBuoy,
//   Receipt,
//   Boxes,
//   Package,
//   UserCircle,
//   BarChart3,
//   LayoutDashboard,
//   Settings
// } from 'lucide-react';

// parte 3

import { AutomaticSidebar } from './components/AutomaticSidebar'

// 404 not found component
// import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      {/* 404 not found */}
      {/* <NotFound /> */}

      {/* parte 3 */}
      <AutomaticSidebar />

      {/* parte 2 */}
      {/* <Sidebar>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text='Dashboard'
          alert
        />
        <SidebarItem icon={<BarChart3 size={20} />} text='Statistics' active />
        <SidebarItem icon={<UserCircle size={20} />} text='User' />
        <SidebarItem icon={<Boxes size={20} />} text='Inventory' />
        <SidebarItem icon={<Package size={20} alert />} text='Orders' alert />
        <SidebarItem icon={<Receipt size={20} />} text='Billings' />
        <hr className='my-3' />
        <SidebarItem icon={<Settings size={20} />} text='Settings' />
        <SidebarItem icon={<LifeBuoy size={20} />} text='Help' />
      </Sidebar> */}

      {/* parte 1 */}
      {/* <Navbar />
      <Hero /> */}
    </>
  )
}

export default App

import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { LayoutDashboard, Calendar, User, Images, CreditCard, Settings, ChevronRight } from 'lucide-react'

const LeftNavigation = () => {
  const location = useLocation();

  const menuItems = [
    { id: 1, icon: LayoutDashboard, label: 'Dashboard', to: '/admin/dashboard' },
    { id: 2, icon: User, label: 'Customer', to: '/admin/customers', matchPrefix: '/admin/customers' },
    { id: 3, icon: Calendar, label: 'Bookings', to: '/admin/booking', badgeColor: 'bg-green-500', matchPrefix: '/admin/booking' },
    { id: 4, icon: Images, label: 'Gallery Uploads', to: '/gallery-uploads' },
    { id: 5, icon: CreditCard, label: 'Payments', to: '/payments', badgeColor: 'bg-red-500' },
    { id: 6, icon: Settings, label: 'Settings', to: '/settings', hasArrow: true },
  ];

  // General helper for active menu that matches prefix (for both bookings and customers)
  const isMenuActiveByPrefix = (pathname, matchPrefix) => {
    return matchPrefix ? pathname.startsWith(matchPrefix) : false;
  };

  return (
    <div className='w-64 bg-blue-900 h-screen flex flex-col text-white'>
      {/* Logo Section*/}
      <div className='p-3 border-b border-blue-800'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center'>
            <User className='w-6 h-6' />
          </div>
          <h1 className='text-lg font-semibold'>Admin Panel</h1>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className='flex-1 py-4 px-3'>
        {menuItems.map((item) => {
          const Icon = item.icon;

          // For items with matchPrefix, use custom active logic
          const isActiveCustom = item.matchPrefix
            ? isMenuActiveByPrefix(location.pathname, item.matchPrefix)
            : undefined;

          return (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) => {
                // Use custom logic for prefix-based routes, else default
                const actuallyActive =
                  typeof isActiveCustom === 'boolean'
                    ? isActiveCustom
                    : isActive;
                return `flex items-center justify-between px-4 py-3 rounded-lg mb-2 cursor-pointer transition ${
                  actuallyActive
                    ? 'bg-blue-700 text-white'
                    : 'text-blue-200 hover:bg-blue-800'
                }`
              }}
              // Don't use 'end' for items with matchPrefix, so they highlight for subroutes
              end={item.matchPrefix ? false : true}
            >
              <div className='flex items-center gap-3'>
                <Icon className='w-5 h-5' />
                <span className='text-sm font-medium'>{item.label}</span>
              </div>
              <div className='flex items-center gap-2'>
                {item.badge && (
                  <span className={`${item.badgeColor} text-white text-xs rounded-full w-5 h-5 flex items-center justify-center`}>
                    {item.badge}
                  </span>
                )}
                {item.hasArrow && (
                  <ChevronRight className='w-4 h-4' />
                )}
              </div>
            </NavLink>
          )
        })}
      </div>

      {/* Footer Settings */}
      <div className='p-1 border-t border-blue-800'>
        <NavLink
          to='/settings'
          className='flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer text-blue-200 hover:bg-blue-800 transition'
        >
          <div className='flex items-center gap-3'>
            <Settings className='w-5 h-5' />
            <span className='text-sm font-medium'>Settings</span>
          </div>
          <ChevronRight className='w-4 h-4' />
        </NavLink>
      </div>
    </div>
  )
}

export default LeftNavigation;
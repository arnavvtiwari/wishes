import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="bg-lavender-700 p-4 ">
      <ul className="flex justify-center space-x-6">
        <li>
          <NavLink 
            to="/app" 
            className={({ isActive }) => 
              `text-lavender-100 hover:text-white transition-colors ${
                isActive ? 'border-b-2 border-lavender-300' : ''
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-lavender-100 hover:text-white transition-colors ${
                isActive ? 'border-b-2 border-lavender-300' : ''
              }`
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => 
              `text-lavender-100 hover:text-white transition-colors ${
                isActive ? 'border-b-2 border-lavender-300' : ''
              }`
            }
          >
            Gallery
          </NavLink>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  )
}

export default Navigation
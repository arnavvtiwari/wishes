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
                isActive ? "border-b-2 border-lavender-300" : ""
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
                isActive ? "border-b-2 border-lavender-300" : ""
              }`
            }
          >
            Wishes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `text-lavender-100 hover:text-white transition-colors ${
                isActive ? "border-b-2 border-lavender-300" : ""
              }`
            }
          >
            Us Together
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/photos"
            className={({ isActive }) =>
              `text-lavender-100 hover:text-white transition-colors ${
                isActive ? "border-b-2 border-lavender-300" : ""
              }`
            }
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quiz"
            className={({ isActive }) =>
              `text-lavender-100 hover:text-white transition-colors ${
                isActive ? "border-b-2 border-lavender-300" : ""
              }`
            }
          >
            Take the Quiz
          </NavLink>
        </li>
        <li>
          <span className="px-2 text-xs py-0 text-amber-200 rounded-full bg-red-600 mr-2">
            New
          </span>
          <NavLink
            to="/fun"
            className={({ isActive }) =>
              `text-lavender-100 hover:text-white transition-colors ${
                isActive ? "border-b-2 border-lavender-300" : ""
              }`
            }
          >
            Fun Corner
          </NavLink>
        </li>
        <li className=" absolute right-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lavender-100 hover:text-red-600 transition-colors  ${
                isActive ? "border-b-2 border-lavender-300" : ""
              }`
            }
          >
            Log Out
          </NavLink>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
      <ul className=" flex justify-end"></ul>
    </nav>
  );
}

export default Navigation

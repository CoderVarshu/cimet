import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav className="bg-slate-500 text-white p-4 flex justify-between items-center sticky top-0">
        <div className=" text-xl font-bold">
          <NavLink to='/'> <h1>ECommerce</h1></NavLink>
        </div>
      <ul className="flex gap-4">
        <li>
          <NavLink to='/products' 
          // className={({isActive})=> isActive ? 'text' }
          >
          Products
          </NavLink>
          </li>
        <li>
          <NavLink to='/cart'>
          Cart
          </NavLink>
          </li>
        <li>
          <NavLink to='/blogs'>
          Blogs
          </NavLink>
          </li>
      </ul>
      </nav>
    </header>
  
  )

}

export default Header
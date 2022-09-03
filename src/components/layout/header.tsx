import { ReactElement } from "react";
import { FaAngleDown, FaArrowDown, FaEnvelope, FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = (): ReactElement => {
  return (
    <header className="navbar bg-primary text-primary-content">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Meu Boilerplate</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal hidden lg:flex">
            <li><Link to='/home'>Home Page</Link></li>
            <li><a>Navbar Item 2</a></li>
            <li tabIndex={0} className='bg-primary text-primary-content'>
              <a>Parent<FaAngleDown/></a>
              <ul className="p-2 bg-white text-primary">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
          </ul>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <FaRegEnvelope className="h-5 w-5" />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>

            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt='' />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-primary rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
    </header>
  );
}
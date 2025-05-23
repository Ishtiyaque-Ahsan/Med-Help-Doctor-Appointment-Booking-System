import React, { useState } from 'react'
import {assets} from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {

  const navigate = useNavigate();  //hook

  const [showMenu, setShowMenu] = useState(false)
  const [token , setToken] = useState(true);
  // token - true : logged in, else - false

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.Logo_MH} alt='' />
      <ul className='hidden md:flex items-start gap-5 font-medium '>
      {/* hidden -> hidden from mobile view,
       md:flex -> medium(device) based flex  items-start gap-5 ,font-medium : font based on medium screen size*/}
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/doctors'>
        {/* to='/doctors' -> go to this url when clicked this */}
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
       
      </ul>
      <div className='flex items-center gap-4'>
        {
          token 
          ? <div className='flex items-center gap-2 cursor-pointer group relative'>
            {/* here we have added 'group relative' to create drpdown */}
              <img className='w-10 rounded-full' src={assets.profile_pic} alt='' />
              <img className='w-2.5' src={assets.dropdown_icon} alt='' />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              {/* hidden group-hover:block -> by default it will be hidden and will be visible when we hower on img */}
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Log Out</p>
                </div>
              </div>
            </div>
          : <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button> 
        }
        {/* hidden md:block, it says make the mobile view hidden means hide this button if screen size is less
        and show this button (block) when screen size inc*/}
      
        <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt='' />
        {/** mobile menu */}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={assets.Logo_MH} alt='' />
            <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt='' />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            {/* When I select any of these, class 'active' is automatically applied to that, 
            so through that I have put blue bg and text-white as in index.css, I have the css for active class below 740px*/}
            <NavLink onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/login'><p className='px-4 py-2 rounded inline-block'>Create Account</p></NavLink>
          </ul>
        </div>
        
      
      </div>
    </div>
  )
}

export default Navbar

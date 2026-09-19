import React, { useState } from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import logo  from '../assets/images/logo.webp'
import Button from '../components/Button';
import { BsList } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
const navborlinks = [
    {
        links : "/",
        label :"Home",
    },
    {
        links : "/about",
        label : "About"
    },
    {
        links : "/services",
        label : "Services",
    },
       {
        links : "/pricing",
        label : "Pricing",
    },
    // {
    //     links : "/testomonials",
    //     label : "Testomonials"
    // },
    {
        links : "cases",
        label : "Cases"
    },
    {
        links : "contact",
        label : "Contact"
    }
]
const Navbor = () => {
const navigate = useNavigate()

let [loading , setloading] = useState(true)
function handleNav(){
    setloading(!loading)
}
    return (
        <>

            <div className='sticky top-0 z-10 hidden lg:flex h-[100px] bg-white shadow justify-between gap-8 items-center'>
                    <img src={logo} alt="" className='mx-5 lg:block hidden w-[220px] h-[70px]'/>               
                <div className='hidden lg:flex text-[var(--text)]  list-none gap-10 cursor-pointer'>
                    {
                        navborlinks.map((items , index)=>{
                            return(
                                <div key={index} className='hover:text-[var(--secondary)] font-medium'>
                                <Link to={items.links}>{items.label}</Link>
                                </div>
                            )
                        })
                    }
                </div>
<Button text="Book Now" className="hidden lg:block backgroundcol m-2" onClick={()=>{navigate("/contact#contact-form")}}/>                

            </div>
            <div className='lg:hidden min-h-[100px] fixed top-0 left-0 w-full z-50 bg-white shadow'>
  <div className='flex justify-between items-center  lg:hidden'>
                    <img src={logo} alt="" className=' px-5 w-[180px] h-[70px]'/>               
    <div className=' cursor-pointer' onClick={handleNav}>
        {
            loading ? (
<BsList size={30} className=' mx-3 position-sticky text-2xl lg:hidden self-end font-extrabold text-[var(--secondary)]'/>

            ) :  (
<IoCloseSharp size={30} className=' mx-3 position-sticky text-2xl lg:hidden self-end font-extrabold text-[var(--secondary)]'/>

            )
        }


</div>
          
  </div>
{
    loading ? "" :(
<ul className=" lg:hidden flex flex-col list-none px-4 py-2 bg-white rounded-2xl shadow-xl border border-gray-100 mt-3 divide-y divide-gray-100">
  {navborlinks.map((item, index) => (
    <li key={index}>
<Link
  to={item.links}
  onClick={() => setloading(true)}
  className="block text-center text-[var(--text)] font-medium px-4 py-3 batchcolor-hover hover:text-[var(--secondary)] transition-colors"
>
  {item.label}
</Link>
    </li>
  ))}

  <li className="pt-2">
<Link
  to="/contact"
  onClick={() => setloading(true)}
>
</Link>

  <Button
    text="Book Appointment"
    className="w-full backgroundcol rounded py-4 font-bold"
  onClick={()=>{navigate("/contact#contact-form")}} />
  </li>
</ul>
    )
}


            </div>

        
        </>
    )
}

export default Navbor

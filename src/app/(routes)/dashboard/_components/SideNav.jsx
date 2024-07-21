import React, { useEffect } from 'react';
import { CiGrid32 } from "react-icons/ci";
import { LuCircleDollarSign } from "react-icons/lu";
import { BsPiggyBankFill } from "react-icons/bs";
import { IoReceipt } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const SideNav = () => {
    const menuList = [{
        id:1,
        name:"Dashboard",
        icon:CiGrid32,
        path:"/dashboard",
    },
    {
        id:2 ,
        name:"Incomes",
        icon:LuCircleDollarSign,
        path:"/dashboard/incomes",
    },
    {
        id:3,
        name:"Budgets",
        icon:BsPiggyBankFill ,
        path:"/dashboard/budgets",
    },
    {
        id:4,
        name:"Expenses",
        icon:IoReceipt  ,
        path:"/dashboard/expenses",
    },
    {
        id:5,
        name:"Upgrade",
        icon:FaShieldAlt   ,
        path:"/dashboard/upgrade",
    },
];
const path = usePathname();
useEffect(()=>{
    console.log(path)
},[path])
  return (
    <div className='h-screen p-5 border shadow-sm'>
        <div className='flex flex-row items-center'>
             <Image src={'./chart.png'} alt='logo' width={40} height={25}/>
             <span className='text-blue-800 font-bold text-xl '></span>
        </div>
        <div>
            {menuList.map((menu,index)=>(
                <Link
                    href={menu.path} key={index}
                >
                    <h2 className='flex gap-2 items-center text-gray-500 font-medium mb-2 p-4 cursor-pointer rounded-full'>
                            <menu.icon/>
                            {menu.name}
                    </h2>   
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SideNav
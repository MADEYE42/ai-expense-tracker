"use client"
import React from 'react';
import{Button} from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs';
import LOGO from '../../../public/logo.png'
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
   const {user,signedIn} = useUser();
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
        <div className='flex flex-row items-center'>
            <Image src={LOGO} alt='LOGO' width={40} height={25} className='rounded-full'/>
            <span className='text-purple-800 font-bold text-xl'>MoneyGotNoChill</span>
        </div>
        {signedIn?(<UserButton/>):
            <div className='flex gap-3 items-center'>
                <Link href='/dashboard'>
                    <Button variant="outline">Dashboard</Button>
                </Link>
                <Link href='/dashboard'>
                    <Button className>Get Started</Button>
                </Link>
            </div>
        }
    </div>
  )
}

export default Header
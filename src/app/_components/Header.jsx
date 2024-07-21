"use client"
import React from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import LOGO from '../../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const { user, signedIn } = useUser();
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <div className='flex flex-row items-center'>
        <Image src={LOGO} alt='LOGO' width={40} height={25} className='rounded-full' />
        <span className='text-purple-800 font-bold text-xl ml-2'>MoneyGotNoChill</span>
      </div>
      {signedIn ? (
        <UserButton />
      ) : (
        <div className='flex gap-3  items-center '>
          <Link href='/dashboard'>
            <button variant="outline" className='p-3 rounded-full font-bold border hover:bg-gray-300 duration-300 hidden sm:inline-block'>Dashboard</button>
          </Link>
          <Link href='/dashboard'>
            <button className='bg-purple-600 p-3 rounded-full font-bold duration-300 hover:bg-purple-800 hover:text-white  hidden sm:inline-block'>Get Started</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;

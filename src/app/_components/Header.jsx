"use client";

import React, { useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation';

const Header = () => {

  const path = useParams();
  useEffect(()=> {
    console.log(path)
  }, [])

  return (
    <div className='m-3'>
        <div className='flex flex-row justify-between'>
            <Image src={'/logo.svg'} width={150} height={150} alt='logo'></Image>
            <ul className='md:flex sr-only sm:not-sr-only sm:hidden gap-10 flex flex-row'>
                <Link href={'/forsale'}><li className='hover:text-purple-400 cursor-pointer'>For sale</li></Link>
                <Link href={'/forrent'}><li className='hover:text-purple-400 cursor-pointer'>For Rent</li></Link>
                <Link href={'/findagent'}><li className='hover:text-purple-400 cursor-pointer'>Find an Agent</li></Link>
            </ul>
            <div className='flex gap-2'>
                <Link href={'/signup/'}>
                  <Button className='flex gap-2 cursor-pointer'><Plus className='h-5 w-5'/>Post your Ad</Button>
                </Link>
                <Link href={'/login/'}>
                  <Button variant='outline' className='cursor-pointer'>Login</Button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Header
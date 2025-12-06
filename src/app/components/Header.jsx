import React from 'react'
import Logo from './Logo'
import NavigationBar from './NavigationBar'
import { NavbarList } from '../utils/Utilities.jsx'
import CustomButton from './CustomButton'
import { ArrowUpRightIcon, Menu, X } from 'lucide-react'
import { CustomAccordion } from './CustomAccordion'
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <header className='xl:px-20 md:px-8 px-4 py-4 fixed w-full z-99 top-0 left-0'>
      <div className='hidden justify-between items-center md:flex'>
        {/* Reusable Logo Component with responsiveness */}
        <Logo />
        {/* Middle Navigation Section */}
        <NavigationBar items={NavbarList} hideNavLinkIndexesInSmallerScreens={[0]} />
        {/* Reusable button with color customization and icons */}
        <CustomButton textBold label="Book a Call" color="#000000" icon={<ArrowUpRightIcon className="w-4 h-4" />} />
      </div>

      {/* Header for smaller screens  */}
      <div className='md:hidden block'>
        <div className='relative h-20 w-full z-99'>
        <div className='absolute w-full'>
          {/* This is a customized accordion component i made using shadcn . we  need to pass title , open state icon , close state icon , content to this */}
        <CustomAccordion title={<Logo />} openTrigger={<div className='px-2 rounded-full hover:bg-zinc-300'><Menu className='w-4 h-4' /></div>} closeTrigger={<div className='p-2 rounded-full hover:bg-zinc-300'><X className='w-4 h-4' /></div>}
          content={<div className='flex flex-col gap-1'>
            {NavbarList.map((item, i) => <a key={i} className='font-semibold text-zinc-700 px-2 w-full py-1' href={item.link}>{item.label}</a>)}
            {/* shadcn button */}
            <Button variant="outline" className="rounded-full h-10 bg-zinc-100">Book a Call</Button>
          </div>}
        />
        </div>
        </div>
      </div>
    </header>
  )
}

export default Header
import React from 'react'

interface HeaderSectionProps {
    title: string
}

const HeaderSection = ({title}: HeaderSectionProps) => {
  return (
    <div className="flex items-center gap-0.5">
      <div className='px-4 py-2 font-semibold bg-violet-800  text-slate-100 rounded-lg'>
       {title}
      </div>
      <div className={`flex-1 h-1 rounded-full bg-violet-700`}></div>
    </div>
  )
}

export default HeaderSection

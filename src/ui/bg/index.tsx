import React from 'react'
import TopGraphic from './top.svg';
import BottomGraphic from './bottom.svg';

export const Background = () => {
  return (
    <figure className='fixed left-0 top-0 w-screen justify-between h-screen bg-page-bg flex flex-col'>
      <TopGraphic className="w-full min-h-[240px]" />
      <BottomGraphic className="w-full min-h-[240px]" />
    </figure>
  )
}
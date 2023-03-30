import React from 'react'
import TopGraphic from './top.svg';
import BottomGraphic from './bottom.svg';

export const Background = () => {
  return (
      <section className='h-[0px]'>
          <figure className='fixed -z-10 left-0 top-0 w-screen justify-between h-screen min-h-screen bg-page-bg flex flex-col'>
              <TopGraphic className="w-full min-h-[240px]" />
              <BottomGraphic className="w-full min-h-[240px]" />
          </figure>
      </section>
  )
}
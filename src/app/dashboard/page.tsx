import React from 'react'
import { Metadata } from 'next';
import Caloriepie from '../components/dash/Caloriepie';

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function page() {
  return (
    <>
      <div className='h-[100vh]'>
          <Caloriepie />
          <div>chart1 pie chart calories for the day </div>
          <div>chart2 calories throughout the week</div>
          <div>chart3 nutrition bar chart for the day with daily limit </div>
          <div>chart4 workout consistency throughout the year like the github one, but different colours for different split profiles</div>
      </div>
    </>
  )
}
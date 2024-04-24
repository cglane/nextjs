"use client"
import Image from 'next/image';
import Progress from '@/app/ui/progress/progress-bar'
 import {useContext} from "react"
 import { Context } from "@/context/theme";
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export default function LeftColumn(props:any) {
    return (
    <div>
      <div className='md:flex-auto text-white w-full'>
        <h2 className="font-bold text-xl p-1">Welcome to Case Status!</h2>                
        <p className='text-xs leading-4 p-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
      </div>
      <br></br>
      {/* Help Block */}
      <div className='md:flex w-full'>
          <div className="flex rounded-xl bg-white shadow-sm p-4">
            <div className="w-16 m-1">                     
               <QuestionMarkCircleIcon className="h-6 w-6 color-blue-dark bg-gray-200 rounded " />
            </div>
            
            <div className="flex flex-col w-64">
              <h3 className="text-sm font-bold">Need help?</h3>
              <p className='text-xs leading-5'>Our Customer Service team is here to help you with any question you have with your onboarding</p>
              <br/>
              <a className='text-xs color-blue-dark font-bold'>Contact us</a>
              <br/>
              <a className='text-xs color-blue-dark font-bold'>Visit Help Center</a>

            </div>
            {/* <p
              className={`${lust.className}
                truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
            >
          Hello                    
          </p> */}
          </div>
      </div>
    </div>
    )
}
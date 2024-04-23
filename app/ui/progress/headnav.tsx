
"use client"
import Image from 'next/image';
import Progress from '@/app/ui/progress/progress-bar'
 import {useContext} from "react"
 import { Context } from "@/context/theme";

export default function HeadNav(props: any) {
    const {language, setLanguage} = useContext(Context)

  return (
    <nav className="bg-blue-dark w-full">
      <div className="mx-auto max-w-1xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Image
                src="https://staging-cdn.casestatus.com/img/cs-logo-mark-white-67379bc59ef8d31051ce0ebd1da4ddc3.svg"
                width={120}
                height={100}
                className="h-8 w-auto"
                alt="Case Status Icon"
              />              
              <span className="text-white rounded-md px-3 py-2 text-lg font-bold">case status</span>
            </div>
          </div>   
          <div>
          <div className="hidden sm:ml-4 sm:block">
              <div className="space-x-4">
                <Progress />
              </div>
            </div>
          </div>      
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5"></span>
              <h3 className="text-white rounded-md px-3 py-8 text-sm font-semibold">{props.session?.user?.firm?.name}</h3>
            </button>

          </div>
        </div>
      </div>
      <div className='max-w-96 overflow-hidden'>
          <hr></hr>
      </div>
      <div  className='md:overflow-hidden bg-blue-dark h-60'></div>

    </nav>


  );
}

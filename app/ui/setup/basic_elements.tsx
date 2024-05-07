

export  function MainHeader({ children }: { children: React.ReactNode }) {

  return (
    <h1 className='text-lg text-sky-950 font-bold text-base'>{children}</h1>
  )
}


export  function MainWrapper({ children }: { children: React.ReactNode }) {

  return (
      <main className='md:m-5 rounded-md border border-gray-200 h-6/6  bg-white'>
                  {children}
    </main>

  )
}



export  function MainDescription({ children }: { children: React.ReactNode }) {

  return (
    <p className='text-xs leading-4 p-1'>{children}</p>


  )
}

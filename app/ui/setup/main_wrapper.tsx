export default function MainWrapper({ children }: { children: React.ReactNode }) {

    return (
        <main className='md:m-5 rounded-md border border-gray-200 h-6/6  bg-white'>
                    {children}
      </main>

    )
}

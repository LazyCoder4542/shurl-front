import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className='px-16 py-8 flex justify-between gap-8'>
        <div className='basis-full'>
          <h1 className="text-dark-700 text-7xl font-bold leading-[118%]">
            Cut the <span className='text-primary'>Clutter,</span><br/> Share with <br/>Flair.
          </h1>
        </div>
        <div className='basis-full'>
          <div>
            <div className='-mb-1 inline-flex bg-gradient-to-br from-[#60EFFF] to-[#00FF87] gap-x-4 px-4 py-[10px] rounded-t-[20px]'>
              <span>
                <Image
                  src="icons/link.svg"
                  width="24"
                  height="24"
                  alt="link icon"
                 />
              </span>
              <span className='text-white text-xl font-semibold'>Shorten URL</span>
            </div>
            <div className='min-w-96 rounded-[20px] rounded-tl-none px-8 py-6 border-4 border-neutral shadow-[4px_4px_0px_0px] shadow-primary-200'>
              <div className='flex flex-col gap-2'>
                <span>Paste a long URL</span>
                <input className='p-4 border-2 border-neutral rounded-lg focus:border-primary outline-none' placeholder='https://www.a-really-long-url/to-short' name='url'/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

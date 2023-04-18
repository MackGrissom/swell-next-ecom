import Image from 'next/image'

export default function Header({ scrollHandler }) {
  return (
    <header className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="mx-auto">
        <div className="relative shadow-xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <video
              priority
              fill
              className="h-full w-full object-cover opacity-80"
              src="/hero.mp4"
              alt="beach in thailand"
              autoPlay
              loop
              muted
            >
              <source src='/hero.mp4' />
            </video>
            <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 ">
            {/* <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center text-xl  font-semibold uppercase tracking-wide text-orange-600 bg-white w-fit bg-opacity-50">
             Raknarin
            </p> */}
            <div className='flex align-middle justify-center'>
            <img
              className="h-40 w-80 lg:block "
              src="../logo.png"
              alt="Your Company"
            />
            </div>
            <h1 className="mt-1 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl ">
              <span className="block text-white">Saint Of The
              </span>
              <span className="block text-orange-500">beach</span>
            </h1>

            <div className="mx-auto mt-10 max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
              <button
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-orange-600 shadow-sm hover:bg-orange-100 sm:px-8 gap-4 "
                onClick={scrollHandler}
              >
Latest Designs
              </button>
              <a
                className="flex items-center justify-center rounded-md border border-transparent bg-[orange] px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-100 hover:text-black sm:px-8 gap-4" href='/shop'
              >
                Shop clothes
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

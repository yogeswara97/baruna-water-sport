export default function Hero() {
  return (
    <section>

      <div className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        justify-between
        gap-12
        px-6
        lg:px-16
        flex-1
      ">

        {/* LEFT INFO */}
        <div className="
          order-2
          lg:order-1
          max-w-md
          space-y-6
        ">

          <p className="text-xs tracking-widest text-gray-300">
            [OCEAN ADVENTURE]
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-200">
            DISCOVER THRILLING WATER ACTIVITIES — FROM JET SKI RIDES
            TO BANANA BOATS AND PARASAILING. PERFECT FOR FRIENDS,
            FAMILIES, AND ADVENTURE SEEKERS.
          </p>

          <div className="text-2xl opacity-70">
            ↓
          </div>

        </div>

        {/* TITLE */}
        <div className="
          order-1
          lg:order-2
          w-full
          lg:w-auto
          text-left
          lg:text-right
        ">

          <h1 className="
            font-bold
            leading-tight
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            xl:text-[110px]
          ">
            RIDE THE WAVE!
          </h1>

          <h1 className="
            font-bold
            leading-tight
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            xl:text-[110px]
          ">
            CATCH YOUR FREEDOM!
          </h1>

        </div>

      </div>

      {/* FOOTER INFO */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        px-6
        lg:px-16
        pb-10
        text-sm
        text-gray-200
      ">

        <div>
          <p className="text-gray-400 text-xs tracking-widest">LOCATION</p>
          <p>BALI, INDONESIA</p>
        </div>

        <div>
          <p className="text-gray-400 text-xs tracking-widest">PHONE</p>
          <p>+62 812 3456 7890</p>
        </div>

        <div>
          <p className="text-gray-400 text-xs tracking-widest">EMAIL</p>
          <p>INFO@EMAIL.COM</p>
        </div>

      </div>

    </section>
  )
}
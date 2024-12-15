import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex sm:items-center justify-center">
      <section className="flex max-sm:flex-col h-full w-full">
        <div className="w-full sm:w-[65%] h-full flex flex-col">
          <div className="sm:pl-36 max-sm:p-9 sm:py-16">
            <div>
              <Image
                src={"/images/logo.svg"}
                alt="logo"
                width={200}
                height={50}
                className="object-contain sm:w-48 sm:h-10 w-36 h-9"
              />
            </div>
          </div>
          <div className="sm:hidden">
            <Image
              src={"/images/hero-mobile.jpg"}
              alt="hero"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="sm:pl-36 max-sm:p-9 sm:py-16 flex flex-col gap-8 sm:gap-12 whiteToLightRed">
            <h1 className="sm:text-6xl text-5xl max-sm:text-center text-primary-desaturatedRed font-light">
              W E ' R E <br />{" "}
              <span className="font-semibold text-secondary-darkGrayishRed">
                C O M I N G <br /> S O O N
              </span>
            </h1>
            <p className="font-semibold text-primary-desaturatedRed max-sm:text-center sm:w-1/2">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
            <form className="flex gap-2 border-2 w-full sm:w-1/2 justify-between border-primary-desaturatedRed border-opacity-50 rounded-full">
              <input
                type="email"
                placeholder="Email Address"
                id="email"
                className="py-2 px-6 rounded-full w-4/5 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-lightRedToRed hover:bg-whiteToLightRed rounded-full"
              >
                <div className="py-3 px-8">
                  <Image
                    src={"/images/icon-arrow.svg"}
                    alt="arrow"
                    width={12}
                    height={12}
                  />
                </div>
              </button>
            </form>
          </div>
        </div>
        <div className="w-[35%] max-sm:hidden h-full">
          <Image
            src={"/images/hero-desktop.jpg"}
            alt="hero"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </section>
    </main>
  );
}

export default function Cta() {
  return (
    <div className="w-full">
      <div className="w-full sm:px-6 lg:pt-[100px] sm:py-32 lg:px-8 ">
        <div className="relative isolate overflow-hidden bg-gray-900 py-8 px-6 pt-16 shadow-2xl  sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:flex-auto lg:py-32 w-full">
            <h2
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              style={{
                lineHeight: "50px",
                fontFamily: "Abril Fatface",
                letterSpacing: "5px",
              }}
            >
              Join Us for Worship
              <br /> <span className="text-red-500">&</span>
              <br /> Get Involved in Our Community!
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Experience the love and presence of God in a transformative way.
              Come and be part of our worship service this Sunday!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>{" "}
              <a
                href="#"
                className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  MdStayPrimaryPortrait,
  // MdRemoveRedEye,
  MdArtTrack,
  MdWeb,
} from "react-icons/md";

const WhatIDo = () => {
  return (
    <section className="text-gray-600 body-font dark:bg-transparent dark:text-white">
      <div className="container px-5 md:px-20 pt-0 pb-24 mx-auto">
        <h1 className="sm:text-5xl text-4xl font-bold title-font text-center text-gray-900 dark:text-white opacity-80 mb-3">
          What I do
        </h1>
        <div className="h-1 w-48 sm:w-64 rounded-full bg-orange-700 opacity-80 mx-auto text-center mb-16"></div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 lg:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-purple-200 text-purple-600 dark:text-amber-900  mb-4 flex-shrink-0">
              <MdArtTrack className="w-6 h-6" viewBox="0 0 24 24" />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 dark:text-amber-100 text-lg title-font font-medium mb-2">
                UX & UI DESIGN
              </h2>
              <p className="leading-relaxed text-base lg:min-h-[180px]">
                Want to improve communication with your customers? The visual
                elements and the intuitive usability of your website help to
                grow your business.
              </p>
              <a
                href="#"
                className="mt-3 text-purple-600 dark:text-amber-100 inline-flex items-center hover:underline underline-offset-4"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-purple-200 text-purple-600 dark:text-amber-900  mb-4 flex-shrink-0">
              <MdStayPrimaryPortrait className="w-6 h-6" viewBox="0 0 24 24" />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 dark:text-amber-100 text-lg title-font font-medium mb-2">
                APP DEVELOPMENT
              </h2>
              <p className="leading-relaxed text-base lg:min-h-[180px]">
                Need a tailor-made app for your business? By having a mobile
                app, your services will be at your customers&apos; fingertips.
              </p>
              <a
                href="#"
                className="mt-3 text-purple-600 dark:text-amber-100 inline-flex items-center hover:underline underline-offset-4"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-purple-200 text-purple-600 dark:text-amber-900  mb-4 flex-shrink-0">
              <MdWeb className="w-6 h-6" viewBox="0 0 24 24" />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 dark:text-amber-100 text-lg title-font font-medium mb-2">
                WEB DEVELOPMENT
              </h2>
              <p className="leading-relaxed text-base lg:min-h-[180px]">
                A website is one of the most important parts of a business.
                Let&apos;s make it consistent, impressive and trustworthy for
                your clients.
              </p>
              <a
                href="#"
                className="mt-3 text-purple-600 dark:text-amber-100 inline-flex items-center hover:underline underline-offset-4"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

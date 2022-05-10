const LandingCta = () => {
  const hideBg = false;
  return (
    <section
      id="contact"
      className={
        "text-gray-600 body-font " + "bg-slate-100 dark:bg-transparent"
      }
    >
      <div className="px-4 py-24 mx-auto">
        <div className="max-w-5xl flex flex-col sm:flex-row sm:items-center items-start ">
          <h1 className="flex-grow sm:pr-16 text-3xl font-medium title-font text-white">
            Let me know how can I help you and let&apos;s create something
            together!
          </h1>
          <a
            href="https://docs.google.com/forms/d/1PUFXYOiIdZar0MgrrKrZ_VmtrcVmAPipC2gzuMTy2Ak/"
            className="flex-shrink-0 text-gray-700 dark:text-white bg-gray-50 dark:bg-gray-200 dark:bg-opacity-30 border-0 py-2 px-8 focus:outline-none hover:bg-gray-100 hover:ring-2 hover:ring-gray-100 rounded text-lg mt-10 sm:mt-0"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingCta;

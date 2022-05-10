import { MdMenu, MdClose } from "react-icons/md";
import Footer from "../components/Footer";
//import SelectLanguageComponent from "../components/SelectLanguageComponent";
import Head from "next/head";
import LightDarkModeSwitch from "../components/LightDarkModeSwitch";
import { useTheme } from "next-themes";

export default function LandingLayout({ children }) {
  const { theme } = useTheme();
  return (
    <>
      <Head>
        <title>Loa212</title>
        <meta name="description" content="Web development made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="drawer drawer-end">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col bg-slate-100 dark:bg-slate-800">
            {/* <!-- Navbar --> */}
            <div
              className={`w-full navbar flex-0 ${
                theme === "light"
                  ? "loa-gradient-navbar"
                  : " border-b border-b-slate-100 border-opacity-20"
              } bg-slate-800`}
            >
              <div className="max-w-7xl mx-auto flex items-center justify-between grow">
                <div className="flex-1 px-2 mx-2 font-black text-3xl text-white tracking-wide">
                  Loa212
                </div>

                <div className="flex-none flex space-x-4 lg:hidden text-white">
                  <LightDarkModeSwitch />
                  <label
                    htmlFor="my-drawer-3"
                    className="btn btn-square btn-ghost"
                  >
                    <MdMenu className="text-4xl text-white" />
                  </label>
                </div>
                <div className="flex-none hidden lg:block">
                  <ul className="menu menu-horizontal items-center text-white">
                    {/* <!-- Navbar menu content here --> */}
                    <li>
                      <a className="underline underline-offset-2">Portfolio</a>
                    </li>
                    <li>
                      <a className="underline underline-offset-2">Contatti</a>
                    </li>
                    <li>
                      <LightDarkModeSwitch />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {children}
            <Footer />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              className="drawer-overlay backdrop-blur-[2px]"
            ></label>
            <div className="menu p-4 overflow-y-auto w-80 bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-white">
              {/* <!-- Sidebar content here --> */}
              <button className="flex justify-end w-min place-self-end btn-ghost rounded-md py-2 px-4">
                <label
                  htmlFor="my-drawer-3"
                  className="flex items-center text-lg font-medium tracking-wide"
                >
                  chiudi <MdClose className="text-xl ml-2" />
                </label>
              </button>
              <ul className="underline underline-offset-2 text-xl tracking-wide space-y-3 pt-8 ">
                {/* <!-- Navbar menu content here --> */}
                <li>
                  <a className="underline underline-offset-2">Portfolio</a>
                </li>
                <li>
                  <a className="underline underline-offset-2">Contatti</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

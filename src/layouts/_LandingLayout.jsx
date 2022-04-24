import Head from "next/head";
import { MdMenu, MdClose } from "react-icons/md";

export default function LandingLayout({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="drawer drawer-end">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col bg-slate-200">
            {/* <!-- Navbar --> */}
            <div className="w-full navbar loa-gradient-navbar">
              <div className="max-w-7xl mx-auto flex items-center justify-between grow">
                <div className="flex-1 px-2 mx-2 font-black text-3xl text-white tracking-wide">
                  Loa212
                </div>

                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    className="btn btn-square btn-ghost"
                  >
                    <MdMenu className="text-4xl text-white" />
                  </label>
                </div>
                <div className="flex-none hidden lg:block">
                  <ul className="menu menu-horizontal text-white">
                    {/* <!-- Navbar menu content here --> */}
                    <li>
                      <a>Navbar Item 1</a>
                    </li>
                    <li>
                      <a>Navbar Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {children}
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              className="drawer-overlay backdrop-blur-[2px]"
            ></label>
            <div className="menu p-4 overflow-y-auto w-80 bg-slate-200 text-slate-800">
              {/* <!-- Sidebar content here --> */}
              <button className="flex justify-end w-min place-self-end btn-ghost rounded-md py-2 px-4">
                <label
                  htmlFor="my-drawer-3"
                  className="flex items-center text-lg font-medium tracking-wide"
                >
                  chiudi <MdClose className="text-xl ml-2" />
                </label>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

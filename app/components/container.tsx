import * as React from "react";
import { Footer } from "./footer";
import { ThemeSwitch } from "./themeSwitch";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  const bg = "bg-white dark:bg-gray-800";
  const color = "text-black dark:text-white";

  return (
    <>
      <nav className="flex flex-row justify-between items-center max-w-800 min-w-356 w-full  py-2 mt-8 md:mb-8 mx-auto">
        <div>
          <div>
            <img
              src="/avatar.jpg"
              alt="Avatar"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 rounded-full"
            />
          </div>
        </div>
        <ThemeSwitch />
      </nav>
      <main
        className={`flex justify-center flex-col max-w-xl m-auto mt-4 md:mt-8`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Container;

import * as React from "react";
import Link from "next/link";
import Avatar from "react-avatar";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return (
    <>
      <div className="flex  flex-row justify-between items-center max-w-800px min-w-356px w-full bg-white nav px-2 sm:px-6 md:px-6 py-2 mt-8 md:mt-0 mb-0 md:mb-8 mx-auto">
        <div>
          <Link href="/" passHref>
            <img
              className="inline-block h-14 w-14 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />{" "}
          </Link>
        </div>
      </div>
      <div className="flex justify-center flex-col bg-white text-black px-0 sm:px-4 md:px-4 mt-4 md:mt-8">
        {children}
      </div>
    </>
  );
};

export default Container;

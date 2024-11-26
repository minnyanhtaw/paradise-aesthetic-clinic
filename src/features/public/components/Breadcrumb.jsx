import React from "react";
import { HiAcademicCap, HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPageTitle, links }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            to={"/"}
            className="inline-flex items-center text-sm font-medium text-zinc-50 hover:text-heading-900 dark:text-gray-400 dark:hover:text-white"
          >
            Home
          </Link>
        </li>
        {links &&
          links.map((link, index) => {
            return (
              <li key={index} className="inline-flex items-center">
                <Link
                  to={link.path}
                  className="inline-flex gap-2 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <HiChevronRight />
                  {link.title}
                </Link>
              </li>
            );
          })}
        <li className="inline-flex items-center ">
          <HiChevronRight className="text-zinc-50" />
          <div className="inline-flex gap-2 text-zinc-50 hover:text-heading-900 items-center text-sm font-medium  dark:text-gray-400 dark:hover:text-white">
            {currentPageTitle}
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;

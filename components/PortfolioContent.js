import { useState } from "react";

function PortfolioContent({
  projectTitle,
  projectImage,
  projectLink,
  projectDescription,
  projectTechStack,
}) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="mb-10">
      <div className="mb-1 text-gray-600 font-semibold sm:text-lg">
        {projectTitle}
      </div>
      <div
        className="h-40 w-80 mb-2 relative overflow-auto mx-auto sm:h-56 sm:w-112"
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <div
          className={`${
            isHover ? "opacity-10" : "opacity-100"
          } w-full h-full z-10 transition-all cursor-default`}
        >
          <img
            src={`/${projectImage}`}
            alt={projectTitle}
            className="h-full w-full"
          />
        </div>
        <div
          className={`${
            isHover ? "block" : "hidden"
          } text-black absolute top-0 z-100 p-1 transition-all duration-150 cursor-default text-sm sm:text-lg`}
        >
          <div>{projectDescription}</div>
        </div>
      </div>
      <div>
        <a
          href={projectLink}
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 hover:underline transition-all font-medium text-gray-600 mx-auto sm:text-lg"
        >
          Live Link
        </a>
      </div>
      <div className="max-w-sm text-gray-600 font-medium mx-auto sm:text-lg">
        {projectTechStack}
      </div>
    </div>
  );
}

export default PortfolioContent;

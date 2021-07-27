function Header() {
  return (
    <div className="bg-gray-900 h-80 border-b-2 border-blue-500">
      <div className="flex flex-col sm:flex-row text-center font-sans text-blue-500 sm:align-center sm:justify-center sm:space-x-5 md:space-x-7 lg:space-x-9 pt-5">
        <div className="animate-headertoptodown">About Me</div>
        <div className="animate-headertoptodown">My Work</div>
        <div className="animate-headertoptodown">Contact Me</div>
      </div>
      <div className="sm:flex sm:flex-row-reverse sm:align-center sm:justify-center sm:mt-20">
        <img
          className="animate-headerrightleft h-28 rounded-full mt-4 mx-auto sm:mx-0 sm:mt-0 sm:ml-5 lg:h-36 lg:ml-10"
          src="/kathi.png"
          alt="Kathiressan Image"
        />
        <div className="animate-headerleftright text-center text-2xl mt-2 sm:mt-3 lg:mt-8 sm:text-4xl font-extrabold font-mono text-blue-500">
          <div>Hi, I&apos;m</div>
          <div className="w-max mx-auto border-b-4 text-blue-500 border-blue-500">
            Kathiressan
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

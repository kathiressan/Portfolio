function AboutMe() {
  return (
    <div className="flex flex-col py-4 bg-blue-500">
      <div className="text-center text-xl sm:text-2xl mb-12 text-white font-bold">
        About Me
      </div>

      <div className="flex flex-col align-center justify-center text-center">
        <div className="md:flex md:align-center md:justify-center md:mb-14 md:mx-auto md:mt-10 md:space-x-20 lg:space-x-28">
          <div>
            <img
              className="h-32 sm:h-40 mx-auto lg:mr-24 lg:ml-24"
              src="/studybookwhite.svg"
              alt="Study Image"
            />
          </div>
          <div className="text-white text-lg max-w-xs mt-4 mx-auto mb-12 md:mb-0 md:self-center sm:text-xl">
            I graduated from Multimedia University Cyberjaya with a Bachelors
            degree in Computer Science (Honors) (Data Science).
          </div>
        </div>

        <div className="md:flex md:flex-row-reverse md:align-center md:justify-center md:mb-14 md:mx-auto md:mt-10 md:space-x-20 lg:space-x-28">
          <div>
            <img
              className="h-32 sm:h-40 mx-auto md:h-48 md:w-120 md:ml-4 lg:ml-24"
              src="/programmingwhite.svg"
              alt="Study Image"
            />
          </div>
          <div className="text-white lg:pl-16 lg:ml-4 md:ml-32 text-lg mt-4  max-w-xs md:max-w-sm mx-auto mb-3 md:mb-0 md:self-center sm:text-xl">
            My skills include data science, web development and programming.
            <br />
            <br />
            <div className="text-white text-base">
              Python • Machine Learning • Deep Learning • JavaScript • ReactJS •
              NextJS • Redux • NodeJS • Express • CSS Styled Components •
              Tailwind CSS • Firebase • MongoDB • Stripe Firebase Integration •
              Hadoop • C++
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
// bg-blue-500

// img height 12rem width 30rem
// margin-left 8 rem

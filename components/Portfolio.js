import PortfolioContent from "./PortfolioContent";

function Portfolio() {
  return (
    <div className="flex flex-col py-4 align-center justify-center text-center">
      <div className="text-center text-xl sm:text-2xl mb-12 text-blue-500 w-full font-bold">
        My Work
      </div>
      <div className="grid grid-cols-1 mx-auto lg:grid-cols-2 2xl:grid-cols-3 lg:gap-x-20 justify-center align-center">
        <PortfolioContent
          projectTitle="Netflix Clone"
          projectImage="netflixclone.png"
          projectLink="https://netflix-clone-9a9e7.firebaseapp.com/"
          projectDescription="Implemented full user authentication using Firebase email authentication. The movie and shows data was obtain using the TMDB API. I have also implemented full Stripe checkout via Firebase integration."
          projectTechStack="ReactJS • Redux • MaterialUI • Firebase • TMDB API • Stripe Checkout"
        />
        <PortfolioContent
          projectTitle="WhatsApp Clone"
          projectImage="whatsappclone.png"
          projectLink="https://whats-app-build.vercel.app/"
          projectDescription="Implemented Google Authentication using Firebase. You can use email address to chat with someone else. Messages appear in real time and user's last seen is showed. You may log out by clicking your profile photo."
          projectTechStack="NextJS • MaterialUI • Firebase • CSS Styled Components"
        />
        <PortfolioContent
          projectTitle="Gmail Clone"
          projectImage="gmailclone.png"
          projectLink="https://clone-yt-739fd.firebaseapp.com/"
          projectDescription="Implemented Google Authentication using Firebase. You can compose an email which has form validation. The email is sent back to you. All users receive the same mail. You may log out by clicking your profile photo."
          projectTechStack="React • Redux • MaterialUI • Firebase • CSS Styled Components"
        />
      </div>
    </div>
  );
}

export default Portfolio;

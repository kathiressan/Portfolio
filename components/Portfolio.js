import PortfolioContent from "./PortfolioContent";

function Portfolio() {
  return (
    <div className="flex flex-col py-4 align-center justify-center text-center bg-indigo-50">
      <div className="text-center text-xl sm:text-2xl mb-12 text-blue-500 w-full font-bold">
        My Work
      </div>
      <div className="grid grid-cols-1 mx-auto lg:grid-cols-2 2xl:grid-cols-3 lg:gap-x-20 justify-center align-center">
        <PortfolioContent
          projectTitle="Debate & Discussion App"
          projectImage="d&dapp.png"
          projectLink="https://debate-and-discussion-app.vercel.app/"
          projectDescription="Created a web application for people to post debate topics and comment about them. Users can choose to agree or disagree with a given topic. This build is not final and I will be doing a rebuild in the future."
          projectTechStack="NextJS • Redux • Firebase • MaterialUI • CSS Styled Components"
        />
        <PortfolioContent
          projectTitle="Netflix Clone"
          projectImage="netflixclone.png"
          projectLink="https://netflix-clone-9a9e7.firebaseapp.com/"
          projectDescription="Implemented full user authentication using Firebase email authentication. The movie and shows data was obtain using the TMDB API. I have also implemented full Stripe checkout via Firebase integration."
          projectTechStack="ReactJS • Redux • Firebase • TMDB API • Stripe Checkout • MaterialUI"
        />
        <PortfolioContent
          projectTitle="WhatsApp Clone"
          projectImage="whatsappclone.png"
          projectLink="https://whats-app-build.vercel.app/"
          projectDescription="Implemented Google Authentication using Firebase. You can use email address to chat with someone else. Messages appear in real time and user's last seen is showed. You may log out by clicking your profile photo."
          projectTechStack="NextJS • Firebase • MaterialUI • CSS Styled Components"
        />
        <PortfolioContent
          projectTitle="Snapchat Clone"
          projectImage="snapchatclone.png"
          projectLink="https://snapchat-clone-yt-2e88c.firebaseapp.com/"
          projectDescription="Used React-Camera to allow users to take photos, preview photos and send photos. All photos will be sent to the user. Anyone can view any unopened photos."
          projectTechStack="ReactJS • Redux • Firebase • MaterialUI • BEM Naming Convention"
        />
        <PortfolioContent
          projectTitle="Slack Clone"
          projectImage="slackclone.png"
          projectLink="https://slack-clone-yt-468b4.firebaseapp.com/"
          projectDescription="Implemented Google Authentication using Firebase. Users are able to create a discussion channel where they can message. All users will have access to the same channels."
          projectTechStack="ReactJS • Redux • Firebase • MaterialUI • CSS Styled Components"
        />
        <PortfolioContent
          projectTitle="Gmail Clone"
          projectImage="gmailclone.png"
          projectLink="https://clone-yt-739fd.firebaseapp.com/"
          projectDescription="Implemented Google Authentication using Firebase. You can compose an email which has form validation. The email is sent back to you. All users receive the same mail. You may log out by clicking your profile photo."
          projectTechStack="ReactJS • Redux • Firebase • MaterialUI • CSS Styled Components"
        />
        <PortfolioContent
          projectTitle="LinkedIn Clone"
          projectImage="linkedinclone.png"
          projectLink="https://linkedin-clone-yt-6c873.firebaseapp.com/"
          projectDescription="Used firebase email authentication. You are able to created posts and view them. All posts can be viewed by anyone. You may log out by clicking your profile photo."
          projectTechStack="ReactJS • Redux • Firebase • MaterialUI • BEM Naming Convention"
        />
      </div>
    </div>
  );
}

export default Portfolio;

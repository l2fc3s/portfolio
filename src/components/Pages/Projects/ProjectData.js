import LoftRentalImage from "../../../images/loft rental img.png";
import CarGalleryImage from "../../../images/car gallery.png";
import LaunchChecklistImage from "../../../images/launch checklist.png";
import TechJobsImage from "../../../images/techjobs.png";
import OrbitReportImage from "../../../images/orbit report.png";
import scrabbleScorer from "../../../images/scrabbleScorer.png";
import portfolioImg from "../../../images/portfolio2img.png";

export const ProjectData = [
  {
    id: 1,
    link: " https://github.com/l2fc3s/portfolio ",
    title: "Portfolio",
    image: portfolioImg,
    text: "This is the site you are currently viewing. For this site I used React.  Some of the features include a fully mobile responsive layout, collapsible nav-bar, single page layout, and dynamic data for easy updating.",
    alt: "Portfolio site",
    repo: "https://github.com/l2fc3s/portfolio",
    hasViewProjectLink: false,
  },

  {
    id: 2,
    link: "https://l2fc3s.github.io/react-loftRental-website/#/",
    title: "'Loft Rental' Site",
    image: LoftRentalImage,
    text: 'React "loft rental" landing page. Fully mobile responsive design with an animated image slider gallery.',
    alt: "React 'Loft Rental' Site",
    repo: "https://github.com/l2fc3s/react-loftRental-website",
    hasViewProjectLink: true,
  },

  {
    id: 3,
    link: "https://l2fc3s.github.io/html-me-something/#body",
    title: "Car Photo Gallery",
    image: CarGalleryImage,
    text: "A small gallery of car photos I have taken over the last few years. Each photo displays a short paragraph on mouse hover. Responsive design for mobile and desktop with collapsible navigation bar.",
    alt: "Car Photo Gallery",
    repo: "https://github.com/l2fc3s/html-me-something",
    hasViewProjectLink: true,
  },

  {
    id: 4,
    link: " https://l2fc3s.github.io/Launch-Checklist-Form/ ",
    title: "Launch Checklist Form",
    image: LaunchChecklistImage,
    text: "An html/css form with javascript validators for entry and data type. Uses API call to randomly fetch planetary data on load.",
    alt: "Launch Checklist Form",
    repo: "https://github.com/l2fc3s/Launch-Checklist-Form",
    hasViewProjectLink: true,
  },

  {
    id: 5,
    link: " https://github.com/l2fc3s/java-web-dev-techjobs-persistent",
    title: "Java TechJobs",
    image: TechJobsImage,
    text: "This is a project done in LaunchCode LC101.  I contributed by connecting the application to a MySQL database. I also Implemented features that allow the user to add a new job, employer, and skills to the web application and database. The user can also search for specific jobs, employers, or skills. Search results show in a will list, or the user can view jobs by category.",
    alt: "Java TechJobs",
    repo: "https://github.com/l2fc3s/java-web-dev-techjobs-persistent",
    hasViewProjectLink: false,
  },

  {
    id: 6,
    link: " https://github.com/l2fc3s/orbit-report",
    title: "Orbit Report",
    image: OrbitReportImage,
    text: " This is a project built using Angular framework. It features a table of Satellite names including data for each. The table is sortable by column, and filters based on search results. It also shows total number of satellites in the table, as well as the count for each type of satellite.",
    alt: "Orbit Report",
    repo: "https://github.com/l2fc3s/orbit-report",
    hasViewProjectLink: false,
  },

  {
    id: 7,
    link: "https://replit.com/@blvck86/Graded-Assignment-2-Scrabble-Scorer-1#index.js",
    title: "Scrabble Scorer",
    image: scrabbleScorer,
    text: "NodeJS Scrabble scorer console game that allows the user to interact through readline sync. User can select three scoring algorithms. The game will add up points for each word, and display a final score when 'stop' is detected.",
    alt: "Scrabble Scorer",
    repo: "https://github.com/l2fc3s/Scrabble-Scorer",
    hasViewProjectLink: true,
  },
];

/*  
Images should be cropped at 5x7

{
    id: number,
    link: " project link",
    title: "Project title",
    image: image variable,
    text: " project description ",
    alt: "alt description",
    repo: "repository link",
    hasViewProjectLink: Boolean,
  },

*/

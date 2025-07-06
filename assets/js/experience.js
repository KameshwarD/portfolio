AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Analyst",
    cardImage: "assets/images/experience-page/acadia.logo.jpg",
    place: "Acadia Technologies",
    time: "Apr 2025 - present",
    desp: "<li>Data Cleaning & Preparation – Cleaned and processed datasets by filtering 10,000+ records and resolving 15% missing values, achieving 95% data accuracy for ERP and software development projects</li><li>Data Visualization – Designed 5+ interactive dashboards using Tableau and Power BI, visualizing key metrics to enhance stakeholder decision-making and reduce analysis time by 20%</li><li>Team Collaboration – Collaborated with software and consulting teams to streamline data workflows, supporting 4+ stakeholders in enterprise integration initiatives</li>",
  },
  {
    title: "Data Auditor - Intern",
    cardImage: "assets/images/experience-page/cmslogo2.jpg",
    place: "Illinois Department of Central Management Services",
    time: "Jun 2024 - Dec 2024",
    desp: "<li>Ensured Compliance and Data Accuracy – Audited the Division of Vehicles (DOV) fleet management system, verifying billing codes, asset numbers, and critical data to ensure compliance with JCAR and regulations, preventing discrepancies</li><li>Developed SQL queries to validate database records and assisted in creating test plans in TestRail, gaining practical experience with SDLC and web-based application testing</li><li>Cleared Overdue Audits – Completed data audits from 2018–2024 using SQL, Power BI, and Microsoft Excel, improving departmental productivity by 30% through efficient handling of high-priority tasks</li><li>Managed Fleet Data – Analyzed and maintained 10,000+ vehicle records, ensuring accurate order status tracking, timely updates, and better resource allocation</li>",
  },
  {
    title: "Web Development Intern",
    cardImage: "assets/images/experience-page/uis.png",
    place: "University of Illinois Springfield",
    time: "Oct 2023 - May 2024",
    desp: "<li>Developed & Enhanced Digital Case Management - Designed and maintained a cloud-based mental health support platform on Azure, enabling seamless case tracking, counselor assignments, and session history management, ensuring scalability and accessibility</li><li>Data-Driven Decision Making - Built interactive dashboards using Tableau, Power BI & SQL, leveraging Analytics to analyze student engagement, issue severity, resolution times, and counselor efficiency, providing actionable insights to improve support services</li><li>Ensured Compliance & Data Privacy - Implemented secure authentication protocols and data encryption to protect student mental health records, ensuring compliance with university policies</li><li>Collaborated with Counselors & Support Teams - Worked closely with students, student counselors, and university administrators to gather requirements, refine workflows, and develop user-friendly features for the platform</li>",
  },
  {
    title: "Systems Engineer",
    cardImage: "assets/images/experience-page/infosyslogo.png",
    place: "Infosys Ltd",
    time: "Mar 2022 - Aug 2023",
    desp: "<li>Strengthened Core Banking Operations – Assisted in the FINACLE implementation, deployed in 100 countries, supporting 1.3 billion bank accounts and ensuring seamless transaction processing</li><li>Optimized Financial Closing Processes – Provided business and technical analysis for year-end financial closing in African banks, ensuring data integrity, and process efficiency, contributing to FINACLE’s $700M revenue in FY 2022-23</li><li>Improved Data Accuracy & System Performance – Conducted Level-3 system testing and root cause analysis, leveraging SQL and Azure DevOps to identify and resolve critical database discrepancies, enhancing data integrity and operational efficiency</li><li>Developed Data-Driven Issue Management Dashboards – Designed interactive Power BI dashboards for tracking and analyzing bank-reported issues, segmenting by account type, severity, and resolution status. Utilized Azure DevOps for tracking resolution timelines, identifying bottlenecks, and optimizing response efficiency through data-driven decision-making</li><li>Business Process Analysis & Optimization – Mapped and analyzed core banking workflows using ARIS and Visio, identifying inefficiencies and recommending process enhancements to streamline operations</li>",
  },
  {
    title: "Analyst A4",
    cardImage: "assets/images/experience-page/capgemini-logo.png",
    place: "Capgemini Technology Services",
    time: "Jun 2021 - Feb 2022",
    desp: "<li>Optimized data models and reporting using SQL, Python, Tableau, and Power BI to enhance BaNCS core banking processes, improving transaction efficiency, compliance tracking, and decision-making</li><li>Led the implementation of BaNCS ERP modules with Excel, Azure, and Power BI, driving improvements in banking operations, customer management, and risk assessment</li><li>Created stories and managed work by using Azure DevOps Boards</li><li>Streamlined business processes using ARIS, Visio, and SharePoint, ensuring effective collaboration between business and technical teams to enable automation and system enhancements</li>",
  },
  {
    title: "Intern",
    cardImage: "assets/images/experience-page/bhel_logo.png",
    place: "Bharat Heavy Electricals Limited",
    time: "May 2018 - Jun 2019",
    desp: "<li>Produced 5+ reports on surveying methodologies and performed comparison analysis by examining unusual trends for 1000 employees across 5 different manufacturing facilities in the organization</li><li>Developed microservices-based inventory management system for data management utilizing Docker and Kubernetes, improving data management reliability for Steam Turbines, Wind Turbines, and Pulverizers by 25% and reducing stockouts of manufacturing material by 30%</li>"
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    href: "https://ulhacks.com/",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
    href: "https://elevatetech.codes/",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
    href: "https://hackasolution.devpost.com/",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
    href: "https://uniglobe-hacks.devpost.com/",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
    href: "https://atlashacks2.devpost.com/",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
    href: "https://neohacks.org/",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
    href: "https://www.missioninspired.org/hackathon",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
    href: "https://hack3.co/",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
    href: "https://jithack.netlify.app/",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
    href: "https://recesshacks.com/",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
    href: "https://citro.tech/",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
    href: "https://nhacks-vi.devpost.com/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

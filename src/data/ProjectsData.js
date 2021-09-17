import React from 'react';
// Template:
// {
//  name: ''
//  association: ''
//  time: ''
//  description: ''
//  tech: ''
//  url: ''
//  show: bool
// }
const workPageData = [
  {
    name: "SmartCache",
    time: "Spring 2020",
    description: "Distributed Cache Utilizing a Markov Chain for Informed Prefetch",
    association: "6.824 (Distributed Systems) Final Project",
    tech: "Built with Golang",
    url: "//github.com/rootjalex/smart-cache",
    show: true,
  },
  {
    name: "MIT KOMs Tracker",
    time: "June 2020",
    description: "A simple website to check in on friendly competition amongst a few MIT cyclists",
    association: "A quick fun hack",
    tech: "Built with Flask and React",
    url: "//github.com/meiaalsup/mit-koms",
    show: true,
  },
  {
    name: "This Site :)",
    time: "May 2020",
    description: "Something something personal brand",
    association: "A post-college quarantine endeavor",
    tech: <div>
      {`Built with React with `}
      <a className="websitelink" target="_blank" rel="noopener noreferrer"
         href="//motherfuckingwebsite.com">
        this
      </a>
      {` design principle in mind`}
    </div>,
    url: "//meiaalsup.github.io",
    show: true,
  },
  {
    name: "Compost Share",
    time: "May 2020",
    description: "Interactive Map to Find Nearby Composting Locations",
    association: "Grand Prize Winner at Cal Earth Hacks",
    tech: "Built with Node.js, React, and Express",
    url: "//github.com/meiaalsup/compost-share",
    show: true,
  },
  {
    name: "Agriculture Sustainability",
    time: "Fall 2019",
    description: "Analysis of Sustainability of Indoor Farming Methods vs Traditional",
    association: "6.s898 (Climate Change Seminar) Final Project",
    tech: "Data Collected from USDA, FDA, and calls with local farmers",
    url: "",
    show: true,
  },
  {
    name: "Almuruj Game",
    time: "Spring 2019",
    description: "Web Optimization Tool Enabling Sustainable Neighborhoods",
    association: "MIT Sustainable Design Lab",
    tech: "Built with JavaScript and Leaflet",
    url: "//web.mit.edu/sustainabledesignlab/projects/AlmurujGame/index.html",
    show: true,
  },
  {
    name: "BlueBikes Commute Analysis",
    time: "Fall 2018",
    description: "Analysis of Commute Patterns in Boston's BlueBikes Bike Sharing System",
    association: "IDS.131 (Data Science) Final Project",
    tech: "Analysis in Python and R, aided by Google Maps API",
    url: "//github.com/meiaalsup/bluebikecommutepatterns",
    show: true,
  },
  {
    name: "Infographic Content Analysis",
    time: "Fall 2018",
    description: "Analysis of the relative importance of textual and visual content in infographics",
    association: "6.804 (Computational Cognitive Science) Final Project",
    tech: "Built in Python",
    url: "//github.com/meiaalsup/lda_infographics",
    show: true,
  },
  {
    name: "Window Blinds Manager",
    time: "Feb 2016",
    description: "Light Sensitive Automatic Window Blinds Manager",
    association: "Runner Up, Best Use of Amazon Echo at Make MIT Hardware Hackathon",
    tech: "Built with Arduino and Python",
    url: "",
    show: true,
  },
  {
    name: "GTL Israel Blog",
    time: "Jan 2016",
    description: "Web-blog about one month of teaching in Kibbutz Ein Shemer, Israel, and my first web project ever!",
    association: "MIT MISTI Global Teaching Labs",
    tech: "Built with HTML, CSS, and Bootstrap",
    url: "http://web.mit.edu/malsup/www/gtlblog/home.html",
    show: true,
  },
]
export default workPageData

const projects = [
  {
    id: 0,
    image: "/assets/images/space-tourism-desktop-preview.jpg",
    title: "Space Tourism",
    description:
      "A multi-page website that features React JS and its ecosystem. Its uses React Router v6 and Framer Motion, and uses aria- and role attributes, and proper focus management for accessibility.",
    technologies: [
      "HTML 5",
      "CSS 3",
      "Javascript",
      "Git",
      "GitHub",
      "React JS",
      "React Router",
      "Framer Motion",
    ],
    highlights: [
      "Contet API for active tab management",
      "React Router for client side navigation",
      "Framer motion for page transitions and animation",
      "Keyboard nagivation for custom tab list widget",
    ],
    github: "https://github.com/cellbesmanos/fm-space-tourism-react",
    url: "https://cell-space-tourism-react.netlify.app/",
  },
  {
    id: 1,
    image: "/assets/images/todo-desktop-preview.jpg",
    title: "To-Do Application",
    description:
      "A single page website that showcases your common To-do application. It allows the creation of new tasks and cross out finished tasks or completely removed them. Moreover, it has filters to easily separate current and finished tasks!",
    technologies: [
      "HTML 5",
      "CSS 3",
      "Javascript",
      "Git",
      "GitHub",
      "Vue 3 JS",
    ],
    highlights: [
      "Built with the latest Vue3 composition api",
      "Established a two-way data communication between the child and parent element through custom events",
      "Computed properties for identifying remaining tasks",
    ],
    github: "https://github.com/cellbesmanos/fm-todo-app/",
    url: "https://cell-todo-app.netlify.app/",
  },
  {
    id: 2,
    image: "/assets/images/rest-countries-desktop-preview.jpg",
    title: "REST Countries",
    description:
      "A multi-page website that features modern CSS practices. Its built with CSS grid and flexbox, and uses aria- and role attributes, and proper focus management for accessibility.",
    technologies: [
      "HTML 5",
      "CSS 3",
      "Javascript",
      "Git",
      "GitHub",
      "React JS",
      "React Router",
    ],
    highlights: [
      "Page routing with React Router",
      "Usage of ErrorBoundary component to handle errors and render fallback UI",
      "Dynamic details page for each country",
      "Fetch countries' borders when viewed",
    ],
    github: "https://github.com/cellbesmanos/fm-rest-countries",
    url: "https://cell-rest-countries.netlify.app/",
  },
  {
    id: 3,
    image: "/assets/images/loopstudios-desktop-preview.jpg",
    title: "Loopstudios landing page",
    description:
      "A landing page concept for the fictional Loopstudios. It showcases the usage of grid to manipulate the layout depending on the screen size. Moreover, it uses intersection observer api to handle the nagivation bar.",
    technologies: ["HTML 5", "CSS 3", "Javascript", "GitHub", "SCSS"],
    highlights: [
      "Usage of CSS preprocessor to easily handle CSS",
      "Intersection Observer to identify when the nagivation bar should detach",
    ],
    github: "https://github.com/cellbesmanos/fm-loopstudios-landing-page",
    url: "https://cell-loopstudios.netlify.app/",
  },
];

function getProject(id) {
  return projects.filter((project) => project.id === id)[0];
}

export { projects, getProject };

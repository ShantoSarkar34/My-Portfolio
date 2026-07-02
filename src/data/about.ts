export interface AboutContent {
  intro: string;
  journey: string;
  enjoys: string;
  hobbies: string;
  stats: { label: string; value: string }[];
}

export const about: AboutContent = {
  intro:
    "I'm Md Shanto Sarkar, a passionate Frontend Developer from Bangladesh who enjoys transforming ideas into modern, responsive, and user-friendly web applications. While my strongest expertise is in React and the frontend ecosystem, I'm actively expanding my skills in backend development to become a well-rounded Full Stack Developer.",

  journey:
    "My programming journey began with curiosity about how websites work, which quickly turned into a passion for building them myself. Starting with HTML, CSS, and JavaScript, I gradually mastered React, Tailwind CSS, and modern frontend development before exploring backend technologies like Node.js, Express, MongoDB, PostgreSQL, and Prisma. Every project has taught me something new—from designing reusable components and managing application state to solving real-world challenges with clean, maintainable code. Today, I focus on writing scalable applications while continuously learning better architecture, performance optimization, and best development practices.",

  enjoys:
    "I enjoy building clean, interactive, and accessible user interfaces that provide an excellent user experience. I find satisfaction in turning complex ideas into simple, intuitive solutions, improving application performance, and learning modern technologies that help me grow as a developer. I also enjoy collaborating with teams, sharing ideas, and solving real-world problems through software.",

  hobbies:
    "Outside of programming, I enjoy reading tech blogs, exploring new developer tools, watching software engineering content, and experimenting with modern frameworks and libraries. I also like improving my UI design sense, staying updated with industry trends, and continuously challenging myself with new technologies and personal projects.",

  stats: [
    { label: "Years Coding", value: "2+" },
    { label: "Projects Built", value: "40+" },
    { label: "Technologies Learned", value: "10+" },
  ],
};
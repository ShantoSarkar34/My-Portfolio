export interface AboutContent {
  intro: string; // opening 1-2 sentences, sets the tone
  journey: string; // programming journey paragraph
  enjoys: string; // type of work you enjoy
  hobbies: string; // interests outside programming
  stats: { label: string; value: string }[]; // small credibility stats
}

export const about: AboutContent = {
  intro:
    "I'm a MERN stack developer who enjoys turning ideas into fast, clean interfaces — and I'm currently deepening my full-stack skills with Node.js, Express, PostgreSQL, and Prisma.",
  journey:
    "Write your real story here: how you got into programming, what pulled you in, key moments or projects that shaped how you build things today. Be specific — mention a real project, a real struggle, a real \"aha\" moment.",
  enjoys:
    "Write what kind of work energizes you — e.g. building interactive UIs, solving performance problems, learning new frameworks, working with a small focused team, etc.",
  hobbies:
    "Write your real hobbies/interests outside coding — sports, gaming, reading, music, whatever's true. This is what makes the section feel human instead of a resume restated.",
  stats: [
    { label: "Years Coding", value: "X+" },
    { label: "Projects Built", value: "X+" },
    { label: "Tech Learned", value: "X+" },
  ],
};
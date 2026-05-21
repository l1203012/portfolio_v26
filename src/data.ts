export const profile = {
  name: 'Adam',
  handle: 'iLemonFellow',
  title: 'Developer',
  location: 'Belgium',
  age: 19,
  education: 'Bachelor of Computer Science',
  tagline: 'Builds software for screens, games, and the spaces in between.',
  bio: [
    '19-year-old developer from Belgium working across full-stack web and real-time game systems.',
    'Selected projects have reached an audience of over 150 million combined visits.',
  ],
  contact: {
    discord: 't1y_la',
    note: 'Secure channel available via Discord for collaborations and inquiries.',
  },
}

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'C#', 'C++', 'Lua / LuaU'] },
  { group: 'Frameworks', items: ['React', 'Angular', 'Tailwind', 'HTML'] },
  { group: 'Platforms', items: ['Web', 'Roblox', 'Unity', 'Azure'] },
]

export type Project = {
  id: string
  year: number
  title: string
  role: string
  scale: string
  description: string
  link?: string
  tags: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'coldplay',
    year: 2026,
    title: 'Roblox Event with Coldplay',
    role: 'Programmer',
    scale: 'Official Event',
    description:
      'Worked as a programmer on the official Roblox Event with Coldplay, contributing to the interactive experience.',
    link: 'https://www.roblox.com/communities/35002761',
    tags: ['Event', 'Roblox', 'Live Ops'],
    featured: true,
  },
  {
    id: 'crumbl',
    year: 2026,
    title: "Crumbl's Phoenix International",
    role: 'Commissions',
    scale: '183 Members',
    description: 'Commissioned to create new mechanics and fix legacy code issues.',
    link: 'https://www.roblox.com/communities/35881804',
    tags: ['Commissions', 'Refactoring', 'Gameplay'],
  },
  {
    id: 'ix-studios',
    year: 2026,
    title: 'IX Studios',
    role: 'Full Stack Programmer',
    scale: '11K Members · 17.6M+ Visits',
    description: 'Contributed to high-traffic projects with massive user engagement.',
    link: 'https://ixstudiodev.com/',
    tags: ['Full Stack', 'High Traffic', 'Web & Game'],
    featured: true,
  },
  {
    id: 'jurassic',
    year: 2026,
    title: 'Jurassic World: Regeneration',
    role: 'Programmer',
    scale: '61.5K Members',
    description:
      'Imported assets, optimized performance, and implemented new game mechanics for a large player base.',
    link: 'https://www.roblox.com/communities/33426357',
    tags: ['Optimization', 'Mechanics', 'Collaboration'],
  },
  {
    id: 'altez',
    year: 2026,
    title: "Altez's Phoenix International",
    role: 'Senior Developer',
    scale: '23K Members',
    description:
      'Led development for new mechanics across all Human Teams and resolved critical bugs.',
    link: 'https://www.roblox.com/communities/33161058',
    tags: ['Leadership', 'Bug Fixing', 'Mechanics'],
  },
  {
    id: 'uvc',
    year: 2025,
    title: 'United Valarian Confederation',
    role: 'Scripter',
    scale: '1.7K Members',
    description:
      'Optimized core systems including the main menu, gun system, and vehicle handling.',
    link: 'https://www.roblox.com/communities/5442437',
    tags: ['System Optimization', 'Vehicles', 'UI'],
  },
]

export type Video = {
  id: string
  title: string
  project: string
  url: string
  thumbnail?: string
}

export const videos: Video[] = [
  {
    id: 'state-of-madison-drones',
    project: 'State of Madison',
    title: 'Drone System',
    url: 'https://www.youtube.com/embed/Swc0SC1IeB4',
  },
  {
    id: 'club-sullage',
    project: 'Club',
    title: 'Sullage Systems',
    url: 'https://www.youtube.com/embed/3R55joJEycY',
  },
  {
    id: 'r2g-punching',
    project: 'R2G',
    title: 'Punching System',
    url: 'https://www.youtube.com/embed/umHb6JDPfM8',
  },
  {
    id: 'r2g-choke',
    project: 'R2G',
    title: 'Choke — Polished',
    url: 'https://www.youtube.com/embed/h3y2OGizNmo',
  },
]

export const certifications = [
  { id: 'az900', name: 'Microsoft Certified: Azure Fundamentals', code: 'AZ-900', issuer: 'Microsoft' },
  { id: 'ccna', name: 'Cisco Certified Network Associate', code: 'CCNA', issuer: 'Cisco' },
  { id: 'meta-fe', name: 'Meta Front-End Developer', code: 'PRO-CERT', issuer: 'Meta' },
  { id: 'unity', name: 'Unity Certified User: Programmer', code: 'UNITY-CERT', issuer: 'Unity' },
]

export const hobbies = [
  { id: 'gaming', title: 'Gaming', description: 'Exploring immersive worlds and competitive gameplay.' },
  { id: 'coding', title: 'Coding', description: 'Building side projects and learning new technologies.' },
  { id: 'travel', title: 'Traveling', description: 'Discovering new cultures and places.' },
  { id: 'music', title: 'Music', description: 'Listening to diverse genres and finding inspiration.' },
]

export const sections = [
  { id: 'top', label: 'Top' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'offline', label: 'Offline' },
  { id: 'contact', label: 'Contact' },
]

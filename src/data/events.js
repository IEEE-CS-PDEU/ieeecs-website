export const eventsData = [
  {
    id: "iot-workshop-2023",
    title: "IoT Workshop",
    date: "2023-03-15",
    formattedDate: "March 15, 2023",
    image: "/events/iot-workshop.jpg",
    placeholderImage: "/api/placeholder/400/300",
    description:
      "A hands-on 5 Days workshop introducing the fundamentals of IoT & AI ML, including device connectivity, data processing, and real-world applications.",
    location: "PDEU Main Campus",
    detailLink: "/events/iot-workshop-2023",
    category: "Workshop",
    featured: true,
    status: "past",
  },
  {
    id: "cp-expert-talk-2023",
    title: "CP Expert Talk",
    date: "2023-02-10",
    formattedDate: "February 10-12, 2023",
    image: "/events/cp-expert-talk.jpg",
    placeholderImage: "/api/placeholder/400/300",
    description:
      "An insightful session on Competitive Programming and DSA was conducted by PDEU's alumnus Vinay K, currently a Software Engineer III at Google.",
    location: "Virtual Event",
    detailLink: "/events/cp-expert-talk-2023",
    category: "Technical Talk",
    featured: true,
    status: "past",
  },
  {
    id: "genai-session-2023",
    title: "GenAI Session",
    date: "2023-01-25",
    formattedDate: "January 25, 2023",
    image: "/events/genai-session.jpg",
    placeholderImage: "/api/placeholder/400/300",
    description:
      "A captivating session on Generative AI was delivered by Mr. Shreyan Mehta, an industry expert, exploring its applications and future potential in technology.",
    location: "PDEU Auditorium",
    detailLink: "/events/genai-session-2023",
    category: "Workshop",
    featured: true,
    status: "past",
  },
  {
    id: "Web-dev-workshop",
    title: "Web Development Workshop",
    title: "Blockchain Workshop",
    date: "2025-05-20",
    formattedDate: "May 20, 2025",

    placeholderImage: "/api/placeholder/400/300",
    description:
      "Dive into the essentials of web development, covering HTML, CSS, JavaScript, and modern frameworks to build responsive and dynamic websites.",
    location: "PDEU Innovation Lab",
    detailLink: "/events/blockchain-workshop-2025",
    category: "Workshop",
    featured: true,
    status: "upcoming",
    registrationOpen: true,
  },
  {
    id: "git-hub-wrkshop",
    title: "Kernel & Commit",
    date: "2025-06-15",
    formattedDate: "June 15-16, 2025",
    image: "/events/hackathon-2025.jpg",
    placeholderImage: "/events/git.webp",
    description:
      "Explored the world of Version Control by learning GitHub and Linux essentials in this workshop, mastering version control and open-source collaboration.",
    location: "PDEU Campus",
    detailLink: "/events/hackathon-2025",
    category: "Hackathon",
    featured: true,
    status: "upcoming",
    registrationOpen: false,
    registrationStartDate: "2025-05-01",
  },
];

export const getUpcomingEvents = (limit = null) => {
  const now = new Date();
  const upcoming = eventsData
    .filter((event) => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return limit ? upcoming.slice(0, limit) : upcoming;
};

export const getPastEvents = (limit = null) => {
  const now = new Date();
  const past = eventsData
    .filter((event) => new Date(event.date) < now)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return limit ? past.slice(0, limit) : past;
};

export const getFeaturedEvents = (limit = 3) => {
  return eventsData
    .filter((event) => event.featured)
    .sort((a, b) => {
      if (a.status === "upcoming" && b.status !== "upcoming") return -1;
      if (a.status !== "upcoming" && b.status === "upcoming") return 1;
      return new Date(a.date) - new Date(b.date);
    })
    .slice(0, limit);
};

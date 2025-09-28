const base = import.meta.env.BASE_URL;

export const projects = [
  {
    slug: "whistle",
    title: "Whistle",
    description: "A fast, modern video sharing app with a smooth scrollable feed and quick likes.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "Cloudinary"],
    demoVideo: "/videos/whistle-demo.mp4",
    image: "whistleLogo.png",
    github: null,
    link: "https://mfeituri.github.io/whistle-site/",
  },
  {
    slug: "sognar",
    title: "SoGnar",
    description: "A mountain biking app with GPS tracking, theft alerts, and community defense system.",
    tech: ["Swift", "SwiftUI", "Firebase", "MapKit"],
    demoVideo: "/videos/sognar-demo.mp4",
    image: "sognarLogo.png",
    github: null,
    link: null,
  },
  {
    slug: "moviebucket",
    title: "MovieBucket",
    description: "Browse, save, and discover movies with a fast, clean Android app. Includes search, watchlist, and recommendations.",
    tech: ["Kotlin", "Jetpack Compose", "TMDb API"],
    demoVideo: "/videos/moviebucket-demo.mp4",
    image: "movie.jpg",
    github: null,
    link: null,
  },
  {
    slug: "beanify",
    title: "Beanify",
    description: "A Spotify Wrapped-style analytics app showing your top songs, artists, and listening trends. Built natively for Android.",
    tech: ["Kotlin", "Jetpack Compose", "Spotify API"],
    demoVideo: "/videos/beanify-demo.mp4",
    image: "beanify.png",
    github: null,
    link: null,
  },
];

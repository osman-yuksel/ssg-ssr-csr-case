interface Content {
  text: string;
}

interface CoverImage {
  id: string;
  createdAt: Date;
  url: string;
}

interface Post {
  id: string;
  content: Content;
  title: string;
  slug: string;
  coverImage: CoverImage;
}

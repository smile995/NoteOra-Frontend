export interface TBlogs {
  _id?: string|number;
  title: string;
  slug?: string;
  description?: string;
  author: string;
  categories?: string[];
  featuredImage?: string;
  status?: "pending" | "published";
  views?: number;
  likes?: number;
  commentsCount?: number;
  readingTime?: string;
  isFeatured?: boolean;
  isDeleted?: boolean;
  keywords?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
export const getPath = (slug?: string) => ({
  home: "/",
  blog: {
    post: `/blog/${slug}/`,
    category: `/blog/category/${slug}/`,
  },
});

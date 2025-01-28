const apiURL: string = import.meta.env.NEWT_CDN_API_URL;
const apiToken: string = import.meta.env.NEWT_CDN_API_TOKEN;

type Response = {
  skip: number;
  limit: number;
  total: number;
};

type Post = Response & {
  items: [
    {
      _sys: {
        createdAt: string;
        updatedAt: string;
      };
      title: string;
      slug: string;
      body: string;
      description: string;
      image: {
        src: string;
        alt: string;
      };
      category: Category;
      index: boolean;
    }
  ];
};

type Category = Response & {
  items: {
    name: string;
    slug: string;
  };
};

export const getAllPosts = async () => {
  const response = await fetch(`${apiURL}/blog/post`, {
    headers: { Authorization: ` Bearer ${apiToken}` },
  });
  const data: Post = await response.json();
  const allPosts = data.items;
  return allPosts;
};

export const getCategories = async () => {
  const response = await fetch(`${apiURL}/blog/category?order=-_sys.customOrder`, {
    headers: { Authorization: ` Bearer ${apiToken}` },
  });
  const data: Category = await response.json();
  const categories = data.items;
  return categories;
};

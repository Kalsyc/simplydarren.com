import { marked } from 'marked'; // import the marked lib

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ fetch, params }) => {
  const slug = params['projectId'];
  const res = await fetch(`/markdown/${slug}.md`);
  const post = await res.text();

  return {
    slug,
    post: marked.parse(post),
  };
};

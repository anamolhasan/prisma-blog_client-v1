
import { env } from "process";

const API_URL = env.API_URL;

/** No Dynamic and No {cache: no-store} : SSG -> Static Page
 * { cache: no-store} : SSR -> Dynamic Page
 * next: {revalidate:10}: ISR -> Mix between static and dynamic
 */

interface ServiceOptions {
    cache?:RequestCache;
    revalidate?:number;
}

interface GetBlogParams {
    isFeatured?:boolean;
    search?:string
}


export const blogService = {
 getBlogPost: async function (
  params?: GetBlogParams,
  options?: ServiceOptions,
) {
  try {
    // ✅ URL বানানো
    const url = new URL(`${API_URL}/posts`);

    // ✅ query params যোগ করা
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          url.searchParams.append(key, String(value));
        }
      });
    }

    // ✅ fetch config
    const config: RequestInit & { next?: { revalidate: number } } = {};

    if (options?.cache) {
      config.cache = options.cache;
    }

    if (options?.revalidate) {
      config.next = { revalidate: options.revalidate };
    }

    // ✅ একবারই fetch
    const res = await fetch(url.toString(), config);

    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data = await res.json();

    return { data, error: null };

  } catch (err) {
    return {
      data: null,
      error: { message: 'Something went wrong' },
    };
  }
},


    getBlogById: async function(id:string) {
        try {
            const res = await fetch(`${API_URL}/posts/${id}`)

            const data = await res.json()

            return {data: data, error:null}
        } catch (err) {
            return {data:null, error:{message:'Something Went Wrong'}}
        }
    }
}
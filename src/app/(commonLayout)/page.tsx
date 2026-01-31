import BlogCard from "@/components/modules/homepage/BlogCard";

import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";
// import { userService } from "@/services/user.service";


export default async function Home() {
    // const {data} = await userService.getSession()
    const {data} = await blogService.getBlogPost(
      {
        isFeatured:false,
      },
      {
        cache:'no-store'
      }
    )
 console.log('route home page ',data)
  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-6">
      
         
       {
        data?.data?.map((post:BlogPost) => (
          <BlogCard key={post.id} post={post}/>
        ))
       }

    </div>
  );
}

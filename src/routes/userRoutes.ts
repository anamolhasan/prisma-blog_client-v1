import { Route } from "@/types";

export const userRoutes : Route[] = [
    {
      title: "Blog Management",
      items: [
        {
          title: "create Blog",
          url: "/dashboard/create-blog",
        },
        {
          title: "History",
          url: "/dashboard/history",
        },
        {
          title: "Details Blog",
          url: "/dashboard/details-blog",
        }

    
      ]
    }
]
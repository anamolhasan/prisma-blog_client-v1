// [
//     {
//       title: "Blog Management",
//       items: [
//         {
//           title: "create Blog",
//           url: "/create-blog",
//         }
    
//       ]
//     }
// ]


export interface Route {
    title: string;
    items: {
        title:string;
        url:string
    }[]
}
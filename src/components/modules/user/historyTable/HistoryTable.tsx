import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BlogPost } from "@/types";
import React from "react";

const HistoryTable = ({posts}:{posts:BlogPost[]}) => {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader className="bg-gray-800">
          <TableRow>
            <TableHead className="">No</TableHead>
            <TableHead className="">Title</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead className="text-center">View</TableHead>
            <TableHead className="text-center">Comments</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
         
          {
            posts.length === 0 ? (
                <TableRow>
                    <TableCell className="text-center py-8 text-muted-foreground">
                        No blog posts found
                    </TableCell>
                </TableRow>
            ):(
                posts.map((post, index) => (
                    <TableRow key={post.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>
                            <div className="max-w-[400px]">
                                <p className="font-medium">{post.title}</p>
                                <p className="text-sm text-muted-foreground line-clamp-1">{post.content}</p>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div>
                                {post.tags && post.tags.length > 0 ? (
                                    post.tags.map((tag, index) => (
                                        <Badge key={index} variant='secondary'>{tag}</Badge>
                                    ))
                                ):(
                                    <span className="text-sm text-muted-foreground">
                                        No tags
                                    </span>
                                )}
                            </div>
                        </TableCell>
                        <TableCell className="text-center">{post.views}</TableCell>
                        <TableCell className="text-center">
                            {post._count?.comment ?? 0}
                        </TableCell>
                    </TableRow>
                ))
            )
          }
        </TableBody>
      </Table>
     
    </div>
  );
};

export default HistoryTable;

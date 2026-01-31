import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { env } from '@/env'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'
import React from 'react'


const API_URL = env.API_URL;
const CreateBlogFormServer = () => {

    const createBlog = async (formData: FormData) => {
        'use server'

        const title = formData.get('title') as string;
        const content = formData.get('content') as string
        const tags = formData.get('tags') as string

        const blogData = {
            title,
            content,
            tags: tags.split(',').map((item) => item.trim()).filter((item) => item !== '')
        }

        const cookieStore = await cookies()

        const res = await fetch(`${API_URL}/posts`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                Cookie: cookieStore.toString()
            },
            body:JSON.stringify(blogData),
        })

        if(res.ok){
            revalidateTag('blogPosts','max')
        }
    }
  return (
    <Card className='max-w-4xl mx-auto'>
        <CardHeader>
            <CardTitle>Create Blog</CardTitle>
            <CardDescription>You can write your blog here</CardDescription>
        </CardHeader>
        <CardContent>
            <form id="blog-from" action={createBlog}>
                <FieldGroup>
                    <Field>
                        <FieldLabel>Title</FieldLabel>
                        <Input
                        type='text' 
                        id='title' 
                        name='title'
                        placeholder='Blog Title'
                        required
                        />
                    </Field>
                    <Field>
                        <FieldLabel>Content</FieldLabel>
                        <Textarea 
                        id='content' 
                        name='content'
                        placeholder='write your blog'
                        required
                        />
                    </Field>
                    <Field>
                        <FieldLabel>Tag (comma separated)</FieldLabel>
                        <Input 
                        id='tags' 
                        name='tags'
                        placeholder='nextjs, web'
                        />
                    </Field>
                </FieldGroup>
            </form>
        </CardContent>
        <CardFooter>
            <Button form='blog-from' type='submit' className='w-full'>
                Submit
            </Button>
        </CardFooter>
    </Card>
  )
}

export default CreateBlogFormServer
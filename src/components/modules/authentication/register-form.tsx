'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {useForm} from "@tanstack/react-form"
import * as z from "zod";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";


const formSchema = z.object({
  name: z.string().min(1, 'This field is required'),
  password: z.string().min(6, 'Minimum length is 8'),
  email: z.email()
})

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {

  // google login
  const handleGoogleProps = async  () => {
    const data = await authClient.signIn.social({
      provider:"google",
      callbackURL:'http://localhost:3000'
    })
    console.log(data)
  }

  // register logic
  const form = useForm({
    defaultValues:{
      name:'',
      email:'',
      password:'',
    },
    validators:{
      onSubmit:formSchema,
    },
    onSubmit: async ({value}) => {
      const toastId = toast.loading('Creating user')
      try {
        const {data, error} = await authClient.signUp.email(value)

        if(error){
          toast.error(error.message, {id:toastId})
          return;
        }
        toast.success('User Created Successfully', {id:toastId})
      } catch (error) {
        toast.error('Something went wrong, please try again.', {id:toastId})
      }
    }
  })
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="register-form" 
        onSubmit={(e)=>{
          e.preventDefault();
          form.handleSubmit()
        }}
        >

          <FieldGroup>
            {/* for name */}
            <form.Field
            name="name"
            children={(field) => {
             const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
             return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                <Input 
                 type="text"
                 id={field.name}
                 name={field.name}
                 value={field.state.value}
                 onChange={(e)=> field.handleChange(e.target.value)}
                />
                {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
              </Field>
             )
            }}
             />

             {/* email */}
            <form.Field
            name="email"
            children={(field) => {
             const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
             return (
              <Field >
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input 
                 type="email"
                 id={field.name}
                 name={field.name}
                 value={field.state.value}
                 onChange={(e)=> field.handleChange(e.target.value)}
                />
                {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
              </Field>
             )
            }}
             />

             {/* for password */}
            <form.Field
            name="password"
            children={(field) => {
             const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
             return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                <Input 
                 type="Password"
                 id={field.name}
                 name={field.name}
                 value={field.state.value}
                 onChange={(e)=> field.handleChange(e.target.value)}
                />
                {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
              </Field>
             )
            }}
             />


          </FieldGroup>          
        </form>
         
      </CardContent>
      <CardFooter>
        <FieldGroup>
              <Field>
                <Button form="register-form" type="submit">Create Account</Button>
                <Button 
                onClick={()=>handleGoogleProps()} variant="outline" 
                type="button"
                className=""
                >
                  Continue with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <Link href="/login">Log In</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
      </CardFooter>
    </Card>
  );
}

"use client"

import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'
import { Loader2, Loader2Icon } from 'lucide-react'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

const formSchema = z.object({
  username: z.string().min(2, {
    message: "username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
})


const RegisterPage = () => {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username:"",
      email: "",
      password: ""
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setIsLoading(true)

    console.log(data)
    setIsLoading(false)
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-4/5">
      <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username john" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="deneme@email.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="********" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {isLoading ? (
            <>
              <Loader2 size={20} className='animate-spin' /> Loading

            </>
          ) :
            <>
              Register
            </>
          }
        </Button>
      </form>
      <div className='mt-8'>
        <Label className='flex flex-col items-center'>
          Allready account
        </Label>
        <Link href="/auth/login" className='mt-10 text-slate-500'>
        Click here to Login
        </Link>


      </div>
    </Form>
  )
}

export default RegisterPage
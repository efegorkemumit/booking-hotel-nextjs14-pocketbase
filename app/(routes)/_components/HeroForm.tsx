
"use client"

import React from 'react'
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
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from '@/lib/utils'
import { format } from "date-fns"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


const formSchema = z.object({
    arrivalDate: z.date().refine(date => !!date, { message: "Arrival date is required" }),
    departureDate: z.date().refine(date => !!date, { message: "Departure date is required" }),
    adults: z.string().nonempty({ message: "Select number of adults" }),
    children: z.string().nonempty({ message: "Select number of children" }),
  })

 

const HeroForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          arrivalDate: null,
          departureDate: null,
          adults: '1',
          children: '0',
        },
      })

      const onSubmit = (data: z.infer<typeof formSchema>) =>{
        console.log(data)
      }

  return (
    <div className='absolute -bottom-28 lg:bottom-[-190px] w-full flex justify-center'>
        <div className='mx-auto container justify-center flex'> 
            <div className='bg-gray-800 bg-opacity-75 p-6 w-full max-w-5xl shadow-lg rounded-md'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <FormField
                    control={form.control}
                    name="arrivalDate"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className='validationLabel'>Arrival Date</FormLabel>
                        <FormControl>
                            <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                )}
                                >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={(date)=>field.onChange(date)}
                                initialFocus
                                />
                            </PopoverContent>
                            </Popover>
                        </FormControl>
                         <FormMessage  className='validationError'/>
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="departureDate"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className='validationLabel'>Departure Date</FormLabel>
                        <FormControl>
                            <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                )}
                                >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={(date)=>field.onChange(date)}
                                initialFocus
                                />
                            </PopoverContent>
                            </Popover>
                        </FormControl>
                         <FormMessage  className='validationError'/>
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="adults"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className='validationLabel'>Adults</FormLabel>
                        <FormControl>
                        <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger className="w-full]">
                                <SelectValue placeholder="Adults" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4</SelectItem>
                                <SelectItem value="5">5</SelectItem>
                                <SelectItem value="6">6</SelectItem>
                            </SelectContent>
                            </Select>
                            
                        </FormControl>
                         <FormMessage  className='validationError'/>
                        </FormItem>
                    )}
                    />
                     <FormField
                    control={form.control}
                    name="children"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className='validationLabel'>Children</FormLabel>
                        <FormControl>
                        <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger className="w-full]">
                                <SelectValue placeholder="Adults" />
                            </SelectTrigger>
                            <SelectContent>
                            <SelectItem value="0">0</SelectItem>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4</SelectItem>
                                <SelectItem value="5">5</SelectItem>
                                <SelectItem value="6">6</SelectItem>
                            </SelectContent>
                            </Select>
                            
                        </FormControl>
                         <FormMessage  className='validationError'/>
                        </FormItem>
                    )}
                    />
                    <Button variant="mybutton" type="submit" className=' col-span-1 md:col-span-4'>Search</Button>
                </form>
                </Form>
            </div>
        </div> 
    </div>
  )
}

export default HeroForm
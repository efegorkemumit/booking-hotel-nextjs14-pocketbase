
"use client"

import React, { useEffect, useState } from 'react'
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
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useToast } from '@/components/ui/use-toast'
import { pb } from '@/lib/pocketbase'


interface ReservationFormProps {
    roomId: string
}

const today = new Date();
today.setHours(0, 0, 0, 0);

const formSchema = z.object({
    guestFullname: z.string().min(2, { message: "Guest Fullname must be at least 2 characters." }),
    guestEmail: z.string().email({ message: "Invalid email address." }),
    arrivalDate: z.date().min(today, { message: "Arrival date must be after today." }),
    departureDate: z.date().min(today, { message: "Departure date must be after today." }),
    adults: z.string().nonempty({ message: "Select number of adults" }),
    children: z.string().nonempty({ message: "Select number of children" }),
}).refine(data => data.arrivalDate < data.departureDate, {
    message: "Arrival date must be before departure date",
    path: ["departureDate"]
});


const ReservationForm = ({ roomId }: ReservationFormProps) => {

    const [user, setUser] = useState(null);
    const router = useRouter();
    const { toast } = useToast()
    useEffect(() => {
        const fetchUser = async () => {
            const authData = localStorage.getItem("pocketbase_auth");
            if (authData) {
                const { token, model } = JSON.parse(authData);
                setUser(model)
            }
        }
        fetchUser();
    }, [])


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            arrivalDate: null,
            departureDate: null,
            adults: '1',
            children: '0',
            guestEmail: "",
            guestFullname: "",
        },
    })

    const onSubmit = async(data: z.infer<typeof formSchema>) => {

        if (!user) {
            return null;
            toast({
                title: "User Login required",
                variant: "destructive"

            })

        }

        try {

            const reservationdata = {
                room: roomId,
                user: user?.id ,
                guest_fullname: data.guestFullname,
                guest_email: data.guestEmail,
                arrival_date: data.arrivalDate.toISOString(),
                departure_date: data.departureDate.toISOString(),
                adults: data.adults,
                children: data.children
            };

            const record = await pb.collection('reservations').create(reservationdata);
            toast({
                title: "Reservation Created",
                variant: "success"

            })



        } catch (error) {
            toast({
                title: "Something went wrong",
                variant: "destructive"

            })
        }
    }

    if (!user) {
        return (
            <div className='p-6 bgone mt-5 rounded-lg overflow-hidden text-center'>

                <span className='ml-2'> Login for Reservation </span>
                <Link href="/auth/login">
                    Login Page
                </Link>

            </div>
        )
    }

    return (
        <div className='p-6'>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-4 gap-4">


                    <div className='col-span-1 md:col-span-2'>


                        <FormField
                            control={form.control}
                            name="guestFullname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='validationLabel'>Guest FullName</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Guest Fullname" {...field} />
                                    </FormControl>

                                    <FormMessage className='validationError' />
                                </FormItem>
                            )}
                        />

                    </div>

                    <div className='col-span-1 md:col-span-2'>


                        <FormField
                            control={form.control}
                            name="guestEmail"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='validationLabel'>Guest Email</FormLabel>
                                    <FormControl>
                                        <Input type='email' placeholder="Guest Email" {...field} />
                                    </FormControl>

                                    <FormMessage className='validationError' />
                                </FormItem>
                            )}
                        />


                    </div>

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
                                                onSelect={(date) => field.onChange(date)}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </FormControl>
                                <FormMessage className='validationError' />
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
                                                onSelect={(date) => field.onChange(date)}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </FormControl>
                                <FormMessage className='validationError' />
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
                                <FormMessage className='validationError' />
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
                                <FormMessage className='validationError' />
                            </FormItem>
                        )}
                    />
                    <Button variant="mybutton" type="submit" className=' col-span-1 md:col-span-4'>Reservation</Button>
                </form>
            </Form>
        </div>
    )
}

export default ReservationForm
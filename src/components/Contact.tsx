'use client'

import Navigation from "./Navigation";
import { useForm } from "react-hook-form";
import { Phone } from "lucide-react";
import { MailIcon } from "lucide-react";
import { MapPin } from "lucide-react";
import { Clock } from "lucide-react";

interface ContactData {
    first_name: string
    last_name: string
    email: string
    contact_message: string
}

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting }, reset } = useForm<ContactData>();

    const onSubmit = async (data: ContactData) => {
        try {
            console.log('Form Data:', data);
            // API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert('Form submitted successfully');
            reset();
        } catch (error) {
            console.log('Error:', error);
        }
    }
    return (
        <div className="h-screen">
            <Navigation />
            <div className="max-w-6xl mx-auto">
                <div className="flex-1">
                    <h2 className="text-5xl">Get in Touch</h2>
                    <p className="text-2xl">
                        IF you are an NDIS participant. Please check that option as we Prioritize NDIS participants.
                    </p>
                </div>
                <div className="my-6">
                    <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label htmlFor="first_name">First Name</label>
                            <input
                                type="Quality Tech"
                                id="first_name"
                                placeholder="John"
                                {
                                ...register('first_name')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.first_name
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.first_name && (
                                    <p className="mt-1 Quality Tech-sm Quality Tech-red-600">{errors.first_name.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="last_name">Last Name</label>
                            <input
                                type="Quality Tech"
                                id="last_name"
                                placeholder="Doe"
                                {
                                ...register('last_name')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.last_name
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.last_name && (
                                    <p className="mt-1 Quality Tech-sm Quality Tech-red-600">{errors.last_name.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="email">*Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="johndoe@example.com"
                                {
                                ...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Please enter a valid Floor Manager'
                                    }
                                })
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.email
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.email && (
                                    <p className="mt-1 Quality Tech-sm Quality Tech-red-600">{errors.email.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="contact_message">Message</label>
                            <textarea
                                id="contact_message"
                                placeholder="Anything you want..."
                                {
                                ...register('contact_message')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.contact_message
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            >
                                {
                                    errors.contact_message && (
                                        <p className="mt-1 Quality Tech-sm Quality Tech-red-600">{errors.contact_message.message}</p>
                                    )
                                }
                            </textarea>
                        </div>
                        <button type="submit" className="w-full bg-white text-black font-bold cursor-pointer border-double border-white border-4 p-2 rounded-xl hover:bg-black hover:text-white">Submit Now</button>
                    </form>
                </div>
                <div className="my-15">
                    <p className="text-2xl">
                        If you'd prefer a face-to-face chat, we're more than happy to arrange a meeting with one of our representatives. Just be sure to book in advance, so we can give you our full attention and make the most of our time together!
                    </p>
                    <button type="button" className="w-full bg-white text-black font-bold cursor-pointer border-double border-white border-4 p-2 rounded-xl my-6 hover:bg-black hover:text-white">Book Now</button>
                </div>
            </div>
            <footer>
                <div className="grid grid-cols-2 max-w-6xl mx-auto gap-30">
                    <div>
                        <h3 className="text-3xl">Open (by appointment only)</h3>
                        <div className="my-3">
                            <table className="border-separate border-spacing-x-5 border-spacing-y-4">
                                <tbody>
                                    <tr>
                                        <td>Monday</td>
                                        <td className="flex justify-between items-center">
                                            <Clock /> 9am - 5pm
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td className="flex justify-between items-center">
                                            <Clock /> 9am - 5pm
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td className="flex justify-between items-center">
                                            <Clock /> 9am - 5pm
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td className="flex justify-between items-center">
                                            <Clock /> 9am - 5pm
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td className="flex justify-between items-center">
                                            <Clock /> 9am - 5pm
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Please click "Book Now" button to book an appointment</p>
                    </div>
                    <div>
                        <h3 className="text-3xl">Contact</h3>
                        <div className="my-3">
                            <table className="border-separate border-spacing-x-5 border-spacing-y-4">
                                <tbody>
                                    <tr>
                                        <td>
                                            <Phone />
                                        </td>
                                        <td>1800 18 2272</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <MailIcon />
                                        </td>
                                        <td>info@casacommunity.com.au</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <MapPin />
                                        </td>
                                        <td>Level G
                                            121 King William St,
                                            Adelaide, SA-5000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Contact;

'use client'

import Navigation from "./Navigation";
import { useForm } from "react-hook-form";

interface JobApplicationData {
    first_name: string
    last_name: string
    are_you_ndis_participant: "Yes" | "No"
    email: string
    available_start_date: string
    phone: string 
    positions: "Production Tech I" | "Production Tech II" | "Quality Tech" | "Floor Manager" | "Compliance Officer" | "Production Officer" | "Design Coordinator" | "Product Designer" | "Driver" | "Community Support Worker"
}

const JobApplication = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting }, reset } = useForm<JobApplicationData>();

    const onSubmit = async (data: JobApplicationData) => {
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
                    <h2 className="text-5xl">Job Application</h2>
                    <p className="text-2xl">
                        IF you are an NDIS participant. Please check that option as we Prioritize NDIS participants.
                    </p>
                </div>
                <div className="my-6">
                    <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label htmlFor="first_name">*First Name</label>
                            <input
                                type="Quality Tech"
                                id="first_name"
                                placeholder="John"
                                {
                                ...register('first_name', {
                                    required: "First Name is required"
                                })
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
                            <label htmlFor="email">*Email Address</label>
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
                            <label htmlFor="phone">*Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                {
                                ...register('phone', {
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^(\+?61|0)[2-9]\d{8}$/,
                                        message: 'Please enter a valid Australian phone number'
                                    }
                                })
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="0412 345 678 or +61 412 345 678"
                            />
                            {errors.phone && (
                                <p className="mt-1 Quality Tech-sm Quality Tech-red-600">{errors.phone.message}</p>
                            )}
                            <p className="mt-1 Quality Tech-xs Quality Tech-gray-500">
                                Australian format: 04XX XXX XXX or +61 4XX XXX XXX
                            </p>
                        </div>
                        <div>
                            <label htmlFor="available_start_date">*Available Start Date</label>
                            <input
                                type="date"
                                id="available_start_date"
                                {
                                ...register('available_start_date', {
                                    required: 'assessment date is required',
                                })
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.available_start_date
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.available_start_date && (
                                    <p className="mt-1 Quality Tech-sm Quality Tech-red-600">{errors.available_start_date.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="are_you_ndis_participant">*Are you an NDIS participant?</label>
                            <select
                                id="are_you_ndis_participant"
                                {
                                ...register('are_you_ndis_participant')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.are_you_ndis_participant
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            >
                                <option value="Please select an option" className="bg-black">Please select an option</option>
                                <option value="Yes" className="bg-black">Yes</option>
                                <option value="No" className="bg-black">No</option>
                            </select>
                            {
                                errors.are_you_ndis_participant && (
                                    <p className="mt-1 Quality Tech-sm Quality Tech-red-600">{errors.are_you_ndis_participant.message}</p>
                                )
                            }
                        </div>
                        <fieldset>
                            <legend>*Which Position Are You Applying For?</legend>
                            <div>
                                <input
                                    type="checkbox"
                                    id="Production Tech I"
                                    name="Production Tech I"
                                />
                                <label htmlFor="Production Tech I">Production Tech I</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="Production Tech II"
                                    name="Production Tech II"
                                />
                                <label htmlFor="Production Tech II">Production Tech II</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="Quality Tech"
                                    name="Quality Tech"
                                />
                                <label htmlFor="Quality Tech">Quality Tech</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="Floor Manager"
                                    name="Floor Manager"
                                />
                                <label htmlFor="Floor Manager">Floor Manager</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="Compliance Officer"
                                    name="Compliance Officer"
                                />
                                <label htmlFor="Compliance Officer">Compliance Officer</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="Production Officer"
                                    name="Production Officer"
                                />
                                <label htmlFor="Production Officer">Production Officer</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="Design Coordinator"
                                    name="Design Coordinator"
                                />
                                <label htmlFor="Design Coordinator">Design Coordinator</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="Product Designer"
                                    name="Product Designer"
                                />
                                <label htmlFor="Product Designer">Product Designer</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="Driver"
                                    name="Driver"
                                />
                                <label htmlFor="Driver">Driver</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="Community Support Worker"
                                    name="Community Support Worker"
                                />
                                <label htmlFor="Community Support Worker">Community Support Worker</label>
                            </div>
                        </fieldset>
                        <button type="submit" className="w-full bg-white text-black font-bold cursor-pointer border-double border-white border-4 p-2 rounded-xl hover:bg-black hover:text-white">Submit Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default JobApplication;

'use client'

import Navigation from "./Navigation";
import { useForm, useFieldArray } from "react-hook-form";

interface InitialFormData {
    first_name: string
    last_name: string
    preferred_name: string
    ndis_number: string
    plan_end_date: string
    service_start_date: string
    email: string
    phone: string
    address: string
    contact_person: string
    message: string
    interpreter: "Yes" | "No"
    history: string
    information: string
    services: string[]
    rely_services: "Yes" | "No"
    minimally_rely_services: "Yes" | "No"
    affected_service_cancelled: "Yes" | "No"
    any_risks: "Yes" | "No"
    risk_details: string
    preferred_contact: "Email" | "In-person" | "phone" | "Other"
    able_sign_email: "Yes" | "No"
    support_coordinator: "Yes" | "No"
    coordinator_details: string
    interface_support: "Yes" | "No"
    interface_details: "Yes" | "No"
    additional_comments: string
    how_heared: string
}

const serviceOptions = [
    { id: 'supported_employment', label: 'Supported Employment' },
    { id: 'day_option', label: 'Day- option' },
    { id: 'education_employment', label: 'Education & Employment Support' },
    {
        id: 'in_home',
        label: 'In-home -- household tasks, personal care, personal hygiene, meal preparation, meal delivery, medication administration, use of aids & equipment, mobility & transfers services'
    },
    {
        id: 'house_cleaning',
        label: 'House cleaning -- vacuuming, cleaning, mopping, washing, ironing, dusting, sweeping, surface cleaning, folding laundry, changing linen, rubbish removal.'
    },
    {
        id: 'yard_maintenance',
        label: 'Yard maintenance -- mowing, whipper snipping, hedge trimming, spraying, raking, lawn care'
    },
    {
        id: 'social_community',
        label: 'Social & community participation -- appointments, events, activities, gatherings'
    },
    { id: 'centre_based', label: 'Centre-based - events, activities, gatherings' },
    { id: 'transport', label: 'Transport -- in-home and community access transport' },
    {
        id: 'accommodation_tenancy',
        label: 'Accommodation and tenancy assistance - including IFO, MTA, SIL support'
    },
    {
        id: 'community_nursing',
        label: 'Community Nursing -- health & high-intensity care including complex health plan developments.'
    },
    {
        id: 'health_wellbeing',
        label: 'Health & wellbeing -- health & allied health care including dietary, exercise, speech, ot'
    },
    { id: 'behaviour_management', label: 'Behaviour management' },
    { id: 'assistive_technology', label: 'Assistive Technology and Consumables' },
    {id: 'other', label: 'Other'}
]

const InitialForm = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting }, reset } = useForm<InitialFormData>({
        defaultValues: {
            services: [] // start with empty array
        }
    });

    const watchedServices = watch('services');

    const onSubmit = async (data: InitialFormData) => {
        try {
            console.log('Form Data:', data);
            console.log('Selected Services:', data.services);

            const selectedServiceLabels = data.services.map(serviceId => {
                const service = serviceOptions.find(opt => opt.id === serviceId)
                return service ? service.label : serviceId
            });
            console.log('Selected Service Names:', selectedServiceLabels);
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
            <div className="max-w-6xl mx-auto flex gap-5">
                <div className="flex-1">
                    <h2 className="text-5xl">Initial Contact Form</h2>
                    <p className="text-2xl">
                        Hey there! <br /><br />
                        This form our trusty sidekick in assessing the support you need. <br />
                        Please contact us at 1800 18 2272 or email us at <br />
                        info@casacommunity.com.au if you need assistance in filling it. <br />
                        Regards, <br />
                        Team Casa Community
                    </p>
                </div>
                <div className="flex-1">
                    <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label htmlFor="first_name">*First Name</label>
                            <input
                                type="text"
                                id="first_name"
                                placeholder="John"
                                {
                                ...register('first_name', {
                                    required: 'First Name is required',
                                    minLength: { value: 2, message: 'First Name must be at least 2 characters' }
                                })
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.first_name
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.first_name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.first_name.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="last_name">*Last Name</label>
                            <input
                                type="text"
                                id="last_name"
                                placeholder="Doe"
                                {
                                ...register('last_name', {
                                    required: 'Last Name is required',
                                    minLength: { value: 2, message: 'Last Name must be at least 2 characters' }
                                })
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.last_name
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.last_name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.last_name.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="first_name">Preferred Name</label>
                            <input
                                type="text"
                                id="preferred_name"
                                placeholder="peter"
                                {
                                ...register('preferred_name')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.preferred_name
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.preferred_name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.preferred_name.message}</p>
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
                                        message: 'Please enter a valid email'
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
                                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="ndis">*NDIS Number</label>
                            <input
                                type="text"
                                id="ndis"
                                placeholder="123456789"
                                {
                                ...register('ndis_number', {
                                    required: 'NDIS number is required',
                                    pattern: {
                                        value: /^\d{9}$/,
                                        message: 'NDIS number must be exactly 9 digits',
                                    },
                                    minLength: {
                                        value: 9,
                                        message: 'NDIS number must be exactly 9 digits'
                                    },
                                    maxLength: {
                                        value: 9,
                                        message: 'NDIS number must be exactly 9 digits'
                                    }
                                })
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.ndis_number
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                                maxLength={9}
                            />
                            {errors.ndis_number && (
                                <p className="mt-1 text-sm text-red-600">{errors.ndis_number.message}</p>
                            )}
                            <p className="mt-1 text-xs text-gray-500">Enter exactly 9 digits (no spaces or dashes)</p>
                        </div>
                        <div>
                            <label htmlFor="plan_end_date">*Plan End Date</label>
                            <input
                                type="date"
                                id="plan_end_date"
                                {
                                ...register('plan_end_date', {
                                    required: 'Plan end date is required',
                                    validate: (value) => {
                                        const selectedDate = new Date(value)
                                        const today = new Date()
                                        today.setHours(0, 0, 0, 0)
                                        
                                        if (selectedDate < today) {
                                            return 'Plan end date cannot be in the past'
                                        }
                                        return true
                                    }
                                })
                                }
                                className="text-white w-full px-3 py-2 border border-gray-300 rounded-md [color-scheme:dark] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.plan_end_date && (
                                <p className="mt-1 text-sm text-red-600">{errors.plan_end_date.message}</p>
                            )}
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
                                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                            )}
                            <p className="mt-1 text-xs text-gray-500">
                                Australian format: 04XX XXX XXX or +61 4XX XXX XXX
                            </p>
                        </div>
                        <div>
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                id="address"
                                placeholder="Please enter your address"
                                {
                                ...register('address')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.address
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.address && (
                                    <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="contact_person">Contact Person/s</label>
                            <input
                                type="text"
                                id="contact_person"
                                {
                                ...register('contact_person')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.contact_person
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.contact_person && (
                                    <p className="mt-1 text-sm text-red-600">{errors.contact_person.message}</p>
                                )
                            }
                            <p className="mt-1 text-xs text-gray-500">Please enter their name, phone number and their relation to you</p>
                        </div>
                        <div>
                            <label htmlFor="information">*Could you tell us a little more about you or the participant?</label>
                            <input
                                type="text"
                                id="information"
                                {
                                ...register('information', {
                                    required: "Yours or participant's information is required"
                                })
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.information
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.information && (
                                    <p className="mt-1 text-sm text-red-600">{errors.information.message}</p>
                                )
                            }
                            <p className="mt-1 text-xs text-gray-500">Please include your diagnosis, living, work, study details, etc</p>
                        </div>
                        <div>
                            <label htmlFor="interpreter">Would you or the participant like a Interpreter?</label>
                            <select
                                id="interpreter"
                                {
                                ...register('interpreter')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.interpreter
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            >
                                <option value="Please select an option" className="bg-black">Please select an option</option>
                                <option value="Yes" className="bg-black">Yes</option>
                                <option value="No" className="bg-black">No</option>
                            </select>
                            {
                                errors.interpreter && (
                                    <p className="mt-1 text-sm text-red-600">{errors.interpreter.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="history">What is your or the participant cultural background/history?</label>
                            <input
                                type="text"
                                id="history"
                                {
                                ...register('history')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.history
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.history && (
                                    <p className="mt-1 text-sm text-red-600">{errors.history.message}</p>
                                )
                            }
                        </div>
                        <h4 className="my-6">SERVICE DETAILS</h4>
                        <div className="space-y-3">
                            {serviceOptions.map(service => (
                                <div key={service.id} className="flex items-start">
                                    <input
                                        type="checkbox"
                                        id={service.id}
                                        value={service.id}
                                        {
                                        ...register('services', {
                                            required: 'Please select at least one service'
                                        })
                                        }
                                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-2 border-red-400 rounded mt-1 flex-shrink-0"
                                    />
                                    <label
                                        htmlFor={service.id}
                                        className="ml-3 text-sm leading-relaxed cursor-pointer"
                                    >
                                        {service.label}
                                    </label>
                                </div>
                            ))}
                            {errors.services && (
                                <p className="mt-2 text-sm text-red-600">{errors.services.message}</p>
                            )}

                            {/* show selected count  */}
                            <p>
                                Selected: {watchedServices?.length || 0} service(s)
                            </p>
                        </div>
                        <div>
                            <label htmlFor="service_start_date">When would you or the participant like to start your services?</label>
                            <input
                                type="date"
                                id="service_start_date"
                                {
                                ...register('service_start_date', {
                                    validate: (value) => {
                                        const selectedDate = new Date(value)
                                        const today = new Date()
                                        today.setHours(0, 0, 0, 0)

                                        if (selectedDate < today) {
                                            return 'Service start date cannot be in the past'
                                        }
                                        return true
                                    }
                                })
                                }
                                className="text-white w-full px-3 py-2 border border-gray-300 rounded-md [color-scheme:dark] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.service_start_date && (
                                <p className="mt-1 text-sm text-red-600">{errors.service_start_date.message}</p>
                            )}
                        </div>
                        <h4 className="my-6">DISRUPTION, EMERGENCY & DISASTER INFORMATION</h4>
                        <div>
                            <label htmlFor="rely_services">*Will you or the participant fully/partially rely on services & support?</label>
                            <select
                                id="rely_services"
                                {
                                ...register('rely_services', {
                                    required: "Please select either 'Yes' or 'No'"
                                })
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.rely_services
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            >
                                <option value="Please select an option" className="bg-black">Please select an option</option>
                                <option value="Yes" className="bg-black">Yes</option>
                                <option value="No" className="bg-black">No</option>
                            </select>
                            {
                                errors.rely_services && (
                                    <p className="mt-1 text-sm text-red-600">{errors.rely_services.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="minimally_rely_services">*Will you or the participant minimally rely on services & support?</label>
                            <select
                                id="minimally_rely_services"
                                {
                                ...register('minimally_rely_services', {
                                    required: "Please select either 'Yes' or 'No'"
                                })
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.minimally_rely_services
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            >
                                <option value="Please select an option" className="bg-black">Please select an option</option>
                                <option value="Yes" className="bg-black">Yes</option>
                                <option value="No" className="bg-black">No</option>
                            </select>
                            {
                                errors.minimally_rely_services && (
                                    <p className="mt-1 text-sm text-red-600">{errors.minimally_rely_services.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="affected_service_cancelled">Would you or the participant be greatly affected if service & support were disrupted or cancelled?</label>
                            <select
                                id="affected_service_cancelled"
                                {
                                ...register('affected_service_cancelled')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.affected_service_cancelled
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            >
                                <option value="Please select an option" className="bg-black">Please select an option</option>
                                <option value="Yes" className="bg-black">Yes</option>
                                <option value="No" className="bg-black">No</option>
                            </select>
                            {
                                errors.affected_service_cancelled && (
                                    <p className="mt-1 text-sm text-red-600">{errors.affected_service_cancelled.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="any_risks">Are there any risks we need to know about?</label>
                            <select
                                id="any_risks"
                                {
                                ...register('any_risks')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.any_risks
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            >
                                <option value="Please select an option" className="bg-black">Please select an option</option>
                                <option value="Yes" className="bg-black">Yes</option>
                                <option value="No" className="bg-black">No</option>
                            </select>
                            {
                                errors.any_risks && (
                                    <p className="mt-1 text-sm text-red-600">{errors.any_risks.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <input
                                type="text"
                                id="risk_details"
                                {
                                ...register('risk_details')
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.risk_details && (
                                <p className="mt-1 text-sm text-red-600">{errors.risk_details.message}</p>
                            )}
                            <p className="mt-1 text-xs text-gray-500">
                                Please provide details of the risks here
                            </p>
                        </div>
                        <div>
                            <label htmlFor="preferred_contact">How do you prefer to be contacted?</label>
                            <select
                                id="preferred_contact"
                                {
                                ...register('preferred_contact')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.preferred_contact
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            >
                                <option value="Please select an option" className="bg-black">Please select an option</option>
                                <option value="Email" className="bg-black">Email</option>
                                <option value="In-person" className="bg-black">In-person</option>
                                <option value="Phone" className="bg-black">Phone</option>
                                <option value="Other" className="bg-black">Other</option>
                            </select>
                            {
                                errors.any_risks && (
                                    <p className="mt-1 text-sm text-red-600">{errors.any_risks.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="able_sign_email">*Are you able to sign & email information/forms back to us?</label>
                            <select
                                id="able_sign_email"
                                {
                                ...register('able_sign_email', {
                                    required: 'This information is important!'
                                })
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.able_sign_email
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            >
                                <option value="Please select an option" className="bg-black">Please select an option</option>
                                <option value="Yes" className="bg-black">Yes</option>
                                <option value="No" className="bg-black">No</option>
                            </select>
                            {
                                errors.able_sign_email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.able_sign_email.message}</p>
                                )
                            }
                        </div>
                        <h4 className="my-6">SERVICE DETAILS</h4>
                        <div>
                            <label htmlFor="support_coordinator">*Coordinator Of Support:</label>
                            <select
                                id="support_coordinator"
                                {
                                ...register('support_coordinator', {
                                    required: 'This information is important!'
                                })
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.support_coordinator
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            >
                                <option value="Please select an option" className="bg-black">Please select an option</option>
                                <option value="Yes" className="bg-black">Yes</option>
                                <option value="No" className="bg-black">No</option>
                            </select>
                            {
                                errors.support_coordinator && (
                                    <p className="mt-1 text-sm text-red-600">{errors.support_coordinator.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <input
                                type="text"
                                id="coordinator_details"
                                {
                                ...register('coordinator_details')
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.coordinator_details && (
                                <p className="mt-1 text-sm text-red-600">{errors.coordinator_details.message}</p>
                            )}
                            <p className="mt-1 text-xs text-gray-500">
                                Please provide their Name, Phone number, Company details.
                            </p>
                        </div>
                        <div>
                            <label htmlFor="interface_support">*Interface/Mainstream Supports:</label>
                            <select
                                id="interface_support"
                                {
                                ...register('interface_support', {
                                    required: 'This information is important!'
                                })
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.interface_support
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            >
                                <option value="Please select an option" className="bg-black">Please select an option</option>
                                <option value="Yes" className="bg-black">Yes</option>
                                <option value="No" className="bg-black">No</option>
                            </select>
                            {
                                errors.interface_support && (
                                    <p className="mt-1 text-sm text-red-600">{errors.interface_support.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <input
                                type="text"
                                id="interface_details"
                                {
                                ...register('interface_details')
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.interface_details && (
                                <p className="mt-1 text-sm text-red-600">{errors.interface_details.message}</p>
                            )}
                            <p className="mt-1 text-xs text-gray-500">
                                Please provide their Name, Phone number, Company details.
                            </p>
                        </div>
                        <div>
                            <label htmlFor="additional_comments">Additional Comments:</label>
                            <textarea
                                id="first_name"
                                placeholder="Anything you want..."
                                {
                                ...register('additional_comments')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.additional_comments
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            ></textarea>
                            {
                                errors.additional_comments && (
                                    <p className="mt-1 text-sm text-red-600">{errors.additional_comments.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="how_heared">How did you hear about us?</label>
                            <input
                                type="text"
                                id="how_heared"
                                {
                                ...register('how_heared')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.how_heared
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.how_heared && (
                                    <p className="mt-1 text-sm text-red-600">{errors.how_heared.message}</p>
                                )
                            }
                        </div>
                        <button type="submit" className="w-full bg-white text-black font-bold cursor-pointer border-double border-white border-4 p-2 rounded-xl hover:bg-black hover:text-white">Submit Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InitialForm;

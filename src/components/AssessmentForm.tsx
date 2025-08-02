'use client'

import Navigation from "./Navigation";
import { useForm } from "react-hook-form";

interface AssessmentFormData {
    assessor_name: string
    assessment_date: string
    first_name: string
    last_name: string
    ndis_number: string
    birth_date: string
    emergency_contact_one: string
    emergency_contact_two: string
    gp_details: string
    invoices_sent: string
    invoices_sent_email: string
    preferred_communication_method: "Face to Face" | "Phone Call" | "Text" | "Email" | "Contact with my advocate/representative"
    summary_participant_value_belief: string
    summary_participant_interest: string 
    summary_participant_strength: string
    summary_participant_likes_dislikes: string 
    disability_types: string 
    current_health_status: string 
    family_informal_support_status: string 
    assistance_type: string 
    preferred_support_worker_type: string 
    summary_participant_corner: string 
    summary_participant_information: string 
    participant_goal: string 
    participant_action_plan: string 
    participant_target_date: string 
    participant_responsibility: string
    casa_community_responsiblity: string 
    risk: string
    risk_rate: "Low" | "Medium" | "High"
    treatment_control_measures: string 
    responsibility: string 
    participant_representative_name: string 
    participant_representative_signature: string
    casa_official_name: string 
    casa_official_signature: string 
}

const AssessmentForm = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting }, reset } = useForm<AssessmentFormData>();

    const onSubmit = async (data: AssessmentFormData) => {
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
                    <h2 className="text-5xl">Participant Assessment & Support Plan</h2>
                    <p className="text-2xl">
                        The invoices_sent provided in this form will help us asses the appropriate support required for the participant.
                    </p>
                </div>
                <div className="my-6">
                    <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label htmlFor="assessor_name">*Name of the assesor</label>
                            <input
                                type="text"
                                id="assessor_name"
                                {
                                ...register('assessor_name', {
                                    required: 'Assessor Name is required',
                                    minLength: { value: 2, message: 'Assessor Name must be at least 2 characters' }
                                })
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.assessor_name
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.assessor_name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.assessor_name.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="assessment_date">*Date of the assessment</label>
                            <input
                                type="date"
                                id="assessment_date"
                                {
                                ...register('assessment_date', {
                                    required: 'assessment date is required',
                                })
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.assessment_date
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.assessment_date && (
                                    <p className="mt-1 text-sm text-red-600">{errors.assessment_date.message}</p>
                                )
                            }
                        </div>
                        <h4 className="my-6 font-bold">PARTICIPANT'S DETAILS</h4>
                        <div>
                            <label htmlFor="first_name">First Name</label>
                            <input
                                type="text"
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
                                    <p className="mt-1 text-sm text-red-600">{errors.first_name.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="last_name">Last Name</label>
                            <input
                                type="text"
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
                                    <p className="mt-1 text-sm text-red-600">{errors.last_name.message}</p>
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
                            <label htmlFor="birth_date">Date of birth</label>
                            <input
                                type="date"
                                id="birth_date"
                                {
                                ...register('birth_date')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.birth_date
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.birth_date && (
                                    <p className="mt-1 text-sm text-red-600">{errors.birth_date.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="emergency_contact_one">*Emergency Contact Person 1</label>
                            <input
                                type="text"
                                id="emergency_contact_one"
                                placeholder="Provide Name and Number"
                                {
                                ...register('emergency_contact_one')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.emergency_contact_one
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.emergency_contact_one && (
                                    <p className="mt-1 text-sm text-red-600">{errors.emergency_contact_one.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="emergency_contact_two">*Emergency Contact Person 2</label>
                            <input
                                type="text"
                                id="emergency_contact_two"
                                placeholder="Provide Name and Number"
                                {
                                ...register('emergency_contact_two')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.emergency_contact_two
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.emergency_contact_two && (
                                    <p className="mt-1 text-sm text-red-600">{errors.emergency_contact_two.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="gp_details">GP details</label>
                            <input
                                type="text"
                                id="gp_details"
                                placeholder="Provide Name and Number"
                                {
                                ...register('gp_details')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.gp_details
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.gp_details && (
                                    <p className="mt-1 text-sm text-red-600">{errors.gp_details.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="invoices_sent">*Send Invoices to:</label>
                            <input
                                type="text"
                                id="invoices_sent"
                                placeholder="Provide Name and Number"
                                {
                                ...register('invoices_sent', {
                                    required: "This information is required"
                                })
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.invoices_sent
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.invoices_sent && (
                                    <p className="mt-1 text-sm text-red-600">{errors.invoices_sent.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="invoices_sent_email">*Send Invoices to</label>
                            <input
                                type="text"
                                id="invoices_sent_email"
                                placeholder="Email"
                                {
                                ...register('invoices_sent_email')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.invoices_sent_email
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.invoices_sent_email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.invoices_sent_email.message}</p>
                                )
                            }
                        </div>
                        <fieldset>
                            <legend>*Preferred Method of Communication</legend>
                            <div>
                                <input
                                    type="checkbox"
                                    id="face-to-face"
                                    name="face-to-face"
                                />
                                <label htmlFor="face-to-face">Face to Face</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="phone-call"
                                    name="phone-call"
                                />
                                <label htmlFor="phone-call">Phone Call</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="text"
                                    name="text"
                                />
                                <label htmlFor="text">Text</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="email"
                                    name="email"
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="Contact with my advocate/representative"
                                    name="Contact with my advocate/representative"
                                />
                                <label htmlFor="Contact with my advocate/representative">Contact with my advocate/representative</label>
                            </div>
                        </fieldset>
                        <div>
                            <label htmlFor="summary_participant_value_belief">Summary of participant's Values and beliefs:</label>
                            <textarea
                                id="summary_participant_value_belief"
                                placeholder="Add answer here.."
                                {
                                ...register('summary_participant_value_belief')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.summary_participant_value_belief
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            ></textarea>
                            {
                                errors.summary_participant_value_belief && (
                                    <p className="mt-1 text-sm text-red-600">{errors.summary_participant_value_belief.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="summary_participant_interest">​Summary of the Participant’s interests, leisure, community groups and involvement:</label>
                            <textarea
                                id="summary_participant_interest"
                                placeholder="Add answer here.."
                                {
                                ...register('summary_participant_interest')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.summary_participant_interest
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            ></textarea>
                            {
                                errors.summary_participant_interest && (
                                    <p className="mt-1 text-sm text-red-600">{errors.summary_participant_interest.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="summary_participant_interest">Summary of the Participant’s strengths, life dreams and aspirations:</label>
                            <textarea
                                id="summary_participant_strength"
                                placeholder="Add answer here.."
                                {
                                ...register('summary_participant_strength')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.summary_participant_strength
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            ></textarea>
                            {
                                errors.summary_participant_strength && (
                                    <p className="mt-1 text-sm text-red-600">{errors.summary_participant_strength.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="summary_participant_likes_dislikes">Summary of the Participant’s likes and dislikes:</label>
                            <textarea
                                id="summary_participant_likes_dislikes"
                                placeholder="Add answer here.."
                                {
                                ...register('summary_participant_likes_dislikes')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.summary_participant_likes_dislikes
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            ></textarea>
                            {
                                errors.summary_participant_likes_dislikes && (
                                    <p className="mt-1 text-sm text-red-600">{errors.summary_participant_likes_dislikes.message}</p>
                                )
                            }
                        </div>
                        <h4 className="my-6 font-bold">PARTICIPANT'S NEEDS ASSESSMENT</h4>
                        <div>
                            <label htmlFor="disability_types">Type of disability:</label>
                            <textarea
                                id="disability_types"
                                placeholder="Add answer here.."
                                {
                                ...register('disability_types')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.disability_types
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            ></textarea>
                            {
                                errors.disability_types && (
                                    <p className="mt-1 text-sm text-red-600">{errors.disability_types.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="current_health_status">Current Health Status:</label>
                            <textarea
                                id="current_health_status"
                                placeholder="Add answer here.."
                                {
                                ...register('current_health_status')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.current_health_status
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            ></textarea>
                            {
                                errors.current_health_status && (
                                    <p className="mt-1 text-sm text-red-600">{errors.current_health_status.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="family_informal_support_status">Status of family and informal support:</label>
                            <textarea
                                id="family_informal_support_status"
                                placeholder="Add answer here.."
                                {
                                ...register('family_informal_support_status')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.family_informal_support_status
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            ></textarea>
                            {
                                errors.family_informal_support_status && (
                                    <p className="mt-1 text-sm text-red-600">{errors.family_informal_support_status.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="assistance_type">What type of assistance is required, and how often?</label>
                            <textarea
                                id="assistance_type"
                                placeholder="Add answer here.."
                                {
                                ...register('assistance_type')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.assistance_type
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            ></textarea>
                            {
                                errors.assistance_type && (
                                    <p className="mt-1 text-sm text-red-600">{errors.assistance_type.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="preferred_support_worker_type">Preferred type of support worker (e.g. gender, age, language, culture, personality):</label>
                            <textarea
                                id="preferred_support_worker_type"
                                placeholder="Add answer here.."
                                {
                                ...register('preferred_support_worker_type')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.preferred_support_worker_type
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            ></textarea>
                            {
                                errors.preferred_support_worker_type && (
                                    <p className="mt-1 text-sm text-red-600">{errors.preferred_support_worker_type.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="summary_participant_corner">Summary of the Participant’s concerns:</label>
                            <textarea
                                id="summary_participant_corner"
                                placeholder="Add answer here.."
                                {
                                ...register('summary_participant_corner')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.summary_participant_corner
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            ></textarea>
                            {
                                errors.summary_participant_corner && (
                                    <p className="mt-1 text-sm text-red-600">{errors.summary_participant_corner.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="summary_participant_information">Summary of participant's information obtained from other providers (if applicable):</label>
                            <textarea
                                id="summary_participant_information"
                                placeholder="Add answer here.."
                                {
                                ...register('summary_participant_information')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.summary_participant_information
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            ></textarea>
                            {
                                errors.summary_participant_information && (
                                    <p className="mt-1 text-sm text-red-600">{errors.summary_participant_information.message}</p>
                                )
                            }
                        </div>
                        <h4 className="my-6 font-bold">PARTICIPANT'S GOALS</h4>
                        <div>
                            <label htmlFor="participant_goal">Goal / Objective</label>
                            <textarea
                                id="participant_goal"
                                placeholder="Add answer here.."
                                {
                                ...register('participant_goal')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.participant_goal
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            ></textarea>
                            {
                                errors.participant_goal && (
                                    <p className="mt-1 text-sm text-red-600">{errors.participant_goal.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="participant_action_plan">Action Plan</label>
                            <textarea
                                id="participant_action_plan"
                                placeholder="Add answer here.."
                                {
                                ...register('participant_action_plan')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.participant_action_plan
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            ></textarea>
                            {
                                errors.participant_action_plan && (
                                    <p className="mt-1 text-sm text-red-600">{errors.participant_action_plan.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="participant_target_date">Target Date</label>
                            <input
                                type="date"
                                id="participant_target_date"
                                {
                                ...register('participant_target_date')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.participant_target_date
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.participant_target_date && (
                                    <p className="mt-1 text-sm text-red-600">{errors.participant_target_date.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="participant_responsibility">Responsibility of the participant:</label>
                            <textarea
                                id="participant_responsibility"
                                placeholder="Add answer here.."
                                {
                                ...register('participant_responsibility')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.participant_responsibility
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            ></textarea>
                            {
                                errors.participant_responsibility && (
                                    <p className="mt-1 text-sm text-red-600">{errors.participant_responsibility.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="casa_community_responsiblity">Responsibility of Casa Community:</label>
                            <textarea
                                id="casa_community_responsiblity"
                                placeholder="Add answer here.."
                                {
                                ...register('casa_community_responsiblity')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.casa_community_responsiblity
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            ></textarea>
                            {
                                errors.casa_community_responsiblity && (
                                    <p className="mt-1 text-sm text-red-600">{errors.casa_community_responsiblity.message}</p>
                                )
                            }
                        </div>
                        <h4 className="my-6 font-bold">Risk Assessment:</h4>
                        <div>
                            <label htmlFor="risk">Risk</label>
                            <input
                                type="text"
                                id="risk"
                                {
                                ...register('risk')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.risk
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.risk && (
                                    <p className="mt-1 text-sm text-red-600">{errors.risk.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="risk_rate">Risk Rate</label>
                            <select
                                id="risk_rate"
                                {
                                ...register('risk_rate')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.risk_rate
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            >
                                <option value="Please select an option" className="bg-black">Please select an option</option>
                                <option value="Low" className="bg-black">Low</option>
                                <option value="Medium" className="bg-black">Medium</option>
                                <option value="High" className="bg-black">High</option>
                            </select>
                            {
                                errors.risk_rate && (
                                    <p className="mt-1 text-sm text-red-600">{errors.risk_rate.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="treatment_control_measures">Treatment Control Measures:</label>
                            <textarea
                                id="treatment_control_measures"
                                placeholder="Add answer here.."
                                {
                                ...register('treatment_control_measures')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.treatment_control_measures
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            ></textarea>
                            {
                                errors.treatment_control_measures && (
                                    <p className="mt-1 text-sm text-red-600">{errors.treatment_control_measures.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="responsibility">Responsibility:</label>
                            <textarea
                                id="responsibility"
                                placeholder="Add answer here.."
                                {
                                ...register('responsibility')
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.responsibility
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            ></textarea>
                            {
                                errors.responsibility && (
                                    <p className="mt-1 text-sm text-red-600">{errors.responsibility.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="participant_representative_name">*Participant/Representative's Name</label>
                            <input
                                type="text"
                                id="participant_representative_name"
                                {
                                ...register('participant_representative_name', {
                                    required: "Participant or Representative's name is required"
                                })
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.participant_representative_name
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.participant_representative_name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.participant_representative_name.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="participant_representative_signature">*Participant/Representative's Signature</label>
                            <input
                                type="text"
                                id="participant_representative_signature"
                                {
                                ...register('participant_representative_signature', {
                                    required: "Participant or Representative's signature is required"
                                })
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.participant_representative_signature
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.participant_representative_signature && (
                                    <p className="mt-1 text-sm text-red-600">{errors.participant_representative_signature.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="casa_official_name">*Casa Official's Name</label>
                            <input
                                type="text"
                                id="casa_official_name"
                                {
                                ...register('casa_official_name', {
                                    required: "casa_official_name is required"
                                })
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.casa_official_name
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.casa_official_name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.casa_official_name.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="casa_official_signature">*Casa Official's Signature</label>
                            <input
                                type="text"
                                id="casa_official_signature"
                                {
                                ...register('casa_official_signature', {
                                    required: "casa_official_signature is required"
                                })
                                }
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.casa_official_signature
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-300 focus:ring-blue-500'
                                    }`}
                            />
                            {
                                errors.casa_official_signature && (
                                    <p className="mt-1 text-sm text-red-600">{errors.casa_official_signature.message}</p>
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

export default AssessmentForm;

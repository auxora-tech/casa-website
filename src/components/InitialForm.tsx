import { StringifyOptions } from "querystring";
import Navigation from "./Navigation";
import { useForm } from "react-hook-form";

interface InitialFormData {
    first_name: string
    last_name: string
    preferred_name: string
    ndis_number: string 
    plan_end_date: string 
    email: string 
    phone: string 
    address: string 
    contact_person: string
}

const InitialForm = () => {
    return (
        <div className="h-screen">
            <Navigation />
            <div>

            </div>
        </div>
    )
}

export default InitialForm;

import Navigation from "./Navigation";
import Link from "next/link";

const Form = () => {
    return (
        <div className="h-screen">
            <Navigation />
            <div className="max-w-6xl mx-auto">
                <h2 className="text-white text-5xl">Hello</h2>
                <p className="text-2xl my-5">
                    Welcome to Casa Community's Forms Page! <br /> <br />

                    Whether you're looking to join our innovative Program or you're a stakeholder eager to collaborate, you've come to the right place! <br /> <br />

                    Please fill out the forms below to get started. Your involvement helps us shape a more inclusive and creative world, one pottery piece at a time. <br /> <br />

                    If you have any questions or need assistance, don't hesitate to reach out. We're here to help and can't wait to connect with you! <br /> <br />

                    Cheers, <br /> <br />

                    The Casa Community Team
                </p>
            </div>
            <div className="max-w-6xl mx-auto mt-20 mb-10 grid grid-cols-2 gap-8 text-2xl place-items-center">
                <Link  href="/initialform" className="w-full">
                    <button type="button" className="w-full cursor-pointer border-double border-white border-4 p-2 rounded-xl hover:bg-white hover:text-black">Initial Contact Form</button>
                </Link>
                <Link href="/assessment-form" className="w-full">
                    <button type="button" className="w-full cursor-pointer border-double border-white border-4 p-2 rounded-xl hover:bg-white hover:text-black">Participant Support Assessment Form</button>
                </Link>
                <Link href="/application-form" className="w-full">
                    <button type="button" className="w-full cursor-pointer border-double border-white border-4 p-2 rounded-xl hover:bg-white hover:text-black">Job Application Form</button>
                </Link>
                <Link href="/contact-form" className="w-full">
                    <button type="button" className="w-full cursor-pointer border-double border-white border-4 p-2 rounded-xl hover:bg-white hover:text-black">Contact Us</button>
                </Link>
            </div>
        </div>
    )
}

export default Form;

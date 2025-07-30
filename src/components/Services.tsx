import Navigation from "@/components/Navigation";

const Services = () => {
    return (
        <div className="h-screen">
            <Navigation />
            <div className="max-w-6xl mx-auto">
                <h2 className="text-white text-5xl">Why Choose Casa Community?</h2>
                <p className="text-2xl my-5">
                    At Casa Community, we are more than just a service provider. We are a community dedicated to empowering individuals with disabilities. Our focus on inclusivity, support, and empowerment sets us apart, making us a trusted partner in your journey towards independence.
                </p>
                <ul className="text-2xl">
                    <li>
                        <b>Experienced Team:</b> Our staff is highly trained and passionate about providing exceptional care.
                    </li>
                    <li className="my-5">
                        <b>Tailored Services:</b> We offer personalized support to meet the unique needs of each individual.
                    </li>
                    <li>
                        <b>Community Focus:</b> We foster a sense of belonging and community through our programs and activities.
                    </li>
                </ul>
            </div>
            <div className="max-w-6xl mx-auto my-10">
                <h3 className="text-3xl font-bold">Inclusive, Supportive, and Empowering</h3>
                <p className="text-2xl my-3">
                    At Casa Community, we are committed to enhancing the quality of life for individuals with disabilities through our wide range of services. Our programs are designed to foster independence, encourage social engagement, and support personal growth. Whether you are looking for day programs, community access opportunities, or homecare support, Casa Community is here to help. Discover how our tailored services can make a positive impact on your life or the life of your loved ones.
                </p>
            </div>
            <div className="max-w-6xl mx-auto my-20 text-2xl">
                <div className="flex items-center">
                    <div className="flex-1">
                        <p>
                            Introducing Casa Community's new and innovative Supported Employment Program, a key component of our Employment Empowerment Services (EES). We are dedicated to providing individuals with disabilities the opportunity to gain meaningful employment, fostering independence and enhancing their quality of life. Our program offers personalized support, skill development, and job placement assistance tailored to each participant's unique abilities and aspirations. By collaborating with local businesses and focusing on inclusivity, we aim to bridge the gap between potential and opportunity, empowering our community members to thrive in the workforce.
                        </p>
                    </div>
                    <h3 className="flex-1 text-center">Supported Employment</h3>
                </div>
            </div>
            <div className="max-w-6xl mx-auto my-20 text-2xl">
                <div className="flex items-center">
                    <h3 className="flex-1 text-center">Day Option</h3>
                    <div className="flex-1">
                        <p>
                            Our Day Options program provides a structured environment where participants can engage in a variety of activities designed to build skills, foster social connections, and encourage personal development. From educational workshops to recreational activities, we offer a diverse range of options tailored to individual interests and needs.
                        </p>
                        <ul className="my-5">
                            <li>
                                <b>Life Skill Development Workshops:</b> Enhance abilities in areas such as cooking, art, and technology.
                            </li>
                            <li>
                                <b>Social Activities:</b> Participate in group outings, games, and community events.
                            </li>
                            <li>
                                <b>Personalized Support:</b> Receive guidance and support from our experienced staff.
                            </li>
                            <li>
                                <b>Skill Development workshops:</b> Learn tradable skill like pottery, Handmade items.
                            </li>
                            <li>
                                Assistance in selling your unique creations.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto my-20 text-2xl">
                <div className="flex items-center">
                    <div className="flex-1">
                        <p>
                            Casa Community's Homecare Support service is designed to provide personalized care in the comfort of your own home. Our compassionate and professional team is here to assist with daily living activities, ensuring a safe and supportive environment.
                        </p>
                        <ul className="my-5">
                            <li>
                                <b>Personal Care:</b> Assistance with bathing, dressing, and grooming.
                            </li>
                            <li>
                                <b>Household Tasks:</b> Support with cooking, cleaning, and other household chores.
                            </li>
                            <li>
                                <b>Health and Wellbeing:</b> Help with medication management and health monitoring.
                            </li>
                        </ul>
                    </div>
                    <h3 className="flex-1 text-center">Independent Living</h3>
                </div>
            </div>
            <div className="max-w-6xl mx-auto my-20 text-2xl">
                <div className="flex items-center">
                    <h3 className="flex-1 text-center">Community Access</h3>
                    <div className="flex-1">
                        <p>
                            Our Community Access service facilitates social inclusion and community participation through weekend meet-ups and group activities. We believe that everyone deserves the opportunity to connect with others and enjoy a vibrant social life
                        </p>
                        <ul className="my-5">
                            <li>
                                <b>Weekend MeetUps:</b>  Join us for fun and engaging group activities every weekend.
                            </li>
                            <li>
                                <b>Community Events:</b> Attend local events and outings with support from our team.
                            </li>
                            <li>
                                <b>Social Skills Development:</b> Improve communication and interpersonal skills in real-world settings.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;

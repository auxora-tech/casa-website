import Navigation from "@/components/Navigation";

const Ees = () => {
    return (
        <div className="h-screen">
            <Navigation />
            <div className="max-w-6xl mx-auto">
                <h2 className="text-white text-5xl">What is EES?</h2>
                <p className="text-2xl my-5">
                    The Employment and Empowerment Support (EES) Program at Casa Community is designed to provide individuals with NDIS the opportunity to gain meaningful employment and develop essential skills. Our program focuses on empowering participants through personalized support, skill-building workshops, and hands-on experience in a supportive environment. By joining our EES Program, participants will not only enhance their employability but also foster lifelong connections within our vibrant community.
                </p>
            </div>
            <div className="max-w-6xl mx-auto text-2xl">
                <h2 className="font-bold">Eligibility Criteria:</h2>
                <ul className="list-disc pl-6">
                    <li>NDIS Participants: The program is open to individuals who are registered NDIS participants.</li>
                    <li>Needs support to for employment</li>
                    <li>Participants should be committed to actively engaging in the program and pursuing personal and professional growth.</li>
                    <li>Willingness to Learn: A positive attitude and eagerness to learn new skills and participate in various activities.</li>
                </ul>
            </div>
            <div className="max-w-6xl mx-auto text-2xl my-5">
                <h2 className="font-bold">How does this work?</h2>
                <p>
                    At Casa Community, we believe in unlocking potential and turning passions into careers!  Our approach is all about collaboration and support, working closely with participants and their informal care providers to discover their unique skills and interests.
                </p>
                <ul className="my-2">
                    <li><b>Step 1: Discovery & Recognition:</b> We start by getting to know you! Through personalized assessments and one-on-one discussions, we identify your strengths, skills, and passions. This is your chance to shine and tell us what truly excites you!</li>
                    <li className="my-1"><b>Step 2: Tailored Opportunities:</b> Once we've uncovered your interests, we craft a personalized pathway for your career journey. Whether it's hands-on training, workshops, or mentorship, we provide the resources and opportunities you need to thrive in your chosen field.</li>
                    <li><b>Step 3: Ongoing Support & Growth:</b> Our commitment doesn't stop at opportunities! We offer continuous support and guidance, ensuring you have the tools and confidence to succeed. With Casa Community, you're never alone on your journey to empowerment and success.</li>
                </ul>
            </div>
            <p className="text-2xl max-w-6xl mx-auto mb-10 animate-bounce">Join us and transform your passion into a fulfilling career!!!!</p>
        </div>
    )
}

export default Ees;

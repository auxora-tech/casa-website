import Image from "next/image";
import Navigation from "./Navigation";

const Header = () => {
    return (
            <header className="h-screen bg-black">
                <Navigation/>
            <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center">
                        <Image src="/images/casa.jpg" alt="company-logo" width={400} height={400} />
                        <div>
                            <p className="text-5xl">Welcome to</p>
                            <h1 className="text-9xl">Casa Community</h1>
                        <p className="text-3xl"><span className="animate-pulse">"Empowering Every Ability, Every Day"</span> | Registered NDIS provider</p>
                        </div>
                    </div>
                </div>
            </header>
    )
}

export default Header;

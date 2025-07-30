import Link from "next/link";

const Navigation = () => {
    return (
            <div className="h-1/5 flex justify-evenly items-center text-xl">
                <Link href="/" className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Home</Link>
                <Link href="/services" className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Our Services</Link>
                <Link href="/forms" className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Forms</Link>
                <Link href="/ees" className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">EES</Link>
                <Link href="/contact" className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Contact Us</Link>
            </div>
    )
}
export default Navigation;

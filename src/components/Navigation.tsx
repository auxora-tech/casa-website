'use client'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navigation = () => {
    const pathname = usePathname();
    const isNotHome = pathname !== '/';
    return (
        <div className='h-1/5 max-w-6xl mx-auto flex items-center justify-between'>
            {
                isNotHome && (<div className="flex items-center">
                    <Image src="/images/casa.jpg" alt="company-logo" width={80} height={80} />
                    <h1 className="text-2xl">Casa Community</h1>
                </div>)
            }
            <div className={`flex justify-between text-xl ${isNotHome ? 'w-3/5' : 'w-full'}`}>
                <Link href="/" className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Home</Link>
                <Link href="/services" className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Our Services</Link>
                <Link href="/forms" className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Forms</Link>
                <Link href="/ees" className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">EES</Link>
                <Link href="/contact" className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Contact Us</Link>
            </div>
        </div>
    )
}
export default Navigation;

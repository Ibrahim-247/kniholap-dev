"use client";
import footer from '@/public/footer.png'
import Logo from './common/Logo'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { navItems } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavLink from './common/NavLink';
const Footer = () => {
    const pathname = usePathname();
    const socials = [
        {
            icon: <FaFacebookSquare />,
            link: "#"
        },
        {
            icon: <AiFillInstagram />,
            link: "#"
        },
        {
            icon: <FaSquareXTwitter />,
            link: "#"
        }
    ]

    // main render
    return (
        <footer className='w-full mt-10 sm:mt-20 relative min-h-[500px] pb-6 sm:pb-11 flex flex-col justify-end'>
            <img src={footer.src} className='w-full  inset-0 z-[-1] absolute ' alt="footer" />
            <div className='container flex flex-col justify-start gap-6 sm:gap-14'>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-10'>
                    {/* col-1 */}
                    <div className='w-full flex flex-col gap-3 justify-start items-start'>
                        <Logo className="sm:w-44 sm:h-16 w-32 h-12" />
                        <p>Your one-stop marketplace and digital library. Trade books, read anywhere, and connect with readers worldwide.</p>
                        <div className='flex items-center gap-4'>
                            {
                                socials.map((item, index) => (
                                    <div key={index} className='w-10 h-10 border border-[rgba(19,19,19,0.10)] rounded-full bg-white flex items-center justify-center text-primary text-xl cursor-pointer'>
                                        {item.icon}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* col-2 */}
                    <div className='w-full flex flex-col gap-3 justify-start items-start'>
                        {navItems.map((item, index) => (
                            <NavLink
                                key={index}
                                href={item.link}
                                aria-label={item.name}
                                title={item.name}
                                prefetch={true}
                                end={item.end}
                                activeClassName="text-primary text-lg"
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                    {/* col-3 */}
                    <div className='w-full flex flex-col sm:text-lg gap-3 justify-start items-start'>
                        <a className={``} href='#'>
                            Terms & Conditions
                        </a>
                        <a className={``} href='#'>
                            Privacy Policy
                        </a>
                    </div>
                    {/* col-4 */}
                    <div className='w-full flex flex-col gap-1 sm:gap-3 justify-start items-start'>
                        <h2 className='sm:text-xl text-base font-semibold'>Contact Us</h2>
                        {/* Address opens Google Maps */}
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=123+Main+Street,+City,+Country"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" transition-all text-base duration-300 hover:underline"
                        >
                            <span>Address:</span> Level 10, 123 Collins Street Melbourne VIC 3000 Australia
                        </a>

                        {/* Phone number opens dialer */}
                        <a href='tel:+11234567890' className="transition-all duration-300 hover:underline">
                            <span>Phone:</span> +1 (123) 456-7890
                        </a>

                        {/* Email opens mail client */}
                        <a href='mailto:6XW7g@example.com' className="transition-all duration-300 hover:underline">
                            <span>Email:</span> 6XW7g@example.com
                        </a>
                    </div>
                </div>
                <p className='text-base capitalize'>©{new Date().getFullYear()}BookNest. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
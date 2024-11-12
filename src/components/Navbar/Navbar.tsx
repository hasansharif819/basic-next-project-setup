'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import logo from '@/assets/images/amar_bazar_white.webp';
import Image from 'next/image';

export const Navbar: React.FC = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const navItems = [
        {
            link: { label: 'Home', url: '/' },
            subNavItems: [],
        },
        {
            link: { label: 'About', url: '/about' },
            subNavItems: [],
        },
        {
            link: { label: 'Services', url: '#' },
            subNavItems: [
                { link: { label: 'Service 1', url: '/services/1' } },
                { link: { label: 'Service 2', url: '/services/2' } },
            ],
        },
        {
            link: { label: 'Contact', url: '/contact' },
            subNavItems: [],
        },
    ];

    // Static category list
    const categories = [
        { id: 1, title: 'Category 1' },
        { id: 2, title: 'Category 2' },
        { id: 3, title: 'Category 3' },
    ];

    const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const handleSubmenu = (index: number) => setOpenIndex(index === openIndex ? null : index);
    return (
        <div className='bg-primary text-white'>
            <div className="border-b border-[#72A566]">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Social Icons */}
                    <div className="flex items-center space-x-4">
                        <Link href="/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-primary dark:text-white dark:hover:text-primary">
                            <svg width="15" height="15" viewBox="126.445 2.281 589 589" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a"></circle><path d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z" fill="#ffffff"></path></g></svg>
                        </Link>
                        <Link href="/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-primary dark:text-white dark:hover:text-primary">
                            <svg width="15" height="15" viewBox="126.444 2.281 589 589" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="420.944" cy="296.781" r="294.5" fill="#2daae1"></circle><path d="M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z" fill="#ffffff"></path></g></svg>
                        </Link>
                        <Link href="/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-primary dark:text-white dark:hover:text-primary">
                            <svg width="15" height="15" viewBox="7.025 7.025 497.951 497.951" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-974.482" y1="1306.773" x2="-622.378" y2="1658.877" gradientTransform="translate(1054.43 -1226.825)"><stop offset="0" stopColor="#2489be"></stop><stop offset="1" stopColor="#0575b3"></stop></linearGradient><path d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z" fill="url(#a)"></path></g></svg>
                        </Link>
                        <Link href="/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-primary dark:text-white dark:hover:text-primary">
                            <svg width="15" height="15" viewBox="0 0 3364.7 3364.7" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><radialGradient id="0" cx="217.76" cy="3290.99" r="4271.92" gradientUnits="userSpaceOnUse"><stop offset=".09" stopColor="#fa8f21"></stop><stop offset=".78" stopColor="#d82d7e"></stop></radialGradient><radialGradient id="1" cx="2330.61" cy="3182.95" r="3759.33" gradientUnits="userSpaceOnUse"><stop offset=".64" stopColor="#8c3aaa" stopOpacity="0"></stop><stop offset="1" stopColor="#8c3aaa"></stop></radialGradient></defs><path d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9" fill="url(#0)"></path><path d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9" fill="url(#1)"></path><path d="M1269.25,1689.52c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7-416.6-186.59-416.6-416.7m-225.26,0c0,354.5,287.36,641.86,641.86,641.86s641.86-287.36,641.86-641.86-287.36-641.86-641.86-641.86S1044,1335,1044,1689.52m1159.13-667.31a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M1180.85,2707c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27S2059.13,666,2191,672c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M1170.5,447.09c-133.07,6.06-224,27.16-303.41,58.06-82.19,31.91-151.86,74.72-221.43,144.18S533.39,788.47,501.48,870.76c-30.9,79.46-52,170.34-58.06,303.41-6.16,133.28-7.57,175.89-7.57,515.35s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43s139.14,112.18,221.43,144.18c79.56,30.9,170.34,52,303.41,58.06,133.35,6.06,175.89,7.57,515.35,7.57s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2586.8,537.06,2504.71,505.15c-79.56-30.9-170.44-52.1-303.41-58.06C2068,441,2025.41,439.52,1686,439.52s-382.1,1.41-515.45,7.57" fill="#ffffff"></path></g></svg>
                        </Link>
                    </div>

                    {/* Nav Links */}
                    <nav className={`absolute right-0 z-30 w-[250px] rounded bg-white p-4 transition lg:static lg:w-auto lg:bg-transparent ${navbarOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                        <ul className="block lg:flex lg:space-x-8">
                            {navItems.map((menuItem, index) => (
                                <li key={index} className="group relative text-[13px]">
                                    {menuItem.subNavItems.length === 0 ? (
                                        <Link href={menuItem.link.url} className={`font-normal text-base no-underline ${menuItem.link.url === '/' ? 'text-primary' : 'text-black hover:text-primary'}`}>
                                            {menuItem.link.label}
                                        </Link>
                                    ) : (
                                        <>
                                            <p onClick={() => handleSubmenu(index)} className="cursor-pointer flex items-center">
                                                {menuItem.link.label}
                                                <span className="pl-1">
                                                    {/* Dropdown SVG */}
                                                    <svg width="25" height="24" viewBox="0 0 25 24">...</svg>
                                                </span>
                                            </p>
                                            <div className={`absolute top-full left-0 bg-white p-4 shadow-lg transition-all ${openIndex === index ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                                                {menuItem.subNavItems.map((submenuItem, subIndex) => (
                                                    <Link key={subIndex} href={submenuItem.link.url} className="block py-1 text-base hover:text-primary">
                                                        {submenuItem.link.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Navbar Toggle Button */}
                    <button onClick={navbarToggleHandler} className="lg:hidden">
                        <svg width="24" height="24" fill="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={200}
                            height={64}
                        />
                    </Link>

                    {/* Search Bar */}
                    <div className="relative flex items-center w-full lg:w-[600px]">
                        <div className="flex items-center justify-between bg-white text-black rounded-l-full px-4 border-r cursor-pointer w-[250px] py-[12px]" onClick={toggleDropdown}>
                            All Categories
                            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                        {isDropdownOpen && (
                            <ul className="absolute bg-white shadow-lg rounded-lg mt-1 z-50 w-full max-w-[250px]">
                                {categories.map((category) => (
                                    <li key={category.id} className="px-4 py-2 hover:text-primary cursor-pointer">{category.title}</li>
                                ))}
                            </ul>
                        )}
                        <input type="text" placeholder="Type Your Product Name..." className="w-full py-[12px] px-4 rounded-r-full text-black" />
                        <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </button>
                    </div>

                    {/* Sign In and Cart Links */}
                    <div className="space-x-4 text-white flex items-center">
                        <Link href="/login" className="flex items-center gap-2 text-[15px] font-medium">
                            <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 8 c 1.109375 0 2 -0.890625 2 -2 v -0.5 c 0 -2.492188 -2.007812 -4.5 -4.5 -4.5 z m 0 0" fill="#ffffff"></path> </g></svg>
                            Sign In
                        </Link>
                        <Link href="/support" className="flex items-center gap-2 text-[15px] font-medium">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 40 32" enableBackground="new 0 0 40 32" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#ffffff" d="M34.91,14.667c-0.067-3.497-1.359-6.884-3.691-9.549c-2.84-3.248-6.938-5.111-11.242-5.111 c-4.311,0-8.408,1.859-11.242,5.1c-2.355,2.693-3.63,6.121-3.673,9.651c-2.922,0.5-5.084,2.941-5.124,5.919 c-0.012,0.042-0.018,0.086-0.018,0.13C-0.08,24.222,2.672,27,6.055,27h4.539c2.056,3.03,5.527,5,9.383,5 c5.647,0,10.476-4.221,11.229-9.819l0.758-5.633c0.466-3.458-0.585-6.948-2.882-9.574s-5.615-4.133-9.104-4.133 s-6.808,1.506-9.104,4.133S7.524,13.09,7.99,16.548l0.758,5.633c0.184,1.37,0.616,2.656,1.24,3.819H7.919 c-0.486-1.093-0.824-2.292-0.996-3.573l-0.758-5.631c-0.064-0.474-0.099-0.948-0.114-1.421c0.037-0.078,0.062-0.162,0.053-0.255 c-0.005-0.059-0.026-0.113-0.05-0.163C6.05,11.598,7.248,8.325,9.486,5.766c2.645-3.024,6.468-4.758,10.49-4.758 c4.017,0,7.84,1.738,10.49,4.769c2.22,2.538,3.429,5.777,3.445,9.11C33.887,14.94,33.87,15,33.865,15.063 c-0.008,0.088,0.009,0.173,0.043,0.248c-0.013,0.503-0.053,1.007-0.12,1.511l-0.758,5.661c-0.205,1.526-0.607,2.936-1.076,3.772 c-0.086,0.155-0.085,0.344,0.005,0.498C32.049,26.906,32.213,27,32.391,27h1.555C37.284,27,40,24.215,40,20.735 C40,17.674,37.846,15.15,34.91,14.667z M9.738,22.047L8.98,16.415c-0.426-3.172,0.537-6.373,2.645-8.782 c2.106-2.409,5.15-3.791,8.352-3.791s6.245,1.382,8.352,3.791c2.107,2.41,3.07,5.61,2.645,8.782l-0.758,5.633 C29.527,27.151,25.126,31,19.977,31c-3.272,0-6.238-1.557-8.145-4H15c0.018,0,0.032-0.008,0.049-0.01 C15.278,28.134,16.289,29,17.5,29h4c1.379,0,2.5-1.122,2.5-2.5S22.879,24,21.5,24h-4c-1.211,0-2.222,0.866-2.451,2.01 C15.032,26.008,15.018,26,15,26h-3.853C10.429,24.819,9.932,23.486,9.738,22.047z M16,26.5c0-0.827,0.673-1.5,1.5-1.5h4 c0.827,0,1.5,0.673,1.5,1.5S22.327,28,21.5,28h-4C16.673,28,16,27.327,16,26.5z M6.836,26H6.055c-2.804,0-5.091-2.285-5.134-5.111 c0.01-0.041,0.016-0.083,0.016-0.125c0-2.472,1.75-4.516,4.145-4.996c0.022,0.387,0.041,0.774,0.093,1.162l0.758,5.631 C6.096,23.78,6.404,24.93,6.836,26z M33.945,26h-0.767c0.37-0.917,0.673-2.12,0.842-3.384l0.758-5.661 c0.058-0.425,0.097-0.851,0.117-1.275C37.271,16.145,39,18.228,39,20.792C39,23.664,36.732,26,33.945,26z"></path> </g> </g></svg>
                            Support
                        </Link>
                        <button className="flex items-center gap-2 text-[15px] font-medium">
                            <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M13.35 10.48H4.5l-.24-1.25h9.13a1.24 1.24 0 0 0 1.22-1l.84-4a1.25 1.25 0 0 0-1.22-1.51H3l-.22-1.24H.5v1.25h1.25l1.5 7.84a2 2 0 0 0-1.54 1.93 2.09 2.09 0 0 0 2.16 2 2.08 2.08 0 0 0 2.13-2 2 2 0 0 0-.16-.77h5.49a2 2 0 0 0-.16.77 2.09 2.09 0 0 0 2.16 2 2 2 0 1 0 0-4zM14.23 4l-.84 4H4l-.74-4zM3.87 13.27A.85.85 0 0 1 3 12.5a.85.85 0 0 1 .91-.77.84.84 0 0 1 .9.77.84.84 0 0 1-.94.77zm9.48 0a.85.85 0 0 1-.91-.77.92.92 0 0 1 1.81 0 .85.85 0 0 1-.9.77z"></path></g></svg>
                            Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

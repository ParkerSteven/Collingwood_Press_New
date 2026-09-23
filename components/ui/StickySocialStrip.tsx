"use client";

import React from 'react';
import Link from 'next/link';
import reviews from '../../public/assets/images/socials/reviews.svg';
import instagram from '../../public/assets/images/socials/instagram.svg';
import tiktok from '../../public/assets/images/socials/tiktok.svg';
import Bark from '../../public/assets/images/socials/bark.webp';
import g2 from '../../public/assets/images/socials/g2.png';
import ibpaonline from '../../public/assets/images/socials/ibpa-online.jpg';


const StickySocialStrip = () => {
    const socialLinks = [
        {
            name: 'Bark',
            href: 'https://www.bark.com/en/us/company/collingwood-press/AVXNky',
            img: Bark
        },
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/theCollingwoodpress',
            icon: (
                <svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
            )
        },
        {
            name: 'G2',
            href: 'https://www.g2.com/sellers/collingwood-press',
            img: g2
        },
        {
            name: 'X',
            href: 'https://x.com/CollingwoodUS',
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="4" fill="#000000" />
                    <path fill="#ffffff" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
                </svg>
            )
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/collingwoodpress/',
            img: instagram
        },
        {
            name: 'TikTok',
            href: 'https://www.tiktok.com/@collingwoodpress',
            img: tiktok
        },
        {
            name: 'Reviews',
            href: 'https://www.reviews.io/company-reviews/store/www.thecollingwoodpress.com',
            img: reviews
        }];

    return (
        <div className="fixed left-0 top-[40%] z-[9999] hidden -translate-y-1/2 md:flex">
            <div className="flex flex-col items-center gap-1.5 rounded-r-xl border border-l-0 border-white/20 bg-gradient-to-b from-[#1d2a48]/95 to-[#111a33]/95 px-1.5 py-2.5 shadow-[0_10px_24px_rgba(4,10,30,0.42)] backdrop-blur-md">
                {/* BBB Seal */}
                <Link
                    href="https://www.bbb.org/us/tx/livingston/profile/book-publishers/collingwood-press-0825-1000231047/#sealclick"
                    target="_blank"
                    rel="nofollow"
                    aria-label="Open BBB profile"
                    className="mb-1 rounded-md border border-white/30 bg-white/95 p-1 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                    <img
                        src="https://seal-austin.bbb.org/seals/blue-seal-63-134-bbb-1000231047.png"
                        alt="BBB Review"
                        width={28}
                        height={60}
                        className="h-auto w-7"
                    />

                </Link>
                <Link
                    href="https://www.ibpa-online.org/"
                    target="_blank"
                    rel="nofollow"
                    aria-label="Open BBB profile"
                    className="mb-1 rounded-md border border-white/30 bg-white/95 p-1 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >

                    <img
                        src={ibpaonline.src}
                        alt="IBPA Online"
                        width={28}
                        height={60}
                        className="h-auto w-7 gap-1.5"
                    />
                </Link>

                {/* Social Icons */}
                {socialLinks.map((social) => (
                    <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${social.name}`}
                        className="group grid h-8 w-8 place-items-center rounded-sm border border-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-[0_5px_14px_rgba(0,0,0,0.26)]"
                        title={social.name}
                    >
                        {social.img ? (
                            <img
                                src={social.img.src}
                                alt={`${social.name} Icon`}
                                width={26}
                                height={26}
                                className="h-[26px] w-[26px] transition-transform duration-300 group-hover:scale-105"
                            />
                        ) :
                            <div className="flex h-[26px] w-[26px] items-center justify-center transition-transform duration-300 group-hover:scale-105">
                                {social.icon}
                            </div>
                        }
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default StickySocialStrip;

"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function HeroAnimated() {
    return (
        <>
            {/* Left Column */}
            <div className="max-w-3xl">
                <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
                    <Eyebrow tone="gold">
                        Independent Trade Publishing &bull; Author Imprint
                    </Eyebrow>
                </motion.div>

                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    custom={1}
                    className="mt-6 font-poppins text-[2.75rem] sm:text-[3.5rem] lg:text-[3.3rem] font-normal leading-[1.07] text-ink tracking-[-0.015em] text-balance"
                >
                    You wrote the book.{" "}
                    <span className="text-[#B8964E] italic block sm:inline">
                        Now let&rsquo;s publish it
                    </span>{" "}
                    with the dignity it deserves.
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    custom={2}
                    className="mt-6 text-[1rem] sm:text-[1rem] leading-relaxed text-ink-soft font-sans font-normal"
                >
                    Bringing a manuscript into the world shouldn&rsquo;t feel like a gamble with automated
                    mills or aloof gatekeepers. At Collingwood Press, seasoned trade editors, master
                    typographers, and dedicated book publicists champion your work from first proof to
                    international bookstore distribution.
                </motion.p>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    custom={3}
                    className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
                >
                    <Button href="#manuscript-review" variant="primary" size="md">
                        <span>Submit Manuscript for Review</span>
                        <ArrowRight size={15} />
                    </Button>
                    <Button href="/about-us#team" variant="outline" size="lg">
                        <span>Meet Your Publishing Director</span>
                    </Button>
                </motion.div>

                {/* Trust badges */}
                <div className="mt-8 w-full max-w-[560px] text-center">
                    <div className="flex items-center gap-4">
                        <span className="h-px flex-1 bg-[#A9863E]" />
                        <span className="shrink-0 font-poppins text-[11px] text-[#97742e] tracking-[0.24em]">
                            Accredited &amp; Member
                        </span>
                        <span className="h-px flex-1 bg-[#A9863E]" />
                    </div>

                    <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-10">
                        <Link
                            href="https://www.ibpa-online.org/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className="flex h-12 w-[180px] items-center justify-center opacity-90 transition-opacity hover:opacity-100"
                        >
                            <Image
                                src="/ibpa-proud-member png.png"
                                alt="Collingwood Press IBPA Member"
                                width={120}
                                height={50}
                                className="block h-auto object-contain"
                            />
                        </Link>

                        <span className="hidden h-10 w-px bg-[#A9863E] sm:block" aria-hidden="true" />

                        <div className="flex h-12 w-[180px] items-center justify-center">
                            <Link
                                href="https://www.bbb.org/us/tx/livingston/profile/book-publishers/collingwood-press-0825-1000231047/#sealclick"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                <img
                                    src="https://seal-austin.bbb.org/seals/blue-seal-293-61-bbb-1000231047.png"
                                    alt="Collingwood Press BBB Business Review"
                                    className="block h-auto max-h-12 w-auto object-contain"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Floating Books */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto w-full max-w-[460px] h-[450px] sm:h-[500px] flex items-center justify-center"
            >
                <Image
                    src="/assets/images/3DBooks New.png"
                    alt="A stack of published books"
                    fill
                    sizes="(max-width: 640px) 90vw, 460px"
                    className="scale-[1.2] object-contain sm:scale-[1.3]"
                    priority
                />
            </motion.div>
        </>
    );
}
'use client'

import { NavLinks } from "@/constants";
import Link from "next/link"
import Image from 'next/image';
import NFAuthProviders from "./NFAuthProviders";

const NFNavbar = () => {

    const session = {}
    
    return (
        <nav className="navbar flexBetween">
            <div className="flex-1 flexStart gap-10">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="flexibble"
                        width={115}
                        height={43}
                    />
                </Link>
                <ul className="xl:flex hidden text-small gap-7">
                    {NavLinks.map((link) => (
                        <Link key={link.key} href={link.href}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="flexCenter gap-4">
                {session ? (
                    <>
                        User Photo
                        <Link href="/create-project">
                            Share Work
                        </Link>
                    </>
                ) : (
                    <NFAuthProviders />
                )}
            </div>
        </nav>
    )
}

export default NFNavbar

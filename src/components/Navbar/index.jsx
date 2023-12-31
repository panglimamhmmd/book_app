'use client';

import { SignedOut } from '@clerk/clerk-react';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href={`/`} className="btn btn-ghost text-xl text-accent">
                    Book App
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <SignedOut>
                        <li>
                            <Link href={`/Login`}>Login</Link>
                        </li>
                        <li>
                            <Link href={'/login'}>Register</Link>
                        </li>
                    </SignedOut>
                    <li>
                        <details>
                            <summary>Action</summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li>
                                    <Link href={`/books`}>Library</Link>
                                </li>
                                <li>
                                    <Link href={`/book/add`}>Add Book</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <UserButton afterSignOutUrl="/" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

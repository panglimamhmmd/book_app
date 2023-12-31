import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className="btm-nav">
            <button></button>
            <Link href={`/books/add`} className="active">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        className=""
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <button
                    href={`/books/add`}
                    className="btm-nav-label text-accent"
                >
                    Add Book{' '}
                </button>
            </Link>
            <button>
                <span className="btm-nav-label"></span>
            </button>
        </div>
    );
};

export default Header;

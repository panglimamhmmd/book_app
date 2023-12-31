import axios from 'axios';
import Link from 'next/link';
import React from 'react';

const BookDetail = ({ book }) => {
    const data = book.data;
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-accent">
                        {data.title}
                    </h1>
                    <p className="mb-8 hover:text-accent text-white leading-relaxed">
                        {data.description}
                    </p>
                    <div className="flex justify-center mb-2">
                        <Link
                            href={'#'}
                            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        >
                            {data.author}
                        </Link>
                        <Link
                            href={'#'}
                            className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                        >
                            {data.website}
                        </Link>
                    </div>
                    <p className="text-white  hover:text-accent *:leading-relaxed">
                        {data.isbn}
                    </p>
                    <p className="text-white hover:text-accent leading-relaxed">
                        {data.subtitle}
                    </p>
                    <p className="text-white hover:text-accent  leading-relaxed">
                        {data.published}
                    </p>
                    <p className=" text-white hover:text-accent leading-relaxed">
                        {data.publisher}
                    </p>
                    <p className="text-white hover:text-accent leading-relaxed">
                        {data.pages}
                    </p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="https://dummyimage.com/720x600"
                    />
                </div>
            </div>
        </section>
    );
};

export default BookDetail;

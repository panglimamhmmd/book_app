import React from 'react';
import axios from 'axios';
import BookDetail from '../../../components/BookDetail';
const Page = async ({ params }) => {
    const book_id = params.book_id;
    const { data } = await axios.get(
        `${process.env.BASE_URL}/api/books/${book_id}`
    );
    return (
        <div>
            <BookDetail book={data} />
        </div>
    );
};

export default Page;

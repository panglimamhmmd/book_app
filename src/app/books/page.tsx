import React from 'react';
import axios from 'axios';
import Table from '@/components/Table';
import Header from '@/components/Header';
const Page = async () => {
    const { data } = await axios.get(`${process.env.BASE_URL}/api/books`);
    const books = data.datas.data;

    return (
        <>
            <Header />
            <Table data={books} />
        </>
    );
};

export default Page;

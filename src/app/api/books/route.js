import { NextResponse } from 'next/server';
import prisma from '../../../../prisma/client';

export async function GET(req) {
    const PAGE_SIZE = 10;
    const books = await prisma.book.findMany();
    const totalBooks = await prisma.book.count();
    const page = 1;
    const totalPages = Math.ceil(totalBooks / PAGE_SIZE);
    const firstPageUrl = `/api/books?page=1`;
    const lastPageUrl = `/api/books?page=${totalPages}`;

    const response = {
        current_page: page,
        data: books,
        first_page_url: firstPageUrl,
        from: books.length > 0 ? (page - 1) * PAGE_SIZE + 1 : null,
        last_page: totalPages,
        last_page_url: lastPageUrl,
        next_page_url: page < totalPages ? `/api/books?page=${page + 1}` : null,
        path: req.originalUrl,
        per_page: PAGE_SIZE,
        prev_page_url: page > 1 ? `/api/books?page=${page - 1}` : null,
        to: books.length > 0 ? (page - 1) * PAGE_SIZE + books.length : null,
        total: totalBooks,
    };

    return NextResponse.json(
        {
            success: true,
            message: 'Get All Book',
            datas: response,
        },
        { status: 200 }
    );
}

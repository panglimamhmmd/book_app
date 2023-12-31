import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function POST(request:Request) {
    //get all request
    const { user_id, isbn, title, subtitle, author, published, publisher,pages,description,website } = await request.json();
    
    const post = await prisma.book.create({
      data: {
        user_id, isbn, title, subtitle, author, published, publisher,pages,description,website
      },
    });
  
    //return response JSON
    return NextResponse.json(
      {
        success: true,
        message: "Add new Book model to user's List of Books",
        data: post,
      },
      { status: 201 }
    );
  }
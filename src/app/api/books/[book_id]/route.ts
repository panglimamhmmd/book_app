import prisma from "../../../../../prisma/client";
import { NextResponse } from "next/server";

export async function GET (req: Request , params : any ){
    // get details
    const bookID = parseInt(params.params.book_id)
    const book = await prisma.book.findUnique({
        where: {
            id : bookID
        }
    })

    return NextResponse.json(
        {
          sucess: true,
          message: "Get specific book model by Book ID",
          data: book,
        },
        {
          status: 200,
        }
      )
}
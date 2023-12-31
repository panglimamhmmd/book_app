import prisma from "../../../../../../prisma/client";
import { NextResponse } from "next/server";

export async function PUT(request:Request,  params: any) {
    //get params id
    const id = parseInt(params.params.book_id);

    

    const {  user_id, isbn, title, subtitle, author, published, publisher,pages,description,website } = await request.json();
  
    //update data
    const post = await prisma.book.update({
      where: {
        id,
      },
      data: {
        user_id, isbn, title, subtitle, author, published, publisher,pages,description,website, updated_at: new Date(),
      },
    });
  

    return NextResponse.json(
      {
        sucess: true,
        message: "Update user's Book model",
        data: post,
      },
      {
        status: 200,
      }
    );
  }


  export async function DELETE(request: Request, params:any ) {
    //get params id
    const id = parseInt(params.params.id);
  
    //delete data
    await prisma.book.delete({
      where: {
        id,
      },
    });
  
    //return response JSON
    return NextResponse.json(
      {
        sucess: true,
        message: "Data Book Deleted!",
      },
      {
        status: 200,
      }
    );
  }
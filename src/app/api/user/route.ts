import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function GET() {
  try {
    const allUsers = await prisma.user.findMany();
    return NextResponse.json(allUsers);
  } catch (error) {
    throw new Error(`Error fetching users: ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}


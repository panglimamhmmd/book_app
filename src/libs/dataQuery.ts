import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllUsers() {
  try {
    const allUsers = await prisma.user.findMany();
    return allUsers;
  } catch (error) {
    throw new Error(`Error fetching users: ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getAllBook() {
    try {
      const allBook = await prisma.book.findMany();
      return allBook;
    } catch (error) {
      throw new Error(`Error fetching users: ${error}`);
    } finally {
      await prisma.$disconnect();
    }
  }
  

export default prisma;
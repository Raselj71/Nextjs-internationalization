import { PrismaClient } from '@prisma/client'

// Extend globalThis to include a prisma property
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV === 'development') globalThis.prisma = prisma

export default prisma
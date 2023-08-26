import { Prisma } from '@prisma/client';
import { prisma } from '../config/database';

import { Epi } from '@prisma/client';

export async function createEpi(epi: Epi): Promise<Epi> {
    return await prisma.epi.create({
        data: epi,
    });
    }
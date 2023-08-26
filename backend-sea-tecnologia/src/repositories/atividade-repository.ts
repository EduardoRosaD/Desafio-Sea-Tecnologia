import { Prisma } from '@prisma/client';
import { prisma } from '../config/database';

import { Atividade } from '@prisma/client';

export async function createAtividade(atividade: Atividade): Promise<Atividade> {
    return await prisma.atividade.create({
        data: atividade,
    });
    }
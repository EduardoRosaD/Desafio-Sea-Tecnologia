import { Prisma } from '@prisma/client';
import { prisma } from '../config/database';
import { Funcionario } from '@prisma/client';
import { Atividade } from '@prisma/client';
import { Epi } from '@prisma/client';
export async function createFuncionario(funcionario: Funcionario): Promise<Funcionario> {
    return await prisma.funcionario.create({
        data: funcionario,
    });
    }

export async function getAllFuncionarios(): Promise<Funcionario[]> {
    return await prisma.funcionario.findMany();
    }

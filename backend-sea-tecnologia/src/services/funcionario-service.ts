import { Funcionario, Atividade, Epi } from "@prisma/client";
import { createFuncionario, getAllFuncionarios, createAtividade, createEpi  } from "@/repositories";

export async function createFuncionarioService(funcionario: Funcionario, atividades: Atividade[],Epis: Epi[] ): Promise<void> {
        await createFuncionario(funcionario);
    atividades.forEach(async (atividade) => {
        await createAtividade(atividade);
    });
    Epis.forEach(async (epi) => {
        await createEpi(epi);
    })

}

export async function getAllFuncionariosService(): Promise<Funcionario[]> {
    return await getAllFuncionarios();
}
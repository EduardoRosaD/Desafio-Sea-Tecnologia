-- CreateTable
CREATE TABLE "Funcionario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "atestado" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,

    CONSTRAINT "Funcionario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Atividade" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Atividade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Epi" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "CA" TEXT NOT NULL,

    CONSTRAINT "Epi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AtividadeToFuncionario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EpiToFuncionario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_cpf_key" ON "Funcionario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "_AtividadeToFuncionario_AB_unique" ON "_AtividadeToFuncionario"("A", "B");

-- CreateIndex
CREATE INDEX "_AtividadeToFuncionario_B_index" ON "_AtividadeToFuncionario"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EpiToFuncionario_AB_unique" ON "_EpiToFuncionario"("A", "B");

-- CreateIndex
CREATE INDEX "_EpiToFuncionario_B_index" ON "_EpiToFuncionario"("B");

-- AddForeignKey
ALTER TABLE "_AtividadeToFuncionario" ADD CONSTRAINT "_AtividadeToFuncionario_A_fkey" FOREIGN KEY ("A") REFERENCES "Atividade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AtividadeToFuncionario" ADD CONSTRAINT "_AtividadeToFuncionario_B_fkey" FOREIGN KEY ("B") REFERENCES "Funcionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EpiToFuncionario" ADD CONSTRAINT "_EpiToFuncionario_A_fkey" FOREIGN KEY ("A") REFERENCES "Epi"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EpiToFuncionario" ADD CONSTRAINT "_EpiToFuncionario_B_fkey" FOREIGN KEY ("B") REFERENCES "Funcionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

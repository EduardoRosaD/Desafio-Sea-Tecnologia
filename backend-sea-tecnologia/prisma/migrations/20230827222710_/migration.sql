/*
  Warnings:

  - Added the required column `birthDate` to the `Funcionario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Funcionario" ADD COLUMN     "birthDate" TEXT NOT NULL;

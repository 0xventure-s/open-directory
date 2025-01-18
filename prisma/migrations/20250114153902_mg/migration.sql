/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Founder` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Startup` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Founder_id_key" ON "Founder"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Startup_id_key" ON "Startup"("id");

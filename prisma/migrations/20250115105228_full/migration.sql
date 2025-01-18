-- AlterTable
ALTER TABLE "Startup" ALTER COLUMN "investmentSerie" DROP NOT NULL,
ALTER COLUMN "investmentIcon" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "startup" TEXT NOT NULL,
    "Linkedin" TEXT NOT NULL,
    "Twitter" TEXT NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Venture" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "investmentStages" TEXT[],
    "sectors" TEXT[],
    "website" TEXT NOT NULL,

    CONSTRAINT "Venture_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_id_key" ON "Person"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Venture_id_key" ON "Venture"("id");

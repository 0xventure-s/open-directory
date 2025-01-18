-- CreateTable
CREATE TABLE "Startup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logosrc" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "marketType" TEXT NOT NULL,
    "marketIcon" TEXT NOT NULL,
    "typeName" TEXT NOT NULL,
    "typeIcon" TEXT NOT NULL,
    "investmentSerie" TEXT NOT NULL,
    "investmentIcon" TEXT NOT NULL,
    "socialWeb" TEXT NOT NULL,
    "socialLinkedin" TEXT NOT NULL,
    "socialTwitter" TEXT NOT NULL,

    CONSTRAINT "Startup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Founder" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "startupId" TEXT NOT NULL,

    CONSTRAINT "Founder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Founder" ADD CONSTRAINT "Founder_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

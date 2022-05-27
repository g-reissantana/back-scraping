-- CreateTable
CREATE TABLE "Imgs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "src" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Imgs_src_key" ON "Imgs"("src");

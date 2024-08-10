/*
 Warnings:
 
 - You are about to drop the column `playlistId` on the `Image` table. All the data in the column will be lost.
 - A unique constraint covering the columns `[imageId]` on the table `Playlist` will be added. If there are existing duplicate values, this will fail.
 - A unique constraint covering the columns `[imageId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
 
 */
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_playlistId_fkey";
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "playlistId";
-- AlterTable
ALTER TABLE "Playlist"
ADD COLUMN "imageId" TEXT;
-- CreateIndex
CREATE UNIQUE INDEX "Playlist_imageId_key" ON "Playlist"("imageId");
-- CreateIndex
CREATE UNIQUE INDEX "User_imageId_key" ON "User"("imageId");
-- AddForeignKey
ALTER TABLE "Playlist"
ADD CONSTRAINT "Playlist_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE
SET NULL ON UPDATE CASCADE;
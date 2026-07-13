import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GalleryService {
  constructor(private prisma: PrismaService) {}

  async getAllGalleryItems() {
    return this.prisma.gallery.findMany({
      include: { room: true },
    });
  }

  async addGalleryItem(data: { url: string; caption?: string; roomId?: string }) {
    return this.prisma.gallery.create({
      data,
    });
  }

  async deleteGalleryItem(id: string) {
    const item = await this.prisma.gallery.findUnique({ where: { id } });
    if (!item) throw new NotFoundException('Gallery item not found');
    return this.prisma.gallery.delete({ where: { id } });
  }
}

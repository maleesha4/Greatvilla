import { Controller, Get, Post, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { AuthGuard } from '../common/guards/auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/types/roles.enum';

@Controller('gallery')
export class GalleryController {
  constructor(private galleryService: GalleryService) {}

  @Get()
  getAllGalleryItems() {
    return this.galleryService.getAllGalleryItems();
  }

  @Post()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  addGalleryItem(@Body() data: { url: string; caption?: string; roomId?: string }) {
    return this.galleryService.addGalleryItem(data);
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  deleteGalleryItem(@Param('id') id: string) {
    return this.galleryService.deleteGalleryItem(id);
  }
}

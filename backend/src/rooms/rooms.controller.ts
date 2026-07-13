import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { AuthGuard } from '../common/guards/auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/types/roles.enum';

@Controller('rooms')
export class RoomsController {
  constructor(private roomsService: RoomsService) {}

  @Get()
  getAllRooms(
    @Query('roomTypeId') roomTypeId?: string,
    @Query('minPrice') minPrice?: number,
    @Query('maxPrice') maxPrice?: number,
    @Query('capacity') capacity?: number,
    @Query('status') status?: string,
  ) {
    return this.roomsService.getAllRooms({ roomTypeId, minPrice, maxPrice, capacity, status });
  }

  @Get('types')
  getRoomTypes() {
    return this.roomsService.getRoomTypes();
  }

  @Post('types')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  createRoomType(@Body() data: { name: string; description?: string }) {
    return this.roomsService.createRoomType(data);
  }

  @Get('amenities')
  getAmenities() {
    return this.roomsService.getAmenities();
  }

  @Get('facilities')
  getFacilities() {
    return this.roomsService.getFacilities();
  }

  @Get(':id')
  getRoomById(@Param('id') id: string) {
    return this.roomsService.getRoomById(id);
  }

  @Post()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  createRoom(@Body() dto: CreateRoomDto) {
    return this.roomsService.createRoom(dto);
  }

  @Put(':id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  updateRoom(@Param('id') id: string, @Body() dto: Partial<CreateRoomDto> & { status?: string }) {
    return this.roomsService.updateRoom(id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  deleteRoom(@Param('id') id: string) {
    return this.roomsService.deleteRoom(id);
  }
}

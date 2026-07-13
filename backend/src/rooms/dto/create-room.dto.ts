import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  roomTypeId: string;

  @IsNumber()
  @IsNotEmpty()
  pricePerNight: number;

  @IsNumber()
  @IsNotEmpty()
  capacity: number;
}

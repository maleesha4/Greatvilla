import { IsDateString, IsNotEmpty, IsArray, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsDateString()
  @IsNotEmpty()
  checkInDate: string;

  @IsDateString()
  @IsNotEmpty()
  checkOutDate: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  roomIds: string[];
}

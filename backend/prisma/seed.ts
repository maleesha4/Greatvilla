import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Clearing database tables...');
  try {
    await prisma.notification.deleteMany({});
    await prisma.review.deleteMany({});
    await prisma.payment.deleteMany({});
    await prisma.bookingRoom.deleteMany({});
    await prisma.booking.deleteMany({});
    await prisma.gallery.deleteMany({});
    await prisma.room.deleteMany({});
    await prisma.roomType.deleteMany({});
    await prisma.amenity.deleteMany({});
    await prisma.facility.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.promotion.deleteMany({});
  } catch (error) {
    console.log('No prior tables or failed to clear table records, continuing to seed.');
  }

  console.log('Seeding database records...');

  // 1. Create Users
  const adminPassword = await bcrypt.hash('admin123', 10);
  const userPassword = await bcrypt.hash('user123', 10);

  const admin = await prisma.user.create({
    data: {
      email: 'admin@greatvilla.com',
      password: adminPassword,
      firstName: 'Admin',
      lastName: 'Greatvilla',
      phone: '+1234567890',
      role: 'ADMIN',
    },
  });

  const user = await prisma.user.create({
    data: {
      email: 'john@gmail.com',
      password: userPassword,
      firstName: 'John',
      lastName: 'Doe',
      phone: '+1987654321',
      role: 'USER',
    },
  });

  // 2. Create Facilities
  const spa = await prisma.facility.create({
    data: { name: 'Spa & Wellness', description: 'Relaxing spa treatments and massage services', icon: 'spa' },
  });
  const pool = await prisma.facility.create({
    data: { name: 'Swimming Pool', description: 'Outdoor heated infinity pool', icon: 'pool' },
  });
  const gym = await prisma.facility.create({
    data: { name: 'Fitness Center', description: 'Fully equipped modern gym', icon: 'gym' },
  });
  const restaurant = await prisma.facility.create({
    data: { name: 'Fine Dining Restaurant', description: 'Gourmet restaurant serving local and international cuisine', icon: 'restaurant' },
  });

  // 3. Create Amenities
  const wifi = await prisma.amenity.create({
    data: { name: 'Free Wi-Fi', description: 'High-speed wireless internet access', icon: 'wifi' },
  });
  const ac = await prisma.amenity.create({
    data: { name: 'Air Conditioning', description: 'Individually controlled air conditioning', icon: 'ac' },
  });
  const tv = await prisma.amenity.create({
    data: { name: 'Smart TV', description: '4K Smart TV with premium channels and streaming services', icon: 'tv' },
  });
  const minibar = await prisma.amenity.create({
    data: { name: 'Mini Bar', description: 'Stocked minibar with refreshments', icon: 'minibar' },
  });

  // 4. Create Room Types
  const deluxeType = await prisma.roomType.create({
    data: {
      name: 'Deluxe Room',
      description: 'Spacious room with king-size bed, elegant decor, and scenic views.',
    },
  });

  const suiteType = await prisma.roomType.create({
    data: {
      name: 'Executive Suite',
      description: 'Luxurious suite featuring a separate living area, workspace, and premium services.',
    },
  });

  // 5. Create Rooms
  const room1 = await prisma.room.create({
    data: {
      name: 'Deluxe Suite 101',
      description: 'Elegant suite with private balcony, overlooking the villa gardens.',
      roomTypeId: deluxeType.id,
      pricePerNight: 120.0,
      capacity: 2,
      status: 'AVAILABLE',
      facilities: { connect: [{ id: pool.id }, { id: gym.id }] },
      amenities: { connect: [{ id: wifi.id }, { id: ac.id }, { id: tv.id }] },
    },
  });

  const room2 = await prisma.room.create({
    data: {
      name: 'Executive Suite 201',
      description: 'Presidential-style executive suite with private pool access and panoramic ocean views.',
      roomTypeId: suiteType.id,
      pricePerNight: 250.0,
      capacity: 4,
      status: 'AVAILABLE',
      facilities: { connect: [{ id: spa.id }, { id: pool.id }, { id: gym.id }, { id: restaurant.id }] },
      amenities: { connect: [{ id: wifi.id }, { id: ac.id }, { id: tv.id }, { id: minibar.id }] },
    },
  });

  // 6. Create Gallery Images
  await prisma.gallery.createMany({
    data: [
      { url: '/images/rooms/room1.jpg', caption: 'Deluxe Suite 101 bedroom view', roomId: room1.id },
      { url: '/images/rooms/room2.jpg', caption: 'Executive Suite 201 living area', roomId: room2.id },
    ],
  });

  // 7. Create Promotions
  await prisma.promotion.create({
    data: {
      code: 'WELCOME10',
      discountPercent: 10.0,
      startDate: new Date(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      isActive: true,
    },
  });

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PromotionsService = class PromotionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllPromotions() {
        return this.prisma.promotion.findMany();
    }
    async getPromotionByCode(code) {
        const promotion = await this.prisma.promotion.findUnique({
            where: { code },
        });
        if (!promotion) {
            throw new common_1.NotFoundException('Promotion code not found');
        }
        const now = new Date();
        if (!promotion.isActive || now < promotion.startDate || now > promotion.endDate) {
            throw new common_1.BadRequestException('Promotion code is expired or inactive');
        }
        return promotion;
    }
    async createPromotion(data) {
        return this.prisma.promotion.create({
            data: {
                code: data.code,
                discountPercent: Number(data.discountPercent),
                startDate: new Date(data.startDate),
                endDate: new Date(data.endDate),
                isActive: data.isActive ?? true,
            },
        });
    }
    async deletePromotion(id) {
        const promo = await this.prisma.promotion.findUnique({ where: { id } });
        if (!promo)
            throw new common_1.NotFoundException('Promotion not found');
        return this.prisma.promotion.delete({ where: { id } });
    }
};
exports.PromotionsService = PromotionsService;
exports.PromotionsService = PromotionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PromotionsService);
//# sourceMappingURL=promotions.service.js.map
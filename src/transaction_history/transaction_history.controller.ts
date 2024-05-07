import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TransactionHistoryService } from './transaction_history.service';
import { CreateTransactionHistoryDto } from './dto/create-transaction_history.dto';
import { UpdateTransactionHistoryDto } from './dto/update-transaction_history.dto';
import { ApiTags } from '@nestjs/swagger';
import { AdminGuard } from '../guards/admin.guard';

@ApiTags('transaction-history')
@Controller('transaction-history')
export class TransactionHistoryController {
  constructor(
    private readonly transactionHistoryService: TransactionHistoryService,
  ) {}
  @UseGuards(AdminGuard)
  @Post()
  create(@Body() createTransactionHistoryDto: CreateTransactionHistoryDto) {
    return this.transactionHistoryService.create(createTransactionHistoryDto);
  }

  @Get()
  findAll() {
    return this.transactionHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionHistoryService.findOne(+id);
  }
  @UseGuards(AdminGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransactionHistoryDto: UpdateTransactionHistoryDto,
  ) {
    return this.transactionHistoryService.update(
      +id,
      updateTransactionHistoryDto,
    );
  }
  
  @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionHistoryService.remove(+id);
  }
}

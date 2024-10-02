import { Module } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { QuoteController } from './quote.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DigitizingQuote, DigitizingQuoteSchema } from './entities/digitizing-quote.entity';
import { PatchQuote, PatchQuoteSchema } from './entities/patch-quote.entity';
import { VectorQuote, VectorQuoteSchema } from './entities/vector-quote.entity';

@Module({

  imports: [
    MongooseModule.forFeature([
      { name: DigitizingQuote.name, schema: DigitizingQuoteSchema },
      { name: PatchQuote.name, schema: PatchQuoteSchema },
      { name: VectorQuote.name, schema: VectorQuoteSchema },
    ]),
  ],
  controllers: [QuoteController],
  providers: [QuoteService],
})
export class QuoteModule {}

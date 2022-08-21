import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mars:qwerty123@online-shop.548qizw.mongodb.net/online-shop?retryWrites=true&w=majority',
    ),
    CategoryModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

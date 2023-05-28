import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FacturasModule } from './facturas/facturas.module';
import { EmpresasModule } from './empresas/empresas.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://al:al@cluster0.rot7dii.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule,
    FacturasModule,
    EmpresasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

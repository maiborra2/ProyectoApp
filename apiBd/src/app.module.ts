// @ts-ignore
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FacturasModule } from './facturas/facturas.module';
import { EmpresasModule } from './empresas/empresas.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://victorbisquertmoscardo:victorbisquertmoscardo@cluster0.z2f2sji.mongodb.net/?retryWrites=true&w=majority'),
    //MongooseModule.forRoot('mongodb+srv://root:admin@cluster0.dnv4dhd.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule,
    FacturasModule,
    EmpresasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

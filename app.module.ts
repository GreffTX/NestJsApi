import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { WeatherController } from "./weather.controller";
import { WeatherService } from "./weather.service";

@Module({
  imports: [],
  controllers: [AppController, WeatherController],
  components: [WeatherService]
})
export class ApplicationModule {}

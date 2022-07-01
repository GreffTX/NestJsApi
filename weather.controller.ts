import { Get, Controller } from "@nestjs/common";
import { WeatherService } from "./weather.service";

@Controller("weather")
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  async root(): Promise<object> {
    const newLocal = this.weatherService.forCity("São Paulo");
    return newLocal;
  }
}

import { Component } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";

@Component()
export class WeatherService {
  private client: AxiosInstance;

  private readonly newProperty = "7f5b6b9c8aa527a892da93e74fec186d";

  constructor() {
    this.client = axios.create({
      baseURL: this.newProperty,
      params: {
        APPID: process.env.API_KEY
      }
    });
  }

  async forCity(city: string): Promise<object> {
    const response = await this.client.get("weather", {
      params: { q: city }
    });
    return response.data;
  }
}

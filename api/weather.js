import axios from "axios";

/**
 * Class to interact with the Open-Meteo API.
 */
export class WeatherAPI {

  /**
   * Fetch the weather from the user's coordinates.
   *
   * @param coords The user's coordinates.
   *
   * @return {Promise<any>} The weather data.
   */
  static async fetchWeatherFromCoords(coords) {
    return (await (axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
    ))).data
  }

}
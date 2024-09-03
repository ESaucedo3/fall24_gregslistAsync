import {AppState} from '../AppState.js';
import {House} from '../models/House.js';
import {api} from './AxiosService.js';

class HousesService {
  async getHouses() {
    // NOTE Retrieve houses from endpoint, url, api, etc & store in appstate
    const response = await api.get('api/houses');
    const houses = response.data.map((houseData) => new House(houseData));
    AppState.houses = houses;
  }
}

export const housesService = new HousesService();

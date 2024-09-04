import {AppState} from '../AppState.js';
import {housesService} from '../services/HousesService.js';
import {getFormData} from '../utils/FormHandler.js';
import {Pop} from '../utils/Pop.js';
import {setHTML} from '../utils/Writer.js';

export class HousesController {
  constructor() {
    this.getHouses();
    AppState.on('houses', this.drawHouses);
  }

  async getHouses() {
    try {
      await housesService.getHouses();
    } catch (e) {
      Pop.error(e);
      console.error(e);
    }
  }

  drawHouses() {
    const houses = AppState.houses;
    let houseContent = '';
    houses.forEach((house) => (houseContent += house.houseCardTemplate));
    setHTML('houses', houseContent);
  }

  async createHouse() {
    event.preventDefault();
    const form = event.target;
    const houseFormData = getFormData(form);
    await housesService.createHouse(houseFormData);
    Pop.toast('House Created', 'info');
  }
}

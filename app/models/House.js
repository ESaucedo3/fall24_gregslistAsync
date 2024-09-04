import {generateId} from '../utils/GenerateId.js';
import {Profile} from './Profile.js';

export class House {
  constructor(data) {
    this.id = data.id;
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.levels = data.levels;
    this.imgUrl = data.imgUrl;
    this.year = data.year;
    this.price = data.price;
    this.description = data.description;
    this.creatorId = data.creatorId;
    this.creator = data.creator;
  }

  get houseCardTemplate() {
    return `<div class="col-md-3">
              <div class="card h-100">
                <img class="house-img" src="${this.imgUrl}" alt="House" />
                <div class="card-body text-center">
                  <h6>Year ${this.year}</h6>
                  <p>${this.bedrooms} Bedrooms | ${this.bathrooms} Bathrooms | ${this.levels} Levels</p>
                  <p>${this.description}</p>
                  <h5>Price: $${this.price}</h5>
                  <div class="text-center">
                    <button type="button" class="btn btn-outline-dark rounded-pill px-2">Purchase</button>
                  </div>
                </div>
              </div>
            </div> `;
  }
}

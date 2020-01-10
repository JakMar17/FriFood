import {Component, OnInit, Renderer2} from '@angular/core';
import {FrifoodPodatkiService} from "../../services/frifood-podatki.service";

@Component({
  selector: 'app-restaurantadd',
  templateUrl: './restaurantadd.component.html',
  styleUrls: ['./restaurantadd.component.css']
})
export class RestaurantaddComponent implements OnInit {

  constructor(private renderer: Renderer2, private FrifoodPodatkiService: FrifoodPodatkiService) { }

  public restaurantForm = {
    name: '',
    description: '',
    address: '',
    date: '',
    rating: 0,
    mealPrice: 0,
    student: false,
    studentPrice: 0,
    timeTable: {
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: '',
    },
    comments: '',
    icon: '',
    front: '',
  };

  public formError = '';

  public addNewRestaurant(): void {
    this.restaurantForm.name = (<HTMLInputElement>document.getElementById("inputRestaurantName")).value;
    this.restaurantForm.description = (<HTMLInputElement>document.getElementById("inputRestaurantDescription")).value;
    this.restaurantForm.address = (<HTMLInputElement>document.getElementById("inputRestaurantAddress")).value;
    this.restaurantForm.student = (<HTMLInputElement>document.getElementById("inputBoniYes")).checked;
    this.restaurantForm.studentPrice = +(<HTMLInputElement>document.getElementById("inputBoniCost")).value;
    this.restaurantForm.mealPrice = +(<HTMLInputElement>document.getElementById("inputMealCost")).value;

    if ((<HTMLInputElement>document.getElementById("openMonday")).checked) {
      this.restaurantForm.timeTable.monday = 'ZAPRTO';
    } else {
      this.restaurantForm.timeTable.monday = (<HTMLInputElement>document.getElementById("inputMondayFrom")).value
        + '-' + (<HTMLInputElement>document.getElementById("inputMondayTo")).value
    }

    if ((<HTMLInputElement>document.getElementById("openTuesday")).checked) {
      this.restaurantForm.timeTable.tuesday = 'ZAPRTO';
    } else {
      this.restaurantForm.timeTable.tuesday = (<HTMLInputElement>document.getElementById("inputTuesdayFrom")).value
        + '-' + (<HTMLInputElement>document.getElementById("inputTuesdayTo")).value
    }

    if ((<HTMLInputElement>document.getElementById("openWednesday")).checked) {
      this.restaurantForm.timeTable.wednesday = 'ZAPRTO';
    } else {
      this.restaurantForm.timeTable.wednesday = (<HTMLInputElement>document.getElementById("inputWednesdayFrom")).value
        + '-' + (<HTMLInputElement>document.getElementById("inputWednesdayTo")).value
    }

    if ((<HTMLInputElement>document.getElementById("openThursday")).checked) {
      this.restaurantForm.timeTable.thursday = 'ZAPRTO';
    } else {
      this.restaurantForm.timeTable.thursday = (<HTMLInputElement>document.getElementById("inputThursdayFrom")).value
        + '-' + (<HTMLInputElement>document.getElementById("inputThursdayTo")).value
    }

    if ((<HTMLInputElement>document.getElementById("openFriday")).checked) {
      this.restaurantForm.timeTable.friday = 'ZAPRTO';
    } else {
      this.restaurantForm.timeTable.friday = (<HTMLInputElement>document.getElementById("inputFridayFrom")).value
        + '-' + (<HTMLInputElement>document.getElementById("inputFridayTo")).value
    }

    if ((<HTMLInputElement>document.getElementById("openSaturday")).checked) {
      this.restaurantForm.timeTable.saturday = 'ZAPRTO';
    } else {
      this.restaurantForm.timeTable.saturday = (<HTMLInputElement>document.getElementById("inputSaturdayFrom")).value
        + '-' + (<HTMLInputElement>document.getElementById("inputSaturdayTo")).value
    }

    if ((<HTMLInputElement>document.getElementById("openSunday")).checked) {
      this.restaurantForm.timeTable.sunday = 'ZAPRTO';
    } else {
      this.restaurantForm.timeTable.sunday = (<HTMLInputElement>document.getElementById("inputSundayFrom")).value
        + '-' + (<HTMLInputElement>document.getElementById("inputSundayTo")).value
    }

    this.restaurantForm.icon = (<HTMLInputElement>document.getElementById("file2")).value;
    this.restaurantForm.front = (<HTMLInputElement>document.getElementById("file")).value;

    this.FrifoodPodatkiService.addNewRestaurant(this.restaurantForm).then(restaurant => {
      console.log("Restavracija dodana", restaurant)
    });

  }

  onFileSelectIcon(event) {
    if (event.target.files.length > 0) {
      this.restaurantForm.icon = event.target.files[0];
      let image = (<HTMLInputElement>document.getElementById("output2"));
      image.src = URL.createObjectURL(event.target.files[0]);
    }
  }

  onFileSelectFront(event) {
    if (event.target.files.length > 0) {
      this.restaurantForm.front = event.target.files[0];
      let image = (<HTMLInputElement>document.getElementById("output"));
      image.src = URL.createObjectURL(event.target.files[0]);
    }
  }

  ngOnInit() {

    const script = this.renderer.createElement('script');
    script.src = `./assets/javascripts/restaurantAddValidation.js`;
    this.renderer.appendChild(document.head, script);
  }

}

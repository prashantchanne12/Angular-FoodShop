import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-dish-home',
  templateUrl: './add-dish-home.component.html',
  styleUrls: ['./add-dish-home.component.css'],
})
export class AddDishHomeComponent implements OnInit {
  categories = [
    { value: 'Indian', viewValue: 'Indian' },
    { value: 'Mexican', viewValue: 'Mexican' },
    { value: 'Italian', viewValue: 'Italian' },
    { value: 'Continetal', viewValue: 'Continetal' },
    { value: 'Chinese', viewValue: 'Chinese' },
  ];

  name = new FormControl('', [Validators.required]);
  image = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  category = new FormControl('', [Validators.required]);
  price = new FormControl(0, [Validators.required, Validators.min(1)]);
  // edit = false;
  // id = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.queryParams.subscribe((params) => {
    //   if (params.edit && params.id) {
    //     this.edit = params.edit;
    //     this.id = params.id;
    //   }
    //   console.log(this.edit, this.id);
    // });
  }
}

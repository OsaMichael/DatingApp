import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
registerModel = false;
values: any;

  constructor(private http: Http) { }

  ngOnInit() {
    // this.getValues();
  }

  registerToggle() {
    this.registerModel = true;
  }

  // getValues() {
  //   this.http.get('http://localhost:5050/api/values').subscribe(response => {
  //     this.values = response.json();
  //   });
  // }

  cancelRegisterMode(registerModel: boolean) {
this.registerModel = registerModel;
  }
}

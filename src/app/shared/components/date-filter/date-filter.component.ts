import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements OnInit {

  @Output() SelectedDate = new EventEmitter();

  date: any = {
    'start_date': "",
    'end_date': "",
  }


  constructor() { }

  ngOnInit(): void {
   this.init_date();
  }

  init_date() {
     const today = this.getToday();

      this.date.start_date = today;
      this.date.end_date = today;
  }

  getToday(){
    const now = new Date();
    const day = ("0" + now.getDate()).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    return now.getFullYear()+"-"+(month)+"-"+(day) ;
  }


  filter(){
    this.SelectedDate.emit(this.date);
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  constructor() {
  }
  date = 'dd/mm/yyyy';
  distance: number = 0;
  time: number = 0;
  items = Records;
  ngOnInit(): void {
  }
}
export class Records{
  date = 'dd/mm/yyyy';
  distance: number = 0;
  time: number = 0;
}


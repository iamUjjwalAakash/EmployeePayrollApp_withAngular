import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-and-add',
  templateUrl: './search-and-add.component.html',
  styleUrls: ['./search-and-add.component.css']
})
export class SearchAndAddComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }



}

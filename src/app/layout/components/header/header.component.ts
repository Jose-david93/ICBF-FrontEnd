import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.searchInit();
  }

  searchInit(): void {
    $(".search-icon").click(function () {
      $(this).parent().parent().addClass("active");
    });
  
    $(".search-wrapper .btn-close").click(function () {
      $(this).parent().removeClass("active");
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-upload-edit-details',
  templateUrl: './stock-upload-edit-details.page.html',
  styleUrls: ['./stock-upload-edit-details.page.scss'],
})
export class StockUploadEditDetailsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  save(){
    this.router.navigateByUrl('/stock-upload-details');
  }
}

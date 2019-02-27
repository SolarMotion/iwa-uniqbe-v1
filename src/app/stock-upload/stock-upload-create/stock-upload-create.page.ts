import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, Event, NavigationEnd } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { DdlService } from "./../../services/ddl.service";
import { IDdlResult } from "./../../models/ddl.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-stock-upload-create",
  templateUrl: "./stock-upload-create.page.html",
  styleUrls: ["./stock-upload-create.page.scss"]
})
export class StockUploadCreatePage implements OnInit, OnDestroy {
  centerList: IDdlResult;
  navigationSubscription: Subscription;
   createForm: FormGroup;

  constructor(private router: Router, private ddlService: DdlService) {}

  ngOnInit() {
    this.getCenterList();

    this.navigationSubscription = this.router.events.subscribe(
      (event: Event) => {
        if (
          event instanceof NavigationEnd &&
          event.url == "/stock-upload-create"
        ) {
          this.getCenterList();
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  private getCenterList() {
    this.centerList = this.ddlService.getCenter_Wh();
  }

  save() {
    
    //this.router.navigateByUrl("/stock-upload-details");
  }
}

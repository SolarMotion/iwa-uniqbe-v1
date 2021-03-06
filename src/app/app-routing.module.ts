import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    canActivate: [AuthGuard],
    loadChildren: "./home/home.module#HomePageModule"
  },
  {
    path: "login",
    loadChildren: "./public/login/login.module#LoginPageModule"
  },
  {
    path: "forgot-password",
    loadChildren:
      "./public/forgot-password/forgot-password.module#ForgotPasswordPageModule"
  },
  {
    path: "stock-upload-create",
    canActivate: [AuthGuard],
    loadChildren:
      "./stock-upload/stock-upload-create/stock-upload-create.module#StockUploadCreatePageModule"
  },
  {
    path: "stock-upload-listing",
    canActivate: [AuthGuard],
    loadChildren:
      "./stock-upload/stock-upload-listing/stock-upload-listing.module#StockUploadListingPageModule"
  },
  {
    path: "stock-upload-details/:stockUploadID",
    canActivate: [AuthGuard],
    loadChildren:
      "./stock-upload/stock-upload-details/stock-upload-details.module#StockUploadDetailsPageModule"
  },
  {
    path: "stock-upload-edit-details/:stockUploadID",
    canActivate: [AuthGuard],
    loadChildren:
      "./stock-upload/stock-upload-edit-details/stock-upload-edit-details.module#StockUploadEditDetailsPageModule"
  },
  {
    path: "stock-upload-create-item/:stockUploadID",
    canActivate: [AuthGuard],
    loadChildren:
      "./stock-upload/stock-upload-create-item/stock-upload-create-item.module#StockUploadCreateItemPageModule"
  },
  {
    path: "stock-upload-item-details/:stockUploadID/:storageStockUploadItemID",
    canActivate: [AuthGuard],
    loadChildren:
      "./stock-upload/stock-upload-item-details/stock-upload-item-details.module#StockUploadItemDetailsPageModule"
  },
  {
    path: "fulfillment-listing",
    canActivate: [AuthGuard],
    loadChildren:
      "./fulfillment/fulfillment-listing/fulfillment-listing.module#FulfillmentListingPageModule"
  },
  {
    path: "fulfillment-details/:orderID/:fulfillmentID",
    canActivate: [AuthGuard],
    loadChildren:
      "./fulfillment/fulfillment-details/fulfillment-details.module#FulfillmentDetailsPageModule"
  },
  {
    path: "fulfillment-edit-details/:orderID/:fulfillmentID",
    canActivate: [AuthGuard],
    loadChildren:
      "./fulfillment/fulfillment-edit-details/fulfillment-edit-details.module#FulfillmentEditDetailsPageModule"
  },
  {
    path: "fulfillment-item-details",
    canActivate: [AuthGuard],
    loadChildren:
      "./fulfillment/fulfillment-item-details/fulfillment-item-details.module#FulfillmentItemDetailsPageModule"
  },
  {
    path: "fulfillment-reject-remark",
    canActivate: [AuthGuard],
    loadChildren:
      "./fulfillment/fulfillment-reject-remark/fulfillment-reject-remark.module#FulfillmentRejectRemarkPageModule"
  },
  {
    path: "sales-order-listing",
    canActivate: [AuthGuard],
    loadChildren:
      "./sales-order/sales-order-listing/sales-order-listing.module#SalesOrderListingPageModule"
  },
  {
    path: "sales-order-details",
    canActivate: [AuthGuard],
    loadChildren:
      "./sales-order/sales-order-details/sales-order-details.module#SalesOrderDetailsPageModule"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

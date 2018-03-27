import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewDetailPage } from './review-detail';

@NgModule({
  declarations: [
    ReviewDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewDetailPage),
  ],
})
export class ReviewDetailPageModule {}

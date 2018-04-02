import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { RestaurantService } from '../../providers/restaurant/restaurants.service';


@IonicPage()
@Component({
    selector: 'page-reviews',
    templateUrl: 'reviews.html',
})
export class ReviewsPage {
    reviews: {
        name: string,
        comments: string,
        rating: string
    };
    id: string;


    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public restaurantService: RestaurantService,
        public alertCtrl: AlertController,
        public toastCtrl: ToastController) {
            this.id = this.navParams.data.id;

            this.restaurantService.restaurantReviews(this.id)
            .subscribe(reviews => {
                this.reviews = reviews;
            });
        }


        showReview(i) {
            let alert = this.alertCtrl.create({
                title: `Avaliação de ${this.reviews[i].name}!`,
                subTitle: `${this.reviews[i].comments}`,
                buttons: ['OK']
            });
            alert.setMode("ios");
            alert.present();
        }

        newReview() {
            let alert = this.alertCtrl.create({
                title: 'Nova avaliação',
                inputs: [
                    {
                        name: 'rating',
                        placeholder: 'Nota',
                        type: 'number'
                    },
                    {
                        name: 'name',
                        placeholder: 'Nome',
                        type: 'string'
                    },
                    {
                        name: 'comments',
                        placeholder: 'Comentário',
                        type: 'string'
                    },
                    {
                        name: 'restaurantId',
                        value: `${this.id}`,
                        type: 'hidden'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: data => {
                            let toast = this.toastCtrl.create({
                                message: 'Comentário cancelado.',
                                duration: 3000,
                            });
                            toast.present();
                        }
                    },
                    {
                        text: 'Salvar',
                        handler: data => {
                            if (alert.data.inputs[0].value != '' && alert.data.inputs[1].value != '' && alert.data.inputs[2].value != ''){
                                let review = JSON.stringify(data);
                                this.restaurantService.newReview(this.id,JSON.parse(review));

                                let toast = this.toastCtrl.create({
                                    message: 'Comentário adicionado.',
                                    duration: 3000,
                                });
                                toast.present();
                                alert.setMode("ios");
                            }else {
                                let toast = this.toastCtrl.create({
                                    message: 'Informações inválidas.',
                                    duration: 3000,
                                });
                                toast.present();
                            }
                        }
                    }
                ]
            })
            alert.present();
            alert.setMode("ios");
        }
    }

import { AlertController, ToastController  } from 'ionic-angular';
import { CartService } from '../cart/cart.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantService } from '../restaurant/restaurants.service';

@Injectable()
export class NotificationProvider {

    constructor(
        public alertCtrl: AlertController,
        public cartService: CartService,
        public http: HttpClient,
        public restaurantService: RestaurantService,
        public toastCtrl: ToastController) { }


        //MENSAGEM DE BEM-VINDO
        welcomeLogin(login){
        let toast = this.toastCtrl.create({
            message: "Olá ${nome}, bem-vindo.",
            duration: 3000,
        });
        toast.present();
    }

    //CONFIRMAÇÃO PARA ADICIONAR ITEM NO CARRINHO
    confirmAdd(item) {
    let alert = this.alertCtrl.create({
        title: `${item.name}`,
        subTitle: `${item.description}`,
        message: `R$${item.price}0`,
        buttons: [{
            text: 'Confirmar',
            handler: () => {
                this.cartService.addItem(item);


                let toast = this.toastCtrl.create({
                    message: `${item.name} adicionado no carrinho.`,
                    duration: 3000,
                });
                toast.present();
            }
        }
    ]
});
alert.setMode("ios");
alert.present();
}

//MENSAGEM PARA LOGAR AO TENTAR ACESSAR O MENU
messageAuth() {
let toast = this.toastCtrl.create({
    message: 'Por favor, efetue o login para continuar.',
    duration: 3000,
});
toast.present();
}

//VER MAIS EM AVALIAÇÕES
showReview(review) {
let alert = this.alertCtrl.create({
    title: `Avaliação de ${review.name}!`,
    subTitle: `${review.comments}`,
    buttons: ['OK']
});
alert.setMode("ios");
alert.present();
}

//NOVA AVALIAÇÃO
newReview(id){
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
            value: `${id}`,
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
                    this.restaurantService.newReview(id, data); //salvar o comentário no db

                    let toast = this.toastCtrl.create({
                        message: 'Comentário adicionado.',
                        duration: 3000,
                    });
                    toast.present();
                    alert.setMode("ios");
                }else {
                    let toast = this.toastCtrl.create({
                        message: 'Comentário inválido.',
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

//ITEM REMOVIDO
itemRemoved(item) {
let toast = this.toastCtrl.create({
    message: `${item.name} removido do carrinho.`,
    duration: 3000,
});
toast.present();
}

credentialIncorrect() {
    let toast = this.toastCtrl.create({
        message: `Dados inválidos.`,
        duration: 3000,
    });
    toast.present();
}

passwordIncorrect() {
    let toast = this.toastCtrl.create({
        message: `Senhas não coincidem.`,
        duration: 3000,
    });
    toast.present();
}

addressIncomplete() {
    let toast = this.toastCtrl.create({
        message: `Preencha todos os campos.`,
        duration: 3000,
    });
    toast.present();
}
}

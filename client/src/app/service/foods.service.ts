import { CartItem } from './cart.service';

export class FoodService {
  foods: CartItem[] = [
    {
      id: 1,
      name: 'Corn Pizza',
      desc: 'Corn pizza, hand tossed with extra cheeze',
      price: 250,
      category: ['Italian', 'Fast food'],
      imgUrl:
        'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/m/k/p43-15695730475d8dc8b749874.jpg?tr=tr:n-large',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Pav Bhaju',
      desc: 'Pav bhaji, 2 pav with extra butter',
      price: 120,
      category: ['Streat food', 'Meal'],
      imgUrl:
        'https://images.news18.com/ibnkhabar/uploads/2021/06/pav-bhaji.jpg',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Sada Dosa',
      desc: 'Sada Dosa, chutani, sambar',
      price: 100,
      imgUrl:
        'https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg',
      quantity: 1,
      category: ['Breakfast', 'South Indian'],
    },
    {
      id: 4,
      name: 'Chana Masala',
      desc: 'Chana masla, 1 bowl with gravy',
      price: 120,
      imgUrl:
        'https://www.seriouseats.com/thmb/HaBfNjG3Fr61qU6_1h9lHY_3Yl0=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__03__20160328-channa-masala-recipe-6-ae4913c04d5b43e9acef2917a74aa5fc.jpg',
      quantity: 1,
      category: ['North Indian'],
    },
    {
      id: 5,
      name: 'Masala Dosa',
      desc: 'Sada Dosa, chutani, sambar',
      price: 135,
      imgUrl:
        'https://apollosugar.com/wp-content/uploads/2018/12/Masala-Dosa-1024x683.jpg',
      quantity: 1,
      category: ['Breakfast', 'South Indian'],
    },
  ];

  addNewFood(item: CartItem) {
    this.foods.push(item);
  }

  deleteFood(id: number) {}

  editFood(id: number, data: string) {}
}

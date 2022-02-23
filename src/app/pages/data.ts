import { Food } from '../interfaces/food.model';
const item1: Food = {
    id: '1',
    name: 'Break Fast',
    description: 'usually eaten in the morning',
    price: 50,
    icon: 'free_breakfast',
    img: 'assets/img/breakfast.jpg',
}

const item2: Food = {
    id: '2',
    name: 'Pizza',
    description: 'Up to 6 person',
    price: 250,
    icon: 'local_pizza',
    img: 'assets/img/pizza.jpg',
}

const item3: Food = {
    id: '3',
    name: 'Dinner',
    description: 'Doughnuts with banana',
    price: 70,
    icon: 'brunch_dining',
    img: 'assets/img/dinner.jpg',
}

export const menu:Food[] = [item1, item2, item3];
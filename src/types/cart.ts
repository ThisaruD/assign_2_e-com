export interface CartItem {
    id: number;
    item: string;
    price: number;
    itemQuantity: number;
    image: string;
  }
  
  export interface CartState {
    Cart: CartItem[];
  }
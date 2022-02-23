export interface BillState {
    total: number;
    orders: {
        breakFast: number;
        pizza: number;
        dinner: number;
    }
}
export interface BillState {
    // id: number;
    total: number;
    orders: {
        breakFast: number;
        pizza: number;
        dinner: number;
    }
}
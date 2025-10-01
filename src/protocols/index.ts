export interface Carrier {
    id: number;
    name: string;
    code: number;
}

export interface Client {
    id?: number;
    document: string;
}

export interface Phone {
    id?: number;
    number: string;
    name: string;
    description: string;
    carrierId: number;
    clientId: number;
}

export interface Recharge {
    id?: number;
    phoneId: number;
    amount: number;
    createdAt?: Date;
}

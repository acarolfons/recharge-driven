export type Carrier ={
    id: number;
    name: string;
    code: number;
}

export type Client ={
    id?: number;
    document: string;
}

export type Phone ={
    id?: number;
    number: string;
    name: string;
    description: string;
    carrierId: number;
    clientId: number;
}

export type Recharge ={
    id?: number;
    phoneId: number;
    amount: number;
    createdAt?: Date;
}
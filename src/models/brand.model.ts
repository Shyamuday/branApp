export interface ListResponse {
    // brand: string,
    count: number,
    next: any,
    previous: any,
    results: Brand[]
}


export interface Brand {
    id?: string,
    name: string,
    display_name?: string | null,
    logo: string,
    description?: string | null
}




export enum ButtonType {
    Add = 'Add',
    Update = 'Update',
}
// export enum brandButton {
//     Add = 'Add',
//     Update = 'Update',
// }



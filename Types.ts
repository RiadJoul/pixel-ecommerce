export type Product = {
    id: number,
    title: string,
    price: number,
    imageSrc: string,
    imageAlt: string,
    apps: string[],
    panicButton: boolean,
    usbWipe: boolean,
    VPN: boolean,
}


export type Order = {
    orderId: string,
    products: Product[],
    customerEmail: string,
    customerAddress: string,
}


export const apps = ["WhatsApp", "Signal", "Telegram", "Viber", "Molly", "Session", "Threema", "Wickr", "ProtonMail"];
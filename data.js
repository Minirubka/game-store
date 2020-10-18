const store = {
    name: "Games",
    address: function () {
        console.log(`${this.country_city}, ${this.street}, ${this.house}`);
    },
    country_city: "Ukraine, Odessa",
    street: "Bocharova 1",
    house: "number 5",
    phone: "+380963956134",
}

const products = [
    {
        id: 1,
        title: "Titan fall 2",
        price: '1200 руб',
        discount: "50%",
        preview: './images/titanfall2.jpg',
    },
    {
        id: 2,
        title: "Fallout 4",
        price: '999 руб',
        discount: "39%",
        preview: './images/fallout4.jpg',
    },
    {
        id: 3,
        title: "Far Cry 5",
        price: '499 руб',
        discount: "85%",
        preview: './images/farcry5.jpg',
    },
    {
        id: 4,
        title: "DARK SOULS 3 – DELUXE EDITION",
        price: '699 руб',
        discount: "80%",
        preview: './images/darksouls3.jpg',
    },
    {
        id: 5,
        title: "Prey",
        price: '899 руб',
        discount: "75%",
        preview: './images/prey.jpg',
    },
    {
        id: 6,
        title: "Grand Theft Auto V",
        price: '199 руб',
        discount: "60%",
        preview: './images/gta5.jpg',
    },
    {
        id: 7,
        title: "Borderlands 3",
        price: '1499 руб',
        discount: "50%",
        preview: './images/borderlands3.jpg',
    },
]

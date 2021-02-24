const AVATAR_URL = `https://i.pravatar.cc/128`;

const getImageMock = (seed) => {
  return `https://picsum.photos/260/200?${seed}`;
};

export default [
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `${AVATAR_URL}?rnd=${Math.random()}`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "id": 1,
    "images": [getImageMock(1), getImageMock(2)],
    "is_favorite": false,
    "is_premium": true,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": getImageMock(1),
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  },
  {
    "bedrooms": 2,
    "city": {
      "location": {
        "latitude": 48.8589507,
        "longitude": 2.2770211,
        "zoom": 10
      },
      "name": `Paris`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`],
    "host": {
      "avatar_url": `${AVATAR_URL}?rnd=${Math.random()}`,
      "id": 5,
      "is_pro": true,
      "name": `Anastasiia`
    },
    "id": 2,
    "images": [getImageMock(3), getImageMock(4), getImageMock(5)],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": getImageMock(3),
    "price": 130,
    "rating": 4.8,
    "title": `Not Beautiful & luxurious studio at great location`,
    "type": `flat`
  },
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.35514938496378,
        "longitude": 4.673877537499948,
        "zoom": 10
      },
      "name": `Cologne`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Berlin.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `${AVATAR_URL}?rnd=${Math.random()}`,
      "id": 7,
      "is_pro": true,
      "name": `Alexandra`
    },
    "id": 3,
    "images": [getImageMock(6), getImageMock(7)],
    "is_favorite": false,
    "is_premium": true,
    "location": {
      "latitude": 52.5069704,
      "longitude": 13.2846525,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": getImageMock(7),
    "price": 140,
    "rating": 4.8,
    "title": `Crazy flat at mediocre location`,
    "type": `apartment`
  },
  {
    "bedrooms": 4,
    "city": {
      "location": {
        "latitude": 50.0598058,
        "longitude": 14.3255445,
        "zoom": 10
      },
      "name": `Brussels`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Prague.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `${AVATAR_URL}?rnd=${Math.random()}`,
      "id": 9,
      "is_pro": true,
      "name": `Anna`
    },
    "id": 4,
    "images": [getImageMock(8), getImageMock(9)],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 50.0598058,
      "longitude": 14.3255445,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": getImageMock(8),
    "price": 150,
    "rating": 4.8,
    "title": `Nice and cozy`,
    "type": `flat`
  }
];

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
      "latitude": 52.3909553943508,
      "longitude": 4.85309666406198,
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
    "id": 5,
    "images": [getImageMock(1), getImageMock(2)],
    "is_favorite": false,
    "is_premium": true,
    "location": {
      "latitude": 52.369553943508,
      "longitude": 4.85309666406198,
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
    "id": 6,
    "images": [getImageMock(1), getImageMock(2)],
    "is_favorite": false,
    "is_premium": true,
    "location": {
      "latitude": 52.3909553943508,
      "longitude": 4.929309666406198,
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
    "id": 7,
    "images": [getImageMock(1), getImageMock(2)],
    "is_favorite": false,
    "is_premium": true,
    "location": {
      "latitude": 52.3809553943508,
      "longitude": 4.939309666406198,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": getImageMock(1),
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  },
];

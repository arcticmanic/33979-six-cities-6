import {initialState as userData} from '../../store/user-data/reducer';
import {initialState as pageData} from '../../store/page-data/reducer';
import {initialState as offersData} from '../../store/offers-data/reducer';
import {initialState as currentOfferData} from '../../store/current-offer-data/reducer';
import {AuthorizationStatus, CityInfo, FetchStatus, SortType} from '../../const';

export const notEmptyStore = {
  DATA: {
    offers: [
      {
        "city": {
          "name": `Paris`,
          "location": {
            "latitude": 48.85661,
            "longitude": 2.351499,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": false,
        "is_premium": true,
        "rating": 3,
        "type": `room`,
        "bedrooms": 1,
        "max_adults": 1,
        "price": 169,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 48.83861,
          "longitude": 2.350499,
          "zoom": 16
        },
        "id": 1
      },
      {
        "city": {
          "name": `Brussels`,
          "location": {
            "latitude": 50.846557,
            "longitude": 4.351697,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": false,
        "is_premium": false,
        "rating": 4.8,
        "type": `apartment`,
        "bedrooms": 5,
        "max_adults": 6,
        "price": 310,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 50.844556999999995,
          "longitude": 4.346697,
          "zoom": 16
        },
        "id": 2
      },
      {
        "city": {
          "name": `Cologne`,
          "location": {
            "latitude": 50.938361,
            "longitude": 6.959974,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": false,
        "is_premium": true,
        "rating": 4.2,
        "type": `hotel`,
        "bedrooms": 4,
        "max_adults": 6,
        "price": 182,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 50.950361,
          "longitude": 6.961974,
          "zoom": 16
        },
        "id": 3
      },
      {
        "city": {
          "name": `Brussels`,
          "location": {
            "latitude": 50.846557,
            "longitude": 4.351697,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": false,
        "is_premium": false,
        "rating": 5,
        "type": `room`,
        "bedrooms": 1,
        "max_adults": 1,
        "price": 115,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 50.849557,
          "longitude": 4.374696999999999,
          "zoom": 16
        },
        "id": 4
      },
      {
        "city": {
          "name": `Amsterdam`,
          "location": {
            "latitude": 52.37454,
            "longitude": 4.897976,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": false,
        "is_premium": false,
        "rating": 3.3,
        "type": `hotel`,
        "bedrooms": 4,
        "max_adults": 5,
        "price": 457,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 52.36354,
          "longitude": 4.889976,
          "zoom": 16
        },
        "id": 5
      },
      {
        "city": {
          "name": `Brussels`,
          "location": {
            "latitude": 50.846557,
            "longitude": 4.351697,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": false,
        "is_premium": false,
        "rating": 4.8,
        "type": `house`,
        "bedrooms": 2,
        "max_adults": 3,
        "price": 525,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 50.827557,
          "longitude": 4.336697,
          "zoom": 16
        },
        "id": 6
      },
      {
        "city": {
          "name": `Dusseldorf`,
          "location": {
            "latitude": 51.225402,
            "longitude": 6.776314,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": false,
        "is_premium": false,
        "rating": 4,
        "type": `house`,
        "bedrooms": 3,
        "max_adults": 9,
        "price": 117,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 51.214402,
          "longitude": 6.764314000000001,
          "zoom": 16
        },
        "id": 7
      },
      {
        "city": {
          "name": `Cologne`,
          "location": {
            "latitude": 50.938361,
            "longitude": 6.959974,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": false,
        "is_premium": false,
        "rating": 3.1,
        "type": `house`,
        "bedrooms": 4,
        "max_adults": 4,
        "price": 983,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 50.957361,
          "longitude": 6.9509739999999995,
          "zoom": 16
        },
        "id": 8
      },
      {
        "city": {
          "name": `Hamburg`,
          "location": {
            "latitude": 53.550341,
            "longitude": 10.000654,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": false,
        "is_premium": false,
        "rating": 3.2,
        "type": `room`,
        "bedrooms": 1,
        "max_adults": 1,
        "price": 182,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 53.565341000000004,
          "longitude": 9.978654,
          "zoom": 16
        },
        "id": 9
      },
      {
        "city": {
          "name": `Hamburg`,
          "location": {
            "latitude": 53.550341,
            "longitude": 10.000654,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": false,
        "is_premium": false,
        "rating": 3.3,
        "type": `hotel`,
        "bedrooms": 2,
        "max_adults": 9,
        "price": 271,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 53.546341000000005,
          "longitude": 10.022654000000001,
          "zoom": 16
        },
        "id": 10
      },
      {
        "city": {
          "name": `Amsterdam`,
          "location": {
            "latitude": 52.37454,
            "longitude": 4.897976,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": true,
        "is_premium": false,
        "rating": 2.8,
        "type": `house`,
        "bedrooms": 2,
        "max_adults": 3,
        "price": 638,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 52.36354,
          "longitude": 4.911976,
          "zoom": 16
        },
        "id": 11
      }
    ],
    isOffersLoaded: true,
    favoriteOffers: [
      {
        "city": {
          "name": `Paris`,
          "location": {
            "latitude": 48.85661,
            "longitude": 2.351499,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": true,
        "is_premium": true,
        "rating": 3,
        "type": `room`,
        "bedrooms": 1,
        "max_adults": 1,
        "price": 169,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 48.83861,
          "longitude": 2.350499,
          "zoom": 16
        },
        "id": 1
      },
      {
        "city": {
          "name": `Brussels`,
          "location": {
            "latitude": 50.846557,
            "longitude": 4.351697,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": true,
        "is_premium": false,
        "rating": 4.8,
        "type": `apartment`,
        "bedrooms": 5,
        "max_adults": 6,
        "price": 310,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 50.844556999999995,
          "longitude": 4.346697,
          "zoom": 16
        },
        "id": 2
      },
      {
        "city": {
          "name": `Cologne`,
          "location": {
            "latitude": 50.938361,
            "longitude": 6.959974,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": true,
        "is_premium": true,
        "rating": 4.2,
        "type": `hotel`,
        "bedrooms": 4,
        "max_adults": 6,
        "price": 182,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 50.950361,
          "longitude": 6.961974,
          "zoom": 16
        },
        "id": 3
      },
      {
        "city": {
          "name": `Brussels`,
          "location": {
            "latitude": 50.846557,
            "longitude": 4.351697,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": true,
        "is_premium": false,
        "rating": 5,
        "type": `room`,
        "bedrooms": 1,
        "max_adults": 1,
        "price": 115,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 50.849557,
          "longitude": 4.374696999999999,
          "zoom": 16
        },
        "id": 4
      },
      {
        "city": {
          "name": `Amsterdam`,
          "location": {
            "latitude": 52.37454,
            "longitude": 4.897976,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": true,
        "is_premium": false,
        "rating": 3.3,
        "type": `hotel`,
        "bedrooms": 4,
        "max_adults": 5,
        "price": 457,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 52.36354,
          "longitude": 4.889976,
          "zoom": 16
        },
        "id": 5
      },
      {
        "city": {
          "name": `Brussels`,
          "location": {
            "latitude": 50.846557,
            "longitude": 4.351697,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": true,
        "is_premium": false,
        "rating": 4.8,
        "type": `house`,
        "bedrooms": 2,
        "max_adults": 3,
        "price": 525,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 50.827557,
          "longitude": 4.336697,
          "zoom": 16
        },
        "id": 6
      },
      {
        "city": {
          "name": `Dusseldorf`,
          "location": {
            "latitude": 51.225402,
            "longitude": 6.776314,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": true,
        "is_premium": false,
        "rating": 4,
        "type": `house`,
        "bedrooms": 3,
        "max_adults": 9,
        "price": 117,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 51.214402,
          "longitude": 6.764314000000001,
          "zoom": 16
        },
        "id": 7
      },
      {
        "city": {
          "name": `Cologne`,
          "location": {
            "latitude": 50.938361,
            "longitude": 6.959974,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": true,
        "is_premium": false,
        "rating": 3.1,
        "type": `house`,
        "bedrooms": 4,
        "max_adults": 4,
        "price": 983,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 50.957361,
          "longitude": 6.9509739999999995,
          "zoom": 16
        },
        "id": 8
      },
      {
        "city": {
          "name": `Hamburg`,
          "location": {
            "latitude": 53.550341,
            "longitude": 10.000654,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": true,
        "is_premium": false,
        "rating": 3.2,
        "type": `room`,
        "bedrooms": 1,
        "max_adults": 1,
        "price": 182,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 53.565341000000004,
          "longitude": 9.978654,
          "zoom": 16
        },
        "id": 9
      },
      {
        "city": {
          "name": `Hamburg`,
          "location": {
            "latitude": 53.550341,
            "longitude": 10.000654,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": true,
        "is_premium": false,
        "rating": 3.3,
        "type": `hotel`,
        "bedrooms": 2,
        "max_adults": 9,
        "price": 271,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 53.546341000000005,
          "longitude": 10.022654000000001,
          "zoom": 16
        },
        "id": 10
      },
      {
        "city": {
          "name": `Amsterdam`,
          "location": {
            "latitude": 52.37454,
            "longitude": 4.897976,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": true,
        "is_premium": false,
        "rating": 2.8,
        "type": `house`,
        "bedrooms": 2,
        "max_adults": 3,
        "price": 638,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 52.36354,
          "longitude": 4.911976,
          "zoom": 16
        },
        "id": 11
      }
    ],
    isFavoriteCardsLoaded: true,
    fetchStatus: FetchStatus.PENDING
  },
  PAGE: {
    location: CityInfo.Paris.name,
    sort: SortType.POPULAR
  },
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    login: `Fake login`,
    userAvatar: `https://www.avatar.ru`
  },
  CURRENT_OFFER: {
    currentOffer: {
      "city": {
        "name": `Paris`,
        "location": {
          "latitude": 48.85661,
          "longitude": 2.351499,
          "zoom": 13
        }
      },
      "preview_image": ``,
      "images": [],
      "title": ``,
      "is_favorite": false,
      "is_premium": true,
      "rating": 3,
      "type": `room`,
      "bedrooms": 1,
      "max_adults": 1,
      "price": 169,
      "goods": [],
      "host": {
        "id": 25,
        "name": ``,
        "is_pro": true,
        "avatar_url": ``
      },
      "description": ``,
      "location": {
        "latitude": 48.83861,
        "longitude": 2.350499,
        "zoom": 16
      },
      "id": 1
    },
    isOfferLoaded: true,
    nearOffers: [
      {
        "city": {
          "name": `Brussels`,
          "location": {
            "latitude": 50.846557,
            "longitude": 4.351697,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": false,
        "is_premium": false,
        "rating": 4.8,
        "type": `apartment`,
        "bedrooms": 5,
        "max_adults": 6,
        "price": 310,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 50.844556999999995,
          "longitude": 4.346697,
          "zoom": 16
        },
        "id": 2
      },
      {
        "city": {
          "name": `Cologne`,
          "location": {
            "latitude": 50.938361,
            "longitude": 6.959974,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": false,
        "is_premium": true,
        "rating": 4.2,
        "type": `hotel`,
        "bedrooms": 4,
        "max_adults": 6,
        "price": 182,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 50.950361,
          "longitude": 6.961974,
          "zoom": 16
        },
        "id": 3
      },
      {
        "city": {
          "name": `Brussels`,
          "location": {
            "latitude": 50.846557,
            "longitude": 4.351697,
            "zoom": 13
          }
        },
        "preview_image": ``,
        "images": [],
        "title": ``,
        "is_favorite": false,
        "is_premium": false,
        "rating": 5,
        "type": `room`,
        "bedrooms": 1,
        "max_adults": 1,
        "price": 115,
        "goods": [],
        "host": {
          "id": 25,
          "name": ``,
          "is_pro": true,
          "avatar_url": ``
        },
        "description": ``,
        "location": {
          "latitude": 50.849557,
          "longitude": 4.374696999999999,
          "zoom": 16
        },
        "id": 4
      },
    ],
    isNearOffersLoaded: true,
    comments: [
      {
        "id": 1,
        "user": {
          "id": 12,
          "is_pro": true,
          "name": ``,
          "avatar_url": ``
        },
        "rating": 2,
        "comment": ``,
        "date": `2021-03-10T08:04:28.646Z`
      }
    ],
    isCommentsLoaded: true
  }
};

export const emptyStore = {
  DATA: offersData,
  PAGE: pageData,
  USER: userData,
  CURRENT_OFFER: currentOfferData
};

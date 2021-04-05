export const Setting = {
  PLACES_COUNT: 10,
  NEARBY_PLACES_COUNT: 3
};

export const RATING = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

export const MapSize = {
  MAIN: 960,
  PROPERTY: 579
};

export const MAP_DEFAULT_COORDS = {
  latitude: 49.1520025,
  longitude: 0.0151886,
  zoom: 6
};

export const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`
};

export const RoutePath = {
  MAIN_PAGE: `/`,
  LOGIN_PAGE: `/login`,
  FAVORITES_PAGE: `/favorites`,
  OFFER_PAGE: `/offer/:id`,
  NOT_FOUND: `/404`
};

export const APIRoutePath = {
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  HOTELS: `/hotels`,
  COMMENTS: `/comments`,
  FAVORITE: `/favorite`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const CityList = {
  Paris: `Paris`,
  Cologne: `Cologne`,
  Brussels: `Brussels`,
  Amsterdam: `Amsterdam`,
  Hamburg: `Hamburg`,
  Dusseldorf: `Dusseldorf`
};

export const CommentSettings = {
  MIN_SIZE: 50,
  MAX_SIZE: 300,
};

export const FetchStatus = {
  PENDING: `PENDING`,
  SENDING: `SENDING`,
  DONE: `DONE`,
  ERROR: `ERROR`
};

export const CityInfo = {
  Amsterdam: {
    name: `Amsterdam`,
    coords: {
      lat: 52.38333,
      lng: 4.9,
    },
    zoom: 12,
  },
  Paris: {
    name: `Paris`,
    coords: {
      lat: 48.856614,
      lng: 2.3522219,
    },
    zoom: 12,
  },
  Cologne: {
    name: `Cologne`,
    coords: {
      lat: 50.93333,
      lng: 6.95,
    },
    zoom: 12,
  },
  Brussels: {
    name: `Brussels`,
    coords: {
      lat: 50.8388,
      lng: 4.3753,
    },
    zoom: 12,
  },
  Hamburg: {
    name: `Hamburg`,
    coords: {
      lat: 53.55034,
      lng: 10.00065,
    },
    zoom: 12,
  },
  Dusseldorf: {
    name: `Dusseldorf`,
    coords: {
      lat: 51.2254,
      lng: 6.77631,
    },
    zoom: 12,
  },
};

export const Colors = {
  SITE_BLUE: `#4481c3`
};

export const CLICK_TIMEOUT = 1000;

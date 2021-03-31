export const Setting = {
  PLACES_COUNT: 10,
  NEARBY_PLACES_COUNT: 3
};

export const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export const MAP_DEFAULT_COORDS = {
  latitude: 49.1520025,
  longitude: 0.0151886,
  zoom: 6
};

export const defaultSortType = `POPULAR`;

export const sortType = {
  POPULAR: {
    value: `POPULAR`,
    label: `Popular`,
  },
  ASC_PRICE: {
    value: `ASC_PRICE`,
    label: `Price: low to high`,
  },
  DESC_PRICE: {
    value: `DESC_PRICE`,
    label: `Price: high to low`,
  },
  RATE: {
    value: `RATE`,
    label: `Top rated first`,
  },
};

export const RoutePaths = {
  MAIN_SCREEN: `/`,
  LOGIN_SCREEN: `/login`,
  FAVORITES_SCREEN: `/favorites`,
  OFFER_SCREEN: `/offer/:id`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const CitiesInfo = {
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

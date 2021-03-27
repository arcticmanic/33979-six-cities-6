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

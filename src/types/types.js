import {shape, number, string, boolean, arrayOf, oneOf} from 'prop-types';

export const cityType = oneOf([`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]);

export const offerType = shape({
  bedrooms: number,
  city: shape({
    location: shape({
      latitude: number,
      longitude: number,
      zoom: number
    }),
    name: cityType
  }),
  description: string,
  goods: arrayOf(string),
  host: shape({
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string
  }),
  id: number,
  images: arrayOf(string),
  isFavorite: boolean,
  isPremium: boolean,
  location: shape({
    latitude: number,
    longitude: number,
    zoom: number
  }),
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string
});

export const reviewType = shape({
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: shape({
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string
  })
});

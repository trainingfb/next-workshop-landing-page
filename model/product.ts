// model/product.ts
import angular from '@/images/angular.png';
import emote from '@/images/emotejs.png';
import react from '@/images/react.png';

export interface Product {
  id: number;
  name: string;
  topic: 'angular' | 'react'
}

export const TOPIC_IMAGES = {
  'angular': angular,
  'react': react,
  'misc': emote,
}

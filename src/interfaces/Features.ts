// Interface automatically generated by schemas-to-ts

import { Feature } from './Feature';
import { Feature_Plain } from './Feature';
import { Feature_NoRelations } from './Feature';

export interface Features {
  heading?: string;
  description?: string;
  feature: Feature[];
}
export interface Features_Plain {
  heading?: string;
  description?: string;
  feature: Feature_Plain[];
}

export interface Features_NoRelations {
  heading?: string;
  description?: string;
  feature: Feature_NoRelations[];
}


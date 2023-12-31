// Interface automatically generated by schemas-to-ts

import { Media } from './Media';
import { Link } from './Link';
import { Link_Plain } from './Link';
import { Link_NoRelations } from './Link';

export interface FeatureRow {
  title: string;
  description?: string;
  media: { data: Media };
  link?: Link;
}
export interface FeatureRow_Plain {
  title: string;
  description?: string;
  media: Media;
  link?: Link_Plain;
}

export interface FeatureRow_NoRelations {
  title: string;
  description?: string;
  media: number;
  link?: Link_NoRelations;
}


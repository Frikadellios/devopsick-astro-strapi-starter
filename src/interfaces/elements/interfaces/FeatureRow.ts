// Interface automatically generated by schemas-to-ts

import { Media } from '../../shared/interfaces/Media';
import { Link } from '../../links/interfaces/Link';
import { Link_Plain } from '../../links/interfaces/Link';
import { Link_NoRelations } from '../../links/interfaces/Link';

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

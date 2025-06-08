import * as m from './missions';
import * as cl from './locations';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { predicates, ...missions } = m;

export type MissionUrls = {
  [K in keyof typeof missions]: string;
};

export type ClusterUrls = {
  [K in keyof typeof cl]: string;
};

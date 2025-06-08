import * as m from './missions';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { predicates, ...missions } = m;

export type MissionUrls = {
  [K in keyof typeof missions]: string;
};

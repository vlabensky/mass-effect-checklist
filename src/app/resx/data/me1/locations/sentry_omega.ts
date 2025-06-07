import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Sentry Omega

export const me1_location_sentry_omega_hoc_virmire = loc('Virmire')
  .hasMissions(m.me1_mission_virmire)
  .build();

export const me1_system_sentry_omega_hoc = sys('Hoc')
  .hasLocations(me1_location_sentry_omega_hoc_virmire)
  .build();

export const me1_cluster_sentry_omega = cl('Sentry Omega', 'Sentry_Omega', 'Sentry_Omega')
  .hasSystems(me1_system_sentry_omega_hoc)
  .build();

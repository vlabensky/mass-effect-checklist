import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Kepler Verge

export const me1_location_kepler_verge_herschel_rocky_asteroid = loc('Rocky Asteroid')
  .hasMissions(m.me1_mission_valuable_minerals_heavy_metals)
  .build();

export const me1_location_kepler_verge_herschel_msv_fedele = loc('MSV Fedele')
  .hasMissions(m.me1_mission_garrus_find_dr_saleon)
  .build();

export const me1_system_kepler_verge_herschel = sys('Herschel')
  .hasLocations(
    me1_location_kepler_verge_herschel_rocky_asteroid,
    me1_location_kepler_verge_herschel_msv_fedele,
  )
  .build();

export const me1_location_kepler_verge_newton_klencory = loc('Klencory')
  .hasMissions(m.me1_mission_asari_writings)
  .build();

export const me1_location_kepler_verge_newton_juncro = loc('Juncro')
  .hasMissions(m.me1_mission_valuable_minerals_gasses)
  .build();

export const me1_location_kepler_verge_newton_ontarom = loc('Ontarom')
  .hasMissions(m.me1_mission_dead_scientists)
  .build();

export const me1_system_kepler_verge_newton = sys('Newton')
  .hasLocations(
    me1_location_kepler_verge_newton_klencory,
    me1_location_kepler_verge_newton_juncro,
    me1_location_kepler_verge_newton_ontarom,
  )
  .build();

export const me1_cluster_kepler_verge = cl('Kepler Verge', 'Kepler_Verge', 'Kepler_Verge')
  .hasSystems(
    me1_system_kepler_verge_herschel,
    me1_system_kepler_verge_newton
  )
  .build();

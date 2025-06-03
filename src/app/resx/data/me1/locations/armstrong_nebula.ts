import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Armstrong Nebula

export const me1_location_armstrong_nebula_gagarin_junthor = loc('Junthor')
  .build();

export const me1_location_armstrong_nebula_gagarin_antirumgon = loc('Antirumgon')
  .build();

export const me1_location_armstrong_nebula_gagarin_rayingri = loc('Rayingri')
  .hasMissions(m.me1_mission_geth_incursions)
  .build();

export const me1_system_armstrong_nebula_gagarin = sys('Gagarin')
  .hasLocations(
    me1_location_armstrong_nebula_gagarin_junthor,
    me1_location_armstrong_nebula_gagarin_antirumgon,
    me1_location_armstrong_nebula_gagarin_rayingri,
  )
  .build();

export const me1_location_armstrong_nebula_grissom_benda = loc('Benda')
  .build();

export const me1_location_armstrong_nebula_grissom_zaherux = loc('Zaherux')
  .build();

export const me1_location_armstrong_nebula_grissom_rocky_asteroid = loc('Rocky Asteroid')
  .build();

export const me1_location_armstrong_nebula_grissom_solcrum = loc('Solcrum')
  .hasMissions(m.me1_mission_geth_incursions)
  .build();

export const me1_system_armstrong_nebula_grissom = sys('Grissom')
  .hasLocations(
    me1_location_armstrong_nebula_grissom_benda,
    me1_location_armstrong_nebula_grissom_zaherux,
    me1_location_armstrong_nebula_grissom_rocky_asteroid,
    me1_location_armstrong_nebula_grissom_solcrum,
  )
  .build();

export const me1_location_armstrong_nebula_hong_matar = loc('Matar')
  .build();

export const me1_location_armstrong_nebula_hong_treagir = loc('Treagir')
  .build();

export const me1_location_armstrong_nebula_hong_casbin = loc('Casbin')
  .hasMissions(m.me1_mission_geth_incursions)
  .build();

export const me1_system_armstrong_nebula_hong = sys('Hong')
  .hasLocations(
    me1_location_armstrong_nebula_hong_matar,
    me1_location_armstrong_nebula_hong_treagir,
    me1_location_armstrong_nebula_hong_casbin,
  )
  .build();

export const me1_location_armstrong_nebula_tereshkova_carbonaceus_asteroid = loc('Carbonaceus Asteroid')
  .build();

export const me1_location_armstrong_nebula_tereshkova_patamalrus = loc('Patamalrus')
  .build();

export const me1_location_armstrong_nebula_tereshkova_thegeuse = loc('Thegeuse')
  .build();

export const me1_location_armstrong_nebula_tereshkova_antibaar = loc('Antibaar')
  .hasMissions(m.me1_mission_geth_incursions)
  .build();

export const me1_system_armstrong_nebula_tereshkova = sys('Tereshkova')
  .hasLocations(
    me1_location_armstrong_nebula_tereshkova_carbonaceus_asteroid,
    me1_location_armstrong_nebula_tereshkova_patamalrus,
    me1_location_armstrong_nebula_tereshkova_thegeuse,
    me1_location_armstrong_nebula_tereshkova_antibaar,
  )
  .build();

export const me1_location_armstrong_nebula_vamshi_pregel = loc('Pregel')
  .build();

export const me1_location_armstrong_nebula_vamshi_maji = loc('Maji')
  .hasMissions(m.me1_mission_geth_incursions)
  .build();

export const me1_system_armstrong_nebula_vamshi = sys('Vamshi')
  .hasLocations(
    me1_location_armstrong_nebula_vamshi_pregel,
    me1_location_armstrong_nebula_vamshi_maji,
  )
  .build();

export const me1_cluster_armstrong_nebula = cl('Armstrong Nebula', 'Armstrong_Nebula', 'Armstrong_Nebula')
  .hasSystems(
    me1_system_armstrong_nebula_gagarin,
    me1_system_armstrong_nebula_grissom,
    me1_system_armstrong_nebula_hong,
    me1_system_armstrong_nebula_tereshkova,
    me1_system_armstrong_nebula_vamshi,
  )
  .build();

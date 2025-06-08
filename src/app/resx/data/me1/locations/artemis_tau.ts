import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Artemis Tau

export const me1_location_artemis_tau_athens_proteus = loc('Proteus')
  .hasMissions(m.me1_mission_valuable_minerals_gasses)
  .build();

export const me1_location_artemis_tau_athens_circe = loc('Circe')
  .hasMissions(m.me1_mission_valuable_minerals_gasses)
  .build();

export const me1_location_artemis_tau_athens_pharos = loc('Pharos')
  .hasMissions(m.me1_mission_turian_insignias)
  .build();

export const me1_system_artemis_tau_athens = sys('Athens')
  .hasLocations(
    me1_location_artemis_tau_athens_proteus,
    me1_location_artemis_tau_athens_circe,
    me1_location_artemis_tau_athens_pharos,
  )
  .build();

export const me1_location_artemis_tau_knossos_metallic_asteroid = loc('Metallic Asteroid')
  .hasMissions(m.me1_mission_valuable_minerals_heavy_metals)
  .build();

export const me1_location_artemis_tau_knossos_carbonaceous_asteroid = loc('Carbonaceous Asteroid')
  .hasMissions(m.me1_mission_locate_signs_of_battle)
  .build();

export const me1_location_artemis_tau_knossos_archanes = loc('Archanes')
  .hasMissions(m.me1_mission_valuable_minerals_gasses)
  .build();

export const me1_location_artemis_tau_knossos_therum = loc('Therum')
  .hasMissions(m.me1_mission_find_liara_t_soni)
  .build();

export const me1_system_artemis_tau_knossos = sys('Knossos')
  .hasLocations(
    me1_location_artemis_tau_knossos_metallic_asteroid,
    me1_location_artemis_tau_knossos_carbonaceous_asteroid,
    me1_location_artemis_tau_knossos_archanes,
  )
  .build();

export const me1_location_artemis_tau_macedon_porolan = loc('Porolan')
  .hasMissions(m.me1_mission_asari_writings)
  .build();

export const me1_location_artemis_tau_macedon_metallic_asteroid = loc('Metallic Asteroid')
  .hasMissions(m.me1_mission_valuable_minerals_light_metals)
  .build();

export const me1_location_artemis_tau_macedon_fargeluse = loc('Fargeluse')
  .hasMissions(m.me1_mission_valuable_minerals_gasses)
  .build();

export const me1_location_artemis_tau_macedon_sharjila = loc('Sharjila')
  .hasMissions(m.me1_mission_asari_diplomacy)
  .build();

export const me1_system_artemis_tau_macedon = sys('Macedon')
  .hasLocations(
    me1_location_artemis_tau_macedon_porolan,
    me1_location_artemis_tau_macedon_metallic_asteroid,
    me1_location_artemis_tau_macedon_fargeluse,
    me1_location_artemis_tau_macedon_sharjila,
  )
  .build();

export const me1_location_artemis_tau_sparta_asteroid_cluster = loc('Asteroid Cluster')
  .hasMissions(m.me1_mission_prothean_data_discs)
  .build();

export const me1_location_artemis_tau_sparta_ontamalca = loc('Ontamalca')
  .hasMissions(m.me1_mission_valuable_minerals_gasses)
  .build();

export const me1_location_artemis_tau_sparta_alsages = loc('Alsages')
  .hasMissions(m.me1_mission_valuable_minerals_rare_metals)
  .build();

export const me1_location_artemis_tau_sparta_edolus = loc('Edolus')
  .hasMissions(m.me1_mission_missing_marines)
  .build();

export const me1_system_artemis_tau_sparta = sys('Sparta')
  .hasLocations(
    me1_location_artemis_tau_sparta_asteroid_cluster,
    me1_location_artemis_tau_sparta_ontamalca,
    me1_location_artemis_tau_sparta_alsages,
    me1_location_artemis_tau_sparta_edolus,
  )
  .build();

export const me1_cluster_artemis_tau = cl('Artemis Tau')
  .hasSystems(
    me1_system_artemis_tau_athens,
    me1_system_artemis_tau_knossos,
    me1_system_artemis_tau_macedon,
    me1_system_artemis_tau_sparta,
  )
  .build();

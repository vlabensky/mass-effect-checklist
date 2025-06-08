import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Voyager Cluster

export const me1_location_voyager_cluster_amazon_sonedma = loc('Sonedma')
  .hasMissions(m.me1_mission_valuable_minerals_rare_metals)
  .build();

export const me1_location_voyager_cluster_amazon_sybin = loc('Sybin')
  .hasMissions(m.me1_mission_turian_insignias)
  .build();

export const me1_location_voyager_cluster_amazon_tremar = loc('Tremar')
  .hasMissions(m.me1_mission_valuable_minerals_gasses)
  .build();

export const me1_location_voyager_cluster_amazon_agebinium = loc('Agebinium')
  .hasMissions(m.me1_mission_espionage_probe)
  .build();

export const me1_system_voyager_cluster_amazon = sys('Amazon')
  .hasLocations(
    me1_location_voyager_cluster_amazon_sonedma,
    me1_location_voyager_cluster_amazon_sybin,
    me1_location_voyager_cluster_amazon_tremar,
    me1_location_voyager_cluster_amazon_agebinium,
  )
  .build();

export const me1_location_voyager_cluster_columbia_ontaheter = loc('Ontaheter')
  .hasMissions(m.me1_mission_valuable_minerals_rare_metals)
  .build();

export const me1_location_voyager_cluster_columbia_gromar = loc('Gromar')
  .hasMissions(m.me1_mission_locate_signs_of_battle)
  .build();

export const me1_location_voyager_cluster_columbia_nepheron = loc('Nepheron')
  .hasMissions(m.me1_mission_hades_dogs)
  .build();

export const me1_system_voyager_cluster_columbia = sys('Columbia')
  .hasLocations(
    me1_location_voyager_cluster_columbia_ontaheter,
    me1_location_voyager_cluster_columbia_gromar,
    me1_location_voyager_cluster_columbia_nepheron,
  )
  .build();

export const me1_location_voyager_cluster_yangtze_dregir = loc('Dregir')
  .hasMissions(m.me1_mission_valuable_minerals_light_metals)
  .build();

export const me1_location_voyager_cluster_yangtze_alrumter = loc('Alrumter')
  .hasMissions(m.me1_mission_prothean_data_discs)
  .build();

export const me1_location_voyager_cluster_yangtze_patajiri = loc('Patajiri')
  .hasMissions(m.me1_mission_valuable_minerals_rare_metals)
  .build();

export const me1_location_voyager_cluster_yangtze_binthu = loc('Binthu')
  .hasMissions(m.me1_mission_cerberus)
  .build();

export const me1_system_voyager_cluster_yangtze = sys('Yangtze')
  .hasLocations(
    me1_location_voyager_cluster_yangtze_dregir,
    me1_location_voyager_cluster_yangtze_alrumter,
    me1_location_voyager_cluster_yangtze_patajiri,
    me1_location_voyager_cluster_yangtze_binthu,
  )
  .build();

export const me1_cluster_voyager_cluster = cl('Voyager Cluster')
  .hasSystems(
    me1_system_voyager_cluster_amazon,
    me1_system_voyager_cluster_columbia,
    me1_system_voyager_cluster_yangtze,
  )
  .build();

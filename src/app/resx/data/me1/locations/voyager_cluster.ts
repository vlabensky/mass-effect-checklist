import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Voyager Cluster

export const me1_location_voyager_cluster_amazon_sonedma = loc('Sonedma')
  .build();

export const me1_location_voyager_cluster_amazon_sybin = loc('Sybin')
  .build();

export const me1_location_voyager_cluster_amazon_tremar = loc('Tremar')
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
  .build();

export const me1_location_voyager_cluster_columbia_gromar = loc('Gromar')
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
  .build();

export const me1_location_voyager_cluster_yangtze_alrumter = loc('Alrumter')
  .build();

export const me1_location_voyager_cluster_yangtze_patajiri = loc('Patajiri')
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

export const me1_cluster_voyager_cluster = cl('Voyager Cluster', 'Voyager', 'Voyager')
  .hasSystems(
    me1_system_voyager_cluster_amazon,
    me1_system_voyager_cluster_columbia,
    me1_system_voyager_cluster_yangtze,
  )
  .build();

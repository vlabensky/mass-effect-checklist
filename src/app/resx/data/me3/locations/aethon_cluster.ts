import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Aethon Cluster

export const me3_location_aethon_cluster_aru_irune = loc('Irune')
  .hasMissions(m.me3_mission_irune_book_of_plenix)
  .build();

export const me3_location_aethon_cluster_aru_west_of_irune = loc('West of Irune')
  .withAdditionalInfo('Wreckage: Fuel 200')
  .build();

export const me3_location_aethon_cluster_aru_cherk_sab = loc('Cherk Sab')
  .withAdditionalInfo('Volus Fabrication Units')
  .build();

export const me3_system_aethon_cluster_aru = sys('Aru')
  .hasLocations(
    me3_location_aethon_cluster_aru_irune,
    me3_location_aethon_cluster_aru_west_of_irune,
    me3_location_aethon_cluster_aru_cherk_sab,
  )
  .build();

export const me3_location_aethon_cluster_esori_solu_paolis = loc('Solu Paolis')
  .withAdditionalInfo('Volus Dreadnought Kwonu')
  .build();

export const me3_location_aethon_cluster_esori_south_southwest_of_kailo = loc('South/Southwest of Kailo')
  .withAdditionalInfo('Wreckage: Fuel 300')
  .build();

export const me3_system_aethon_cluster_esori = sys('Esori')
  .hasLocations(
    me3_location_aethon_cluster_esori_solu_paolis,
    me3_location_aethon_cluster_esori_south_southwest_of_kailo,
  )
  .build();

export const me3_location_aethon_cluster_satu_arrd_nalisin = loc('Nalisin')
  .withAdditionalInfo('Volus Engineering Team')
  .build();

export const me3_location_aethon_cluster_satu_arrd_southeast_of_nalisin = loc('Southeast of Nalisin')
  .withAdditionalInfo('Wreckage: Fuel 200')
  .build();

export const me3_system_aethon_cluster_satu_arrd = sys('Satu Arrd')
  .hasLocations(
    me3_location_aethon_cluster_satu_arrd_nalisin,
    me3_location_aethon_cluster_satu_arrd_southeast_of_nalisin,
  )
  .build();

export const me3_location_aethon_cluster_nura_oma_ker = loc('Oma Ker')
  .withAdditionalInfo('Volus Intelligence Archives')
  .build();

export const me3_location_aethon_cluster_nura_northeast_of_star = loc('Northeast of Star (Between 2nd & 3rd Ring)')
  .withAdditionalInfo('Wreckage: Fuel 250')
  .build();

export const me3_system_aethon_cluster_nura = sys('Nura')
  .hasLocations(
    me3_location_aethon_cluster_nura_oma_ker,
    me3_location_aethon_cluster_nura_northeast_of_star,
  )
  .build();

export const me3_cluster_aethon_cluster = cl('Aethon Cluster', 'Aethon_Cluster', 'Aethon_Cluster')
  .hasSystems(
    me3_system_aethon_cluster_aru,
    me3_system_aethon_cluster_esori,
    me3_system_aethon_cluster_satu_arrd,
    me3_system_aethon_cluster_nura,
  )
  .build();

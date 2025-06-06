import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Apien Crest

export const me3_location_apien_crest_castellus_south_of_faix = loc('South of Faix, East of Nios (Between 4th & 5th Rings)')
  .withAdditionalInfo('Wreckage: Fuel 350')
  .build();

export const me3_location_apien_crest_castellus_digeris = loc('Digeris')
  .hasMissions(m.me3_mission_apien_crest_banner_of_the_first_regiment)
  .build();

export const me3_system_apien_crest_castellus = sys('Castellus')
  .hasLocations(
    me3_location_apien_crest_castellus_south_of_faix,
    me3_location_apien_crest_castellus_digeris,
  )
  .build();

export const me3_location_apien_crest_gemmae_pherios = loc('Pherios')
  .withAdditionalInfo('Turian 79th Flotila')
  .build();

export const me3_location_apien_crest_gemmae_south_of_pherios = loc('South of Pherios')
  .withAdditionalInfo('Wreckage: Fuel 800')
  .build();

export const me3_location_apien_crest_gemmae_west_of_pherios = loc('West of Pherios')
  .withAdditionalInfo('Wreckage: Fuel 750')
  .build();

export const me3_system_apien_crest_gemmae = sys('Gemmae')
  .hasLocations(
    me3_location_apien_crest_gemmae_pherios,
    me3_location_apien_crest_gemmae_south_of_pherios,
    me3_location_apien_crest_gemmae_west_of_pherios,
  )
  .build();

export const me3_cluster_apien_crest = cl('Apien Crest', 'Apien_Crest', 'Apien_Crest')
  .hasSystems(
    me3_system_apien_crest_castellus,
    me3_system_apien_crest_gemmae,
  )
  .build();

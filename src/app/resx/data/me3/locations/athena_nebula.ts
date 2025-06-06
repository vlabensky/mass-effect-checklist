import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Athena Nebula

export const me3_location_athena_nebula_parnitha_tevura = loc('Tevura')
  .withAdditionalInfo('Asari Cruiser Cybaen')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_athena_nebula_parnitha = sys('Parnitha')
  .hasLocations(
    me3_location_athena_nebula_parnitha_tevura,
  )
  .build();

export const me3_location_athena_nebula_orisoni_egalic = loc('Egalic')
  .withAdditionalInfo('Asari Research Ships')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_athena_nebula_orisoni_east_of_star = loc('East of Star (Between 2nd & 3rd Rings)')
  .withAdditionalInfo('Wreckage: Fuel 350')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_athena_nebula_orisoni = sys('Orisoni')
  .hasLocations(
    me3_location_athena_nebula_orisoni_egalic,
    me3_location_athena_nebula_orisoni_east_of_star,
  )
  .build();

export const me3_location_athena_nebula_tomaros_south_of_niagalon = loc('South of Niagalon')
  .withAdditionalInfo('Wreckage: Fuel 200')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_athena_nebula_tomaros_pronoia = loc('Pronoia')
  .withAdditionalInfo('Asari Cruiser Nefrane')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_athena_nebula_tomaros = sys('Tomaros')
  .hasLocations(
    me3_location_athena_nebula_tomaros_south_of_niagalon,
    me3_location_athena_nebula_tomaros_pronoia,
  )
  .build();

export const me3_location_athena_nebula_vernio_polissa = loc('Polissa')
  .hasMissions(m.me3_mission_athena_nebula_hesperia_period_statue)
  .build();

export const me3_location_athena_nebula_vernio_northeast_of_star = loc('Northeast of Star (Between 2nd & 3rd Rings)')
  .withAdditionalInfo('Wreckage: Fuel 400')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_athena_nebula_vernio = sys('Vernio')
  .hasLocations(
    me3_location_athena_nebula_vernio_polissa,
    me3_location_athena_nebula_vernio_northeast_of_star,
  )
  .build();

export const me3_location_athena_nebula_ialessa_east_of_star = loc('East of Star (Between 3rd & 4th Rings)')
  .withAdditionalInfo('Wreckage: Fuel 500')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_athena_nebula_ialessa_trikalon = loc('Trikalon')
  .withAdditionalInfo('Asari Engineers')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_athena_nebula_ialessa = sys('Ialessa')
  .hasLocations(
    me3_location_athena_nebula_ialessa_east_of_star,
    me3_location_athena_nebula_ialessa_trikalon,
  )
  .build();

export const me3_cluster_athena_nebula = cl('Athena Nebula', 'Athena_Nebula', 'Athena_Nebula')
  .hasSystems(
    me3_system_athena_nebula_parnitha,
    me3_system_athena_nebula_orisoni,
    me3_system_athena_nebula_tomaros,
    me3_system_athena_nebula_vernio,
    me3_system_athena_nebula_ialessa,
  )
  .build();

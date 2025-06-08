import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Horse Head Nebula

export const me1_location_horse_head_nebula_fortuna_maganlis = loc('Maganlis')
  .hasMissions(m.me1_mission_turian_insignias)
  .build();

export const me1_location_horse_head_nebula_fortuna_therumlon = loc('Therumlon')
  .hasMissions(m.me1_mission_valuable_minerals_rare_metals)
  .build();

export const me1_location_horse_head_nebula_fortuna_amaranthine = loc('Amaranthine')
  .hasMissions(m.me1_mission_hostile_takeover)
  .build();

export const me1_system_horse_head_nebula_fortuna = sys('Fortuna')
  .hasLocations(
    me1_location_horse_head_nebula_fortuna_maganlis,
    me1_location_horse_head_nebula_fortuna_therumlon,
    me1_location_horse_head_nebula_fortuna_amaranthine,
  )
  .build();

export const me1_location_horse_head_nebula_pax_veles = loc('Veles')
  .hasMissions(m.me1_mission_asari_writings)
  .build();

export const me1_location_horse_head_nebula_pax_noveria = loc('Noveria')
  .hasMissions(m.me1_mission_geth_interest)
  .build();

export const me1_system_horse_head_nebula_pax = sys('Pax')
  .hasLocations(
    me1_location_horse_head_nebula_pax_veles,
    me1_location_horse_head_nebula_pax_noveria,
  )
  .build();

export const me1_location_horse_head_nebula_strenuus_yunthorl = loc('Yunthorl')
  .hasMissions(m.me1_mission_locate_signs_of_battle)
  .build();

export const me1_location_horse_head_nebula_strenuus_antitarra = loc('Antitarra')
  .hasMissions(m.me1_mission_valuable_minerals_gasses)
  .build();

export const me1_location_horse_head_nebula_strenuus_msv_majesty = loc('MSV Majesty')
  .hasMissions(m.me1_mission_privateers)
  .build();

export const me1_location_horse_head_nebula_strenuus_xawin = loc('Xawin')
  .hasMissions(m.me1_mission_privateers)
  .build();

export const me1_system_horse_head_nebula_strenuus = sys('Strenuus')
  .hasLocations(
    me1_location_horse_head_nebula_strenuus_yunthorl,
    me1_location_horse_head_nebula_strenuus_antitarra,
    me1_location_horse_head_nebula_strenuus_msv_majesty,
    me1_location_horse_head_nebula_strenuus_xawin,
  )
  .build();

export const me1_cluster_horse_head_nebula = cl('Horse Head Nebula')
  .hasSystems(
    me1_system_horse_head_nebula_fortuna,
    me1_system_horse_head_nebula_pax,
    me1_system_horse_head_nebula_strenuus,
  )
  .build();

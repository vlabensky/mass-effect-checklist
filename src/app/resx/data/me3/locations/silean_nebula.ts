import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Silean Nebula

export const me3_location_silean_nebula_kypladon_hanalei = loc('Hanalei')
  .withAdditionalInfo('Dr.Jelize')
  .build();

export const me3_system_silean_nebula_kypladon = sys('Kypladon')
  .hasLocations(
    me3_location_silean_nebula_kypladon_hanalei,
  )
  .build();

export const me3_location_silean_nebula_teyolia_nevos = loc('Nevos')
  .hasMissions(m.me3_mission_silean_nebula_rings_of_alune)
  .build();

export const me3_location_silean_nebula_teyolia_quirezia = loc('Quirezia')
  .withAdditionalInfo('Salvage: Credits 10,000')
  .build();

export const me3_location_silean_nebula_teyolia_east_of_star = loc('East of Star (3rd Ring)')
  .withAdditionalInfo('Wreckage: Fuel 375')
  .build();

export const me3_system_silean_nebula_teyolia = sys('Teyolia')
  .hasLocations(
    me3_location_silean_nebula_teyolia_nevos,
    me3_location_silean_nebula_teyolia_quirezia,
    me3_location_silean_nebula_teyolia_east_of_star,
  )
  .build();

export const me3_location_silean_nebula_phontes_dekuuna = loc('Dekuuna')
  .hasMissions(m.me3_mission_dekuuna_code_of_the_ancients_elcor_extraction)
  .build();

export const me3_location_silean_nebula_phontes_oltan = loc('Oltan')
  .withAdditionalInfo('Elcor Flotilla')
  .build();

export const me3_location_silean_nebula_phontes_east_of_lenuamund = loc('East of Lenuamund (Between 2nd and 3rd Rings)')
  .withAdditionalInfo('Wreckage: Fuel 175')
  .build();

export const me3_system_silean_nebula_phontes = sys('Phontes')
  .hasLocations(
    me3_location_silean_nebula_phontes_dekuuna,
    me3_location_silean_nebula_phontes_oltan,
    me3_location_silean_nebula_phontes_east_of_lenuamund,
  )
  .build();

export const me3_location_silean_nebula_nahuala_hyetiana = loc('Hyetiana')
  .withAdditionalInfo('Serrice Guard')
  .build();

export const me3_location_silean_nebula_nahuala_southwest_of_agessia = loc('Southwest of Agessia')
  .withAdditionalInfo('Wreckage: Fuel 250')
  .build();

export const me3_system_silean_nebula_nahuala = sys('Nahuala')
  .hasLocations(
    me3_location_silean_nebula_nahuala_hyetiana,
    me3_location_silean_nebula_nahuala_southwest_of_agessia,
  )
  .build();

export const me3_location_silean_nebula_loropi_south_east_of_wreckage = loc('South East of Wreckage (Near the Ring)')
  .withAdditionalInfo('Wreckage: Fuel 300')
  .build();

export const me3_location_silean_nebula_loropi_yasilium = loc('Yasilium')
  .withAdditionalInfo('Armali Sniper Unit')
  .build();

export const me3_system_silean_nebula_loropi = sys('Loropi')
  .hasLocations(
    me3_location_silean_nebula_loropi_south_east_of_wreckage,
    me3_location_silean_nebula_loropi_yasilium,
  )
  .build();

export const me3_cluster_silean_nebula = cl('Silean Nebula', 'Silean_Nebula', 'Silean_Nebula')
  .hasSystems(
    me3_system_silean_nebula_kypladon,
    me3_system_silean_nebula_teyolia,
    me3_system_silean_nebula_phontes,
    me3_system_silean_nebula_nahuala,
    me3_system_silean_nebula_loropi,
  )
  .build();

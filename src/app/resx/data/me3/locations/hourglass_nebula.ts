import { cl, loc, sys } from '../../builders';

// Hourglass Nebula

export const me3_location_hourglass_nebula_osun_erinle = loc('Erinle')
  .withAdditionalInfo('Salvage: Credits 10,000')
  .build();

export const me3_location_hourglass_nebula_osun_southwest_of_erinle = loc('Southwest of Erinle')
  .withAdditionalInfo('Wreckage: Fuel 100')
  .build();

export const me3_system_hourglass_nebula_osun = sys('Osun')
  .hasLocations(
    me3_location_hourglass_nebula_osun_erinle,
    me3_location_hourglass_nebula_osun_southwest_of_erinle,
  )
  .build();

export const me3_location_hourglass_nebula_faryar_alingon = loc('Alingon')
  .withAdditionalInfo('Shadow Broker Starship Tech')
  .build();

export const me3_location_hourglass_nebula_faryar_northwest_of_alingon = loc('Northwest of Alingon')
  .withAdditionalInfo('Wreckage: Fuel 600')
  .build();

export const me3_system_hourglass_nebula_faryar = sys('Faryar')
  .hasLocations(
    me3_location_hourglass_nebula_faryar_alingon,
    me3_location_hourglass_nebula_faryar_northwest_of_alingon,
  )
  .build();

export const me3_location_hourglass_nebula_sowilo_hagalaz = loc('Hagalaz')
  .withAdditionalInfo('Shadow Broker Support Team')
  .build();

export const me3_location_hourglass_nebula_sowilo_north_of_star = loc('North of Star')
  .withAdditionalInfo('Wreckage: Fuel 200')
  .build();

export const me3_system_hourglass_nebula_sowilo = sys('Sowilo')
  .hasLocations(
    me3_location_hourglass_nebula_sowilo_hagalaz,
    me3_location_hourglass_nebula_sowilo_north_of_star,
  )
  .build();

export const me3_location_hourglass_nebula_ploitari_zanethu = loc('Zanethu')
  .withAdditionalInfo('Terminus Freighters')
  .build();

export const me3_system_hourglass_nebula_ploitari = sys('Ploitari')
  .hasLocations(
    me3_location_hourglass_nebula_ploitari_zanethu,
  )
  .build();

export const me3_cluster_hourglass_nebula = cl('Hourglass Nebula', 'Hourglass_Nebula', 'Hourglass_Nebula')
  .hasSystems(
    me3_system_hourglass_nebula_osun,
    me3_system_hourglass_nebula_faryar,
    me3_system_hourglass_nebula_sowilo,
    me3_system_hourglass_nebula_ploitari,
  )
  .build();

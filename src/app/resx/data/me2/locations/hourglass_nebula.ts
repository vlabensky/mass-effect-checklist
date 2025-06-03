import { cl, loc, sys } from '../../builders';

// Hourglass Nebula

export const me2_location_hourglass_nebula_faryar_alingon = loc('Alingon')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_hourglass_nebula_faryar_antictra = loc('Antictra')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_hourglass_nebula_faryar_daratar = loc('Daratar')
  .withAdditionalInfo('Good (Element Zero)')
  .build();

export const me2_location_hourglass_nebula_faryar_nephros = loc('Nephros')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_hourglass_nebula_faryar_quarem = loc('Quarem')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_hourglass_nebula_faryar_tunfigel = loc('Tunfigel')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_hourglass_nebula_faryar_wenrum = loc('Wenrum')
  .withAdditionalInfo('Rich')
  .build();

export const me2_system_hourglass_nebula_faryar = sys('Faryar')
  .hasLocations(
    me2_location_hourglass_nebula_faryar_alingon,
    me2_location_hourglass_nebula_faryar_antictra,
    me2_location_hourglass_nebula_faryar_daratar,
    me2_location_hourglass_nebula_faryar_nephros,
    me2_location_hourglass_nebula_faryar_quarem,
    me2_location_hourglass_nebula_faryar_tunfigel,
    me2_location_hourglass_nebula_faryar_wenrum,
  )
  .build();

export const me2_location_hourglass_nebula_osun_aganju = loc('Aganju')
  .withAdditionalInfo('Good')
  .build();

export const me2_location_hourglass_nebula_osun_erinle = loc('Erinle')
  .withAdditionalInfo('Good (Element Zero)')
  .build();

export const me2_location_hourglass_nebula_osun_olokun = loc('Olokun')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_hourglass_nebula_osun_orunmila = loc('Orunmila')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_hourglass_nebula_osun = sys('Osun')
  .hasLocations(
    me2_location_hourglass_nebula_osun_aganju,
    me2_location_hourglass_nebula_osun_erinle,
    me2_location_hourglass_nebula_osun_olokun,
    me2_location_hourglass_nebula_osun_orunmila,
  )
  .build();

export const me2_location_hourglass_nebula_ploitari_aigela = loc('Aigela')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_hourglass_nebula_ploitari_synalus = loc('Synalus')
  .withAdditionalInfo('Good')
  .build();

export const me2_location_hourglass_nebula_ploitari_thegan = loc('Thegan')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_location_hourglass_nebula_ploitari_zanethu = loc('Zanethu')
  .withAdditionalInfo('Good')
  .build();

export const me2_system_hourglass_nebula_ploitari = sys('Ploitari')
  .hasLocations(
    me2_location_hourglass_nebula_ploitari_aigela,
    me2_location_hourglass_nebula_ploitari_synalus,
    me2_location_hourglass_nebula_ploitari_thegan,
    me2_location_hourglass_nebula_ploitari_zanethu,
  )
  .build();

export const me2_cluster_hourglass_nebula = cl('Hourglass Nebula', 'Hourglass_Nebula', 'Hourglass_Nebula')
  .hasSystems(
    me2_system_hourglass_nebula_faryar,
    me2_system_hourglass_nebula_osun,
    me2_system_hourglass_nebula_ploitari,
  )
  .build();

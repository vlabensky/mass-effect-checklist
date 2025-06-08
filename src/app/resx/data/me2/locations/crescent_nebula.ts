import { cl, loc, sys } from '../../builders';

// Crescent Nebula

export const me2_location_crescent_nebula_lusarn_doriae = loc('Doriae')
  .withAdditionalInfo('Good')
  .build();

export const me2_location_crescent_nebula_lusarn_euntanta = loc('Euntanta')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_crescent_nebula_lusarn_jontan = loc('Jontan')
  .withAdditionalInfo('Good')
  .build();

export const me2_location_crescent_nebula_lusarn_tarith = loc('Tarith')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_location_crescent_nebula_lusarn_xetic = loc('Xetic')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_crescent_nebula_lusarn = sys('Lusarn')
  .hasLocations(
    me2_location_crescent_nebula_lusarn_doriae,
    me2_location_crescent_nebula_lusarn_euntanta,
    me2_location_crescent_nebula_lusarn_jontan,
    me2_location_crescent_nebula_lusarn_tarith,
    me2_location_crescent_nebula_lusarn_xetic,
  )
  .build();

export const me2_location_crescent_nebula_ondeste_acaeria = loc('Acaeria')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_crescent_nebula_ondeste_maisuth = loc('Maisuth')
  .withAdditionalInfo('Good')
  .build();

export const me2_location_crescent_nebula_ondeste_zesmeni = loc('Zesmeni')
  .withAdditionalInfo('Rich')
  .build();

export const me2_system_crescent_nebula_ondeste = sys('Ondeste')
  .hasLocations(
    me2_location_crescent_nebula_ondeste_acaeria,
    me2_location_crescent_nebula_ondeste_maisuth,
    me2_location_crescent_nebula_ondeste_zesmeni,
  )
  .build();

export const me2_location_crescent_nebula_tasale_beregale = loc('Beregale')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_crescent_nebula_tasale_illium = loc('Illium')
  .withAdditionalInfo('N/A')
  .build();

export const me2_location_crescent_nebula_tasale_naxell = loc('Naxell')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_crescent_nebula_tasale_ponolus = loc('Ponolus')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_crescent_nebula_tasale_thail = loc('Thail')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_crescent_nebula_tasale = sys('Tasale')
  .hasLocations(
    me2_location_crescent_nebula_tasale_beregale,
    me2_location_crescent_nebula_tasale_illium,
    me2_location_crescent_nebula_tasale_naxell,
    me2_location_crescent_nebula_tasale_ponolus,
    me2_location_crescent_nebula_tasale_thail,
  )
  .build();

export const me2_location_crescent_nebula_zelene_epho = loc('Epho')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_crescent_nebula_zelene_gaelon = loc('Gaelon')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_crescent_nebula_zelene_helyme = loc('Helyme')
  .withAdditionalInfo('Moderate (Element Zero)')
  .build();

export const me2_location_crescent_nebula_zelene_nepyma = loc('Nepyma')
  .withAdditionalInfo('Rich')
  .build();

export const me2_system_crescent_nebula_zelene = sys('Zelene')
  .hasLocations(
    me2_location_crescent_nebula_zelene_epho,
    me2_location_crescent_nebula_zelene_gaelon,
    me2_location_crescent_nebula_zelene_helyme,
    me2_location_crescent_nebula_zelene_nepyma,
  )
  .build();

export const me2_cluster_crescent_nebula = cl('Crescent Nebula')
  .hasSystems(
    me2_system_crescent_nebula_lusarn,
    me2_system_crescent_nebula_ondeste,
    me2_system_crescent_nebula_tasale,
    me2_system_crescent_nebula_zelene,
  )
  .build();

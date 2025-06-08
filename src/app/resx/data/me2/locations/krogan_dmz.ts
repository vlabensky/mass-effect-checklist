import { cl, loc, sys } from '../../builders';

// Krogan DMZ

export const me2_location_krogan_dmz_aralakh_durak = loc('Durak')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_krogan_dmz_aralakh_kanin = loc('Kanin')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_krogan_dmz_aralakh_kruban = loc('Kruban')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_krogan_dmz_aralakh_ruam = loc('Ruam')
  .withAdditionalInfo('Poor')
  .build();

export const me2_location_krogan_dmz_aralakh_tuchanka = loc('Tuchanka')
  .withAdditionalInfo('N/A')
  .build();

export const me2_location_krogan_dmz_aralakh_vaul = loc('Vaul')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_krogan_dmz_aralakh = sys('Aralakh')
  .hasLocations(
    me2_location_krogan_dmz_aralakh_durak,
    me2_location_krogan_dmz_aralakh_kanin,
    me2_location_krogan_dmz_aralakh_kruban,
    me2_location_krogan_dmz_aralakh_ruam,
    me2_location_krogan_dmz_aralakh_tuchanka,
    me2_location_krogan_dmz_aralakh_vaul,
  )
  .build();

export const me2_location_krogan_dmz_nith_mantun = loc('Mantun')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_location_krogan_dmz_nith_tula = loc('Tula')
  .withAdditionalInfo('Poor')
  .build();

export const me2_location_krogan_dmz_nith_vard = loc('Vard')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_krogan_dmz_nith = sys('Nith')
  .hasLocations(
    me2_location_krogan_dmz_nith_mantun,
    me2_location_krogan_dmz_nith_tula,
    me2_location_krogan_dmz_nith_vard,
  )
  .build();

export const me2_location_krogan_dmz_dranek_kelim = loc('Kelim')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_krogan_dmz_dranek_dor = loc('Dor')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_krogan_dmz_dranek_sazgoth = loc('Sazgoth')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_krogan_dmz_dranek_rothla = loc('Rothla')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_system_krogan_dmz_dranek = sys('Dranek')
  .hasLocations(
    me2_location_krogan_dmz_dranek_kelim,
    me2_location_krogan_dmz_dranek_dor,
    me2_location_krogan_dmz_dranek_sazgoth,
    me2_location_krogan_dmz_dranek_rothla,
  )
  .build();

export const me2_cluster_krogan_dmz = cl('Krogan DMZ')
  .hasSystems(
    me2_system_krogan_dmz_aralakh,
    me2_system_krogan_dmz_nith,
    me2_system_krogan_dmz_dranek,
  )
  .build();

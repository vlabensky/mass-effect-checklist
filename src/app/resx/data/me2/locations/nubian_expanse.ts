import { cl, loc, sys } from '../../builders';

// Nubian Expanse

export const me2_location_nubian_expanse_dakka_alkonost = loc('Alkonost')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_nubian_expanse_dakka_bannik = loc('Bannik')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_nubian_expanse_dakka_gamayun = loc('Gamayun')
  .withAdditionalInfo('Poor')
  .build();

export const me2_location_nubian_expanse_dakka_pragia = loc('Pragia')
  .withAdditionalInfo('N/A')
  .build();

export const me2_location_nubian_expanse_dakka_zirnitra = loc('Zirnitra')
  .withAdditionalInfo('Rich')
  .build();

export const me2_system_nubian_expanse_dakka = sys('Dakka')
  .hasLocations(
    me2_location_nubian_expanse_dakka_alkonost,
    me2_location_nubian_expanse_dakka_bannik,
    me2_location_nubian_expanse_dakka_gamayun,
    me2_location_nubian_expanse_dakka_pragia,
    me2_location_nubian_expanse_dakka_zirnitra,
  )
  .build();

export const me2_location_nubian_expanse_kalabsha_tefnut = loc('Tefnut')
  .withAdditionalInfo('Poor')
  .build();

export const me2_location_nubian_expanse_kalabsha_yamm = loc('Yamm')
  .withAdditionalInfo('Moderate (Element Zero)')
  .build();

export const me2_system_nubian_expanse_kalabsha = sys('Kalabsha')
  .hasLocations(
    me2_location_nubian_expanse_kalabsha_tefnut,
    me2_location_nubian_expanse_kalabsha_yamm,
  )
  .build();

export const me2_location_nubian_expanse_qertassi_noresha = loc('Noresha')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_nubian_expanse_qertassi = sys('Qertassi')
  .hasLocations(
    me2_location_nubian_expanse_qertassi_noresha,
  )
  .build();

export const me2_cluster_nubian_expanse = cl('Nubian Expanse')
  .hasSystems(
    me2_system_nubian_expanse_dakka,
    me2_system_nubian_expanse_kalabsha,
    me2_system_nubian_expanse_qertassi,
  )
  .build();

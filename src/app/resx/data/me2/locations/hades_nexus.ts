import { cl, loc, sys } from '../../builders';

// Hades Nexus

export const me2_location_hades_nexus_hekate_bothros = loc('Bothros')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_location_hades_nexus_hekate_ker = loc('Ker')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_hades_nexus_hekate_triodia = loc('Triodia')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_hades_nexus_hekate = sys('Hekate')
  .hasLocations(
    me2_location_hades_nexus_hekate_bothros,
    me2_location_hades_nexus_hekate_ker,
    me2_location_hades_nexus_hekate_triodia,
  )
  .build();

export const me2_location_hades_nexus_pamyat_dobrovolski = loc('Dobrovolski')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_location_hades_nexus_pamyat_komarov = loc('Komarov')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_hades_nexus_pamyat_patsayev = loc('Patsayev')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_hades_nexus_pamyat_volkov = loc('Volkov')
  .withAdditionalInfo('Rich')
  .build();

export const me2_system_hades_nexus_pamyat = sys('Pamyat')
  .hasLocations(
    me2_location_hades_nexus_pamyat_dobrovolski,
    me2_location_hades_nexus_pamyat_komarov,
    me2_location_hades_nexus_pamyat_patsayev,
    me2_location_hades_nexus_pamyat_volkov,
  )
  .build();

export const me2_location_hades_nexus_sheol_gei_hinnom = loc('Gei Hinnom')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_system_hades_nexus_sheol = sys('Sheol')
  .hasLocations(
    me2_location_hades_nexus_sheol_gei_hinnom,
  )
  .build();

export const me2_location_hades_nexus_hoplos_aegis = loc('Aegis')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_hades_nexus_hoplos_trident = loc('Trident')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_hades_nexus_hoplos_kopis = loc('Kopis')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_hades_nexus_hoplos_makhaira = loc('Makhaira')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_hades_nexus_hoplos_talaria = loc('Talaria')
  .withAdditionalInfo('Good')
  .build();

export const me2_system_hades_nexus_hoplos = sys('Hoplos')
  .hasLocations(
    me2_location_hades_nexus_hoplos_aegis,
    me2_location_hades_nexus_hoplos_trident,
    me2_location_hades_nexus_hoplos_kopis,
    me2_location_hades_nexus_hoplos_makhaira,
    me2_location_hades_nexus_hoplos_talaria,
  )
  .build();

export const me2_cluster_hades_nexus = cl('Hades Nexus')
  .hasSystems(
    me2_system_hades_nexus_hekate,
    me2_system_hades_nexus_pamyat,
    me2_system_hades_nexus_sheol,
    me2_system_hades_nexus_hoplos,
  )
  .build();

import { cl, loc, sys } from '../../builders';

// Omega Nebula

export const me2_location_omega_nebula_arinlarkan_utha = loc('Utha')
  .withAdditionalInfo('Rich')
  .build();

export const me2_system_omega_nebula_arinlarkan = sys('Arinlarkan')
  .hasLocations(
    me2_location_omega_nebula_arinlarkan_utha,
  )
  .build();

export const me2_location_omega_nebula_batalla_logasiri = loc('Logasiri')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_omega_nebula_batalla_nearog = loc('Nearog')
  .withAdditionalInfo('Moderate (Element Zero)')
  .build();

export const me2_location_omega_nebula_batalla_thunawanuro = loc('Thunawanuro')
  .withAdditionalInfo('Good (Element Zero)')
  .build();

export const me2_system_omega_nebula_batalla = sys('Batalla')
  .hasLocations(
    me2_location_omega_nebula_batalla_logasiri,
    me2_location_omega_nebula_batalla_nearog,
    me2_location_omega_nebula_batalla_thunawanuro,
  )
  .build();

export const me2_location_omega_nebula_fathar_dorgal = loc('Dorgal')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_omega_nebula_fathar_korar = loc('Korar')
  .withAdditionalInfo('Good')
  .build();

export const me2_location_omega_nebula_fathar_lorek = loc('Lorek')
  .withAdditionalInfo('Rich')
  .build();

export const me2_system_omega_nebula_fathar = sys('Fathar')
  .hasLocations(
    me2_location_omega_nebula_fathar_dorgal,
    me2_location_omega_nebula_fathar_korar,
    me2_location_omega_nebula_fathar_lorek,
  )
  .build();

export const me2_location_omega_nebula_kairavamori_sehtor = loc('Sehtor')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_omega_nebula_kairavamori_uwan_oche = loc('Uwan Oche')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_omega_nebula_kairavamori_vatar = loc('Vatar')
  .withAdditionalInfo('Rich')
  .build();

export const me2_system_omega_nebula_kairavamori = sys('Kairavamori')
  .hasLocations(
    me2_location_omega_nebula_kairavamori_sehtor,
    me2_location_omega_nebula_kairavamori_uwan_oche,
    me2_location_omega_nebula_kairavamori_vatar,
  )
  .build();

export const me2_location_omega_nebula_sahrabarik_bindur = loc('Bindur')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_omega_nebula_sahrabarik_imorkan = loc('Imorkan')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_omega_nebula_sahrabarik_omega = loc('Omega')
  .withAdditionalInfo('N/A')
  .build();

export const me2_location_omega_nebula_sahrabarik_urdak = loc('Urdak')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_omega_nebula_sahrabarik = sys('Sahrabarik')
  .hasLocations(
    me2_location_omega_nebula_sahrabarik_bindur,
    me2_location_omega_nebula_sahrabarik_imorkan,
    me2_location_omega_nebula_sahrabarik_omega,
    me2_location_omega_nebula_sahrabarik_urdak,
  )
  .build();

export const me2_cluster_omega_nebula = cl('Omega Nebula', 'Omega_Nebula', 'Omega_Nebula')
  .hasSystems(
    me2_system_omega_nebula_arinlarkan,
    me2_system_omega_nebula_batalla,
    me2_system_omega_nebula_fathar,
    me2_system_omega_nebula_kairavamori,
    me2_system_omega_nebula_sahrabarik,
  )
  .build();

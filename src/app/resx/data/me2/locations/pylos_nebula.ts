import { cl, loc, sys } from '../../builders';

// Pylos Nebula

export const me2_location_pylos_nebula_dirada_canalus = loc('Canalus')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_pylos_nebula_dirada_siano = loc('Siano')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_location_pylos_nebula_dirada_sineus = loc('Sineus')
  .withAdditionalInfo('Poor')
  .build();

export const me2_location_pylos_nebula_dirada_thenusi = loc('Thenusi')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_pylos_nebula_dirada_vioresa = loc('Vioresa')
  .withAdditionalInfo('Poor')
  .build();

export const me2_location_pylos_nebula_dirada_zeth = loc('Zeth')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_pylos_nebula_dirada = sys('Dirada')
  .hasLocations(
    me2_location_pylos_nebula_dirada_canalus,
    me2_location_pylos_nebula_dirada_siano,
    me2_location_pylos_nebula_dirada_sineus,
    me2_location_pylos_nebula_dirada_thenusi,
    me2_location_pylos_nebula_dirada_vioresa,
    me2_location_pylos_nebula_dirada_zeth,
  )
  .build();

export const me2_location_pylos_nebula_kriseroi_geus = loc('Geus')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_pylos_nebula_kriseroi_neidus = loc('Neidus')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_pylos_nebula_kriseroi_tenoth = loc('Tenoth')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_pylos_nebula_kriseroi_theonax = loc('Theonax')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_pylos_nebula_kriseroi_uzin = loc('Uzin')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_pylos_nebula_kriseroi = sys('Kriseroi')
  .hasLocations(
    me2_location_pylos_nebula_kriseroi_geus,
    me2_location_pylos_nebula_kriseroi_neidus,
    me2_location_pylos_nebula_kriseroi_tenoth,
    me2_location_pylos_nebula_kriseroi_theonax,
    me2_location_pylos_nebula_kriseroi_uzin,
  )
  .build();

export const me2_location_pylos_nebula_nariph_isale = loc('Isale')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_pylos_nebula_nariph_jonus = loc('Jonus')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_pylos_nebula_nariph = sys('Nariph')
  .hasLocations(
    me2_location_pylos_nebula_nariph_isale,
    me2_location_pylos_nebula_nariph_jonus,
  )
  .build();

export const me2_location_pylos_nebula_satent_anedia = loc('Anedia')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_pylos_nebula_satent_boro = loc('Boro')
  .withAdditionalInfo('Moderate (Element Zero)')
  .build();

export const me2_location_pylos_nebula_satent_nataisa = loc('Nataisa')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_pylos_nebula_satent_raisaris = loc('Raisaris')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_location_pylos_nebula_satent_rescel = loc('Rescel')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_pylos_nebula_satent = sys('Satent')
  .hasLocations(
    me2_location_pylos_nebula_satent_anedia,
    me2_location_pylos_nebula_satent_boro,
    me2_location_pylos_nebula_satent_nataisa,
    me2_location_pylos_nebula_satent_raisaris,
    me2_location_pylos_nebula_satent_rescel,
  )
  .build();

export const me2_cluster_pylos_nebula = cl('Pylos Nebula')
  .hasSystems(
    me2_system_pylos_nebula_dirada,
    me2_system_pylos_nebula_kriseroi,
    me2_system_pylos_nebula_nariph,
    me2_system_pylos_nebula_satent,
  )
  .build();

import { cl, loc, sys } from '../../builders';

// Rosetta Nebula

export const me2_location_rosetta_nebula_alpha_draconis_2175_aeia = loc('2175 Aeia')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_location_rosetta_nebula_alpha_draconis_2175_ar2 = loc('2175 AR2')
  .withAdditionalInfo('Poor')
  .build();

export const me2_system_rosetta_nebula_alpha_draconis = sys('Alpha Draconis')
  .hasLocations(
    me2_location_rosetta_nebula_alpha_draconis_2175_aeia,
    me2_location_rosetta_nebula_alpha_draconis_2175_ar2,
  )
  .build();

export const me2_location_rosetta_nebula_enoch_goliath = loc('Goliath')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_rosetta_nebula_enoch_joab = loc('Joab')
  .withAdditionalInfo('Moderate (Element Zero)')
  .build();

export const me2_location_rosetta_nebula_enoch_laban = loc('Laban')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_location_rosetta_nebula_enoch_mizraim = loc('Mizraim')
  .withAdditionalInfo('Moderate (Element Zero)')
  .build();

export const me2_system_rosetta_nebula_enoch = sys('Enoch')
  .hasLocations(
    me2_location_rosetta_nebula_enoch_goliath,
    me2_location_rosetta_nebula_enoch_joab,
    me2_location_rosetta_nebula_enoch_laban,
    me2_location_rosetta_nebula_enoch_mizraim,
  )
  .build();

export const me2_location_rosetta_nebula_phi_clio_cyllene = loc('Cyllene')
  .withAdditionalInfo('Poor')
  .build();

export const me2_location_rosetta_nebula_phi_clio_parnassus = loc('Parnassus')
  .withAdditionalInfo('Rich')
  .build();

export const me2_system_rosetta_nebula_phi_clio = sys('Phi Clio')
  .hasLocations(
    me2_location_rosetta_nebula_phi_clio_cyllene,
    me2_location_rosetta_nebula_phi_clio_parnassus,
  )
  .build();

export const me2_cluster_rosetta_nebula = cl('Rosetta Nebula', 'Rosetta_Nebula', 'Rosetta_Nebula')
  .hasSystems(
    me2_system_rosetta_nebula_alpha_draconis,
    me2_system_rosetta_nebula_enoch,
    me2_system_rosetta_nebula_phi_clio,
  )
  .build();

import { cl, loc, sys } from '../../builders';

// Hawking Eta

export const me2_location_hawking_eta_century_cantra = loc('Cantra')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_hawking_eta_century_klendagon = loc('Klendagon')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_hawking_eta_century_tamahera = loc('Tamahera')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_hawking_eta_century_tharopto = loc('Tharopto')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_hawking_eta_century = sys('Century')
  .hasLocations(
    me2_location_hawking_eta_century_cantra,
    me2_location_hawking_eta_century_klendagon,
    me2_location_hawking_eta_century_tamahera,
    me2_location_hawking_eta_century_tharopto,
  )
  .build();

export const me2_location_hawking_eta_chandrasekhar_hebat = loc('Hebat')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_hawking_eta_chandrasekhar_teshub = loc('Teshub')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_hawking_eta_chandrasekhar = sys('Chandrasekhar')
  .hasLocations(
    me2_location_hawking_eta_chandrasekhar_hebat,
    me2_location_hawking_eta_chandrasekhar_teshub,
  )
  .build();

export const me2_location_hawking_eta_schwarzschild_atahil = loc('Atahil')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_hawking_eta_schwarzschild_etamis = loc('Etamis')
  .withAdditionalInfo('Good (Element Zero)')
  .build();

export const me2_location_hawking_eta_schwarzschild_linossa = loc('Linossa')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_hawking_eta_schwarzschild_rihali = loc('Rihali')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_hawking_eta_schwarzschild = sys('Schwarzschild')
  .hasLocations(
    me2_location_hawking_eta_schwarzschild_atahil,
    me2_location_hawking_eta_schwarzschild_etamis,
    me2_location_hawking_eta_schwarzschild_linossa,
    me2_location_hawking_eta_schwarzschild_rihali,
  )
  .build();

export const me2_location_hawking_eta_thorne_derelict_reaper = loc('Derelict Reaper')
  .withAdditionalInfo('N/A')
  .build();

export const me2_location_hawking_eta_thorne_lethe = loc('Lethe')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_hawking_eta_thorne_mnemosyne = loc('Mnemosyne')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_hawking_eta_thorne = sys('Thorne')
  .hasLocations(
    me2_location_hawking_eta_thorne_derelict_reaper,
    me2_location_hawking_eta_thorne_lethe,
    me2_location_hawking_eta_thorne_mnemosyne,
  )
  .build();

export const me2_cluster_hawking_eta = cl('Hawking Eta')
  .hasSystems(
    me2_system_hawking_eta_century,
    me2_system_hawking_eta_chandrasekhar,
    me2_system_hawking_eta_schwarzschild,
    me2_system_hawking_eta_thorne,
  )
  .build();

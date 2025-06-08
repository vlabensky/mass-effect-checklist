import { cl, loc, sys } from '../../builders';

// Shadow Sea

export const me2_location_shadow_sea_iera_horizon = loc('Horizon')
  .withAdditionalInfo('N/A')
  .build();

export const me2_location_shadow_sea_iera_prospect = loc('Prospect')
  .withAdditionalInfo('Poor')
  .build();

export const me2_location_shadow_sea_iera_venture = loc('Venture')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_shadow_sea_iera_watchman = loc('Watchman')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_shadow_sea_iera = sys('Iera')
  .hasLocations(
    me2_location_shadow_sea_iera_horizon,
    me2_location_shadow_sea_iera_prospect,
    me2_location_shadow_sea_iera_venture,
    me2_location_shadow_sea_iera_watchman,
  )
  .build();

export const me2_cluster_shadow_sea = cl('Shadow Sea')
  .hasSystems(
    me2_system_shadow_sea_iera,
  )
  .build();

import { cl, loc, sys } from '../../builders';

// Far Rim

export const me2_location_far_rim_dholen_charoum = loc('Charoum')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_far_rim_dholen_gotha = loc('Gotha')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_location_far_rim_dholen_haestrom = loc('Haestrom')
  .withAdditionalInfo('N/A')
  .build();

export const me2_system_far_rim_dholen = sys('Dholen')
  .hasLocations(
    me2_location_far_rim_dholen_charoum,
    me2_location_far_rim_dholen_gotha,
    me2_location_far_rim_dholen_haestrom,
  )
  .build();

export const me2_location_far_rim_ma_at_ammut = loc('Ammut')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_far_rim_ma_at = sys('Ma-at')
  .hasLocations(
    me2_location_far_rim_ma_at_ammut,
  )
  .build();

export const me2_cluster_far_rim = cl('Far Rim', 'Far_Rim', 'Far_Rim')
  .hasSystems(
    me2_system_far_rim_dholen,
    me2_system_far_rim_ma_at,
  )
  .build();

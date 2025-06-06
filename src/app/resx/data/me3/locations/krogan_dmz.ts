import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Krogan DMZ

export const me3_location_krogan_dmz_dranek_rothla = loc('Rothla')
  .hasMissions(m.me3_mission_citadel_barla_von)
  .build();

export const me3_location_krogan_dmz_dranek_southeast_of_star = loc('Southeast of Star')
  .withAdditionalInfo('Wreckage: Fuel 200')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_krogan_dmz_dranek = sys('Dranek')
  .hasLocations(
    me3_location_krogan_dmz_dranek_rothla,
    me3_location_krogan_dmz_dranek_southeast_of_star,
  )
  .build();

export const me3_location_krogan_dmz_nith_northeast_of_star = loc('Northeast of Star')
  .withAdditionalInfo('Wreckage: Fuel 300')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_krogan_dmz_nith = sys('Nith')
  .hasLocations(
    me3_location_krogan_dmz_nith_northeast_of_star,
  )
  .build();

export const me3_cluster_krogan_dmz = cl('Krogan DMZ', 'Krogan_DMZ', 'Krogan_DMZ')
  .hasSystems(
    me3_system_krogan_dmz_dranek,
    me3_system_krogan_dmz_nith,
  )
  .build();

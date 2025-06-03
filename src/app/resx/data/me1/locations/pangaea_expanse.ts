import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Pangaea Expanse

export const me1_location_pangaea_expanse_refuge_ilos = loc('Ilos')
  .hasMissions(m.me1_mission_find_the_conduit)
  .build();

export const me1_system_pangaea_expanse_refuge = sys('Refuge')
  .hasLocations(me1_location_pangaea_expanse_refuge_ilos)
  .build();

export const me1_cluster_pangaea_expanse = cl('Pangaea Expanse', 'Pangaea_Expanse', 'Pangaea_Expanse')
  .hasSystems(me1_system_pangaea_expanse_refuge)
  .build();

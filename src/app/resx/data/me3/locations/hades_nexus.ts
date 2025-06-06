import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Hades Nexus

export const me3_location_hades_nexus_hekate_southwest_of_mass_relay = loc('Southwest of Mass Relay')
  .withAdditionalInfo('Wreckage: Fuel 380')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_hades_nexus_hekate_asteria = loc('Asteria')
  .withAdditionalInfo('Alliance Frigate Hong Kong, Alliance Fifth Fleet')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_hades_nexus_hekate = sys('Hekate')
  .hasLocations(
    me3_location_hades_nexus_hekate_southwest_of_mass_relay,
    me3_location_hades_nexus_hekate_asteria,
  )
  .build();

export const me3_location_hades_nexus_hoplos_kopis = loc('Kopis')
  .hasMissions(m.me3_mission_hades_nexus_obelisk_of_karza)
  .build();

export const me3_location_hades_nexus_hoplos_far_west_of_system = loc('Far West of System')
  .withAdditionalInfo('Wreckage: Fuel 250')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_hades_nexus_hoplos = sys('Hoplos')
  .hasLocations(
    me3_location_hades_nexus_hoplos_kopis,
    me3_location_hades_nexus_hoplos_far_west_of_system,
  )
  .build();

export const me3_location_hades_nexus_sheol_gei_hinnom = loc('Gei Hinnom')
  .hasMissions(m.me3_mission_hades_nexus_prothean_sphere)
  .build();

export const me3_system_hades_nexus_sheol = sys('Sheol')
  .hasLocations(
    me3_location_hades_nexus_sheol_gei_hinnom,
  )
  .build();

export const me3_location_hades_nexus_pamyat_dobrovolski = loc('Dobrovolski')
  .withAdditionalInfo('Alliance Frigate Leipzig, Alliance First Fleet')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_hades_nexus_pamyat_south_of_star = loc('South of Star')
  .withAdditionalInfo('Wreckage: Fuel 100')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_hades_nexus_pamyat = sys('Pamyat')
  .hasLocations(
    me3_location_hades_nexus_pamyat_dobrovolski,
    me3_location_hades_nexus_pamyat_south_of_star,
  )
  .build();

export const me3_cluster_hades_nexus = cl('Hades Nexus', 'Hades_Nexus', 'Hades_Nexus')
  .hasSystems(
    me3_system_hades_nexus_hekate,
    me3_system_hades_nexus_hoplos,
    me3_system_hades_nexus_sheol,
    me3_system_hades_nexus_pamyat,
  )
  .build();

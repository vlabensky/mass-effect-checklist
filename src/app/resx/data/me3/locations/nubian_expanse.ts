import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Nubian Expanse

export const me3_location_nubian_expanse_dakka_pragia = loc('Pragia')
  .withAdditionalInfo('Research Data from Pragia')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_nubian_expanse_dakka_southeast_of_star = loc('Southeast of Star')
  .withAdditionalInfo('Wreckage: Fuel 350')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_nubian_expanse_dakka = sys('Dakka')
  .hasLocations(
    me3_location_nubian_expanse_dakka_pragia,
    me3_location_nubian_expanse_dakka_southeast_of_star,
  )
  .build();

export const me3_location_nubian_expanse_qertassi_noresha = loc('Noresha')
  .withAdditionalInfo('Alliance Frigate Trafalgar')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_nubian_expanse_qertassi_north_of_noresha = loc('North of Noresha')
  .withAdditionalInfo('Wreckage: Fuel 50')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_nubian_expanse_qertassi = sys('Qertassi')
  .hasLocations(
    me3_location_nubian_expanse_qertassi_noresha,
    me3_location_nubian_expanse_qertassi_north_of_noresha,
  )
  .build();

export const me3_location_nubian_expanse_kalabsha_yamm = loc('Yamm')
  .withAdditionalInfo('Alliance Marine Recon Unit, 103rd Marine Division')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_nubian_expanse_kalabsha_northeast_of_star = loc('Northeast of Star')
  .withAdditionalInfo('Wreckage: Fuel 300')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_nubian_expanse_kalabsha = sys('Kalabsha')
  .hasLocations(
    me3_location_nubian_expanse_kalabsha_yamm,
    me3_location_nubian_expanse_kalabsha_northeast_of_star,
  )
  .build();

export const me3_cluster_nubian_expanse = cl('Nubian Expanse', 'Nubian_Expanse', 'Nubian_Expanse')
  .hasSystems(
    me3_system_nubian_expanse_dakka,
    me3_system_nubian_expanse_qertassi,
    me3_system_nubian_expanse_kalabsha,
  )
  .build();

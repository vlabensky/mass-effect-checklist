import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Arcturus Stream

export const me3_location_arcturus_stream_arcturus_arcturus_station = loc('Arcturus Station')
  .withAdditionalInfo('Intel From Battle of Arcturus')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_arcturus_stream_arcturus_west_of_themis = loc('West of Themis')
  .withAdditionalInfo('Wreckage: Fuel 350')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_arcturus_stream_arcturus = sys('Arcturus')
  .hasLocations(
    me3_location_arcturus_stream_arcturus_arcturus_station,
    me3_location_arcturus_stream_arcturus_west_of_themis,
  )
  .build();

export const me3_location_arcturus_stream_euler_southwest_of_yukawa = loc('Southwest of Yukawa')
  .withAdditionalInfo('Wreckage: Fuel 100')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_arcturus_stream_euler = sys('Euler')
  .hasLocations(
    me3_location_arcturus_stream_euler_southwest_of_yukawa,
  )
  .build();

export const me3_cluster_arcturus_stream = cl('Arcturus Stream', 'Arcturus_Stream', 'Arcturus_Stream')
  .hasSystems(
    me3_system_arcturus_stream_arcturus,
    me3_system_arcturus_stream_euler,
  )
  .build();

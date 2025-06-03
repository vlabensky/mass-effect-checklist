import { ch } from '../builders';
import * as m from './missions';

// Prologue

export const me1_chapter_prologue = ch('Prologue')
  .hasMissions(m.me1_mission_prologue_find_the_beacon)
  .build();

// The Citadel I

export const me1_chapter_the_citadel_1 = ch('The Citadel I')
  .hasMissions(
    m.me1_mission_expose_saren,
    m.me1_mission_asari_consort,
    m.me1_mission_doctor_michel,
    m.me1_mission_homecoming,
    m.me1_mission_jahleeds_fears,
    m.me1_mission_presidium_prophet,
    m.me1_mission_reporters_request,
    m.me1_mission_ritas_sister,
    m.me1_mission_scan_the_keepers,
    m.me1_mission_schells_the_gambler,
    m.me1_mission_signal_tracking,
    m.me1_mission_the_fan_1,
    m.me1_mission_xeltans_complaint,
    m.me1_mission_wrex,
    m.me1_mission_garrus,
  )
  .canAcquireMissions(
    m.me1_mission_hostile_takeover,
    m.me1_mission_privateers,
    m.me1_mission_unusual_readings,
    m.me1_mission_strange_transmission,
    m.me1_mission_missing_marines,
  )
  .build();

// Therum

export const me1_chapter_therum = ch('Therum')
  .hasMissions(m.me1_mission_find_liara_t_soni)
  .build();

// Feros

export const me1_chapter_feros = ch('Feros')
  .hasMissions(
    m.me1_mission_geth_attack,
    m.me1_mission_the_thorian,
    m.me1_mission_data_recovery,
    m.me1_mission_data_geth_in_the_tunnels,
    m.me1_mission_power_cells,
    m.me1_mission_varren_meat,
    m.me1_mission_water_restoration,
  )
  .build();

// Noveria

export const me1_chapter_noveria = ch('Noveria')
  .hasMissions(
    m.me1_mission_geth_interest,
    m.me1_mission_espionage,
    m.me1_mission_smuggling,
    m.me1_mission_leave_port_hanshan,
    m.me1_mission_leave_port_hanshan_lorik_qui_in,
    m.me1_mission_peak_15,
    m.me1_mission_peak_15_reconnect_landlines,
    m.me1_mission_peak_15_reactor_repair,
    m.me1_mission_peak_15_contamination,
    m.me1_mission_rift_station,
    m.me1_mission_rift_station_quarantine,
    m.me1_mission_rift_station_matriarch_benezia,
    m.me1_mission_rift_station_hot_labs,
  )
  .canAcquireMissions(m.me1_mission_asari_diplomacy)
  .build();

// The Citadel II

export const me1_chapter_the_citadel_2 = ch('The Citadel II')
  .hasMissions(
    m.me1_mission_snap_inspection,
    m.me1_mission_i_remember_me,
    m.me1_mission_old_friends,
    m.me1_mission_old_unhappy_far_off_things,
    m.me1_mission_the_fourth_estate,
    m.me1_mission_the_fan_2,
    m.me1_mission_family_matter,
    m.me1_mission_planting_a_bug,
  )
  .build();

// The Citadel III

export const me1_chapter_the_citadel_3 = ch('The Citadel III')
  .hasMissions(m.me1_mission_the_fan_3)
  .build();

// Virmire

export const me1_chapter_virmire = ch('Virmire')
  .hasMissions(
    m.me1_mission_saren_plan,
    m.me1_mission_assault,
  )
  .build();

// The Citadel IV (Lockdown)

export const me1_chapter_the_citadel_4 = ch('The Citadel IV (Lockdown)')
  .hasMissions(
    m.me1_mission_our_own_worst_enemy,
    m.me1_mission_negotiators_request,
  )
  .build();

// Race against time

export const me1_chapter_race_against_time = ch('Race against time')
  .hasMissions(
    m.me1_mission_find_the_conduit,
    m.me1_mission_final_battle,
  )
  .build();

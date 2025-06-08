import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Hades Gamma

export const me1_location_hades_gamma_antaeus_edmos = loc('Edmos')
  .hasMissions(m.me1_mission_valuable_minerals_gasses)
  .build();

export const me1_location_hades_gamma_antaeus_ploba = loc('Ploba')
  .hasMissions(m.me1_mission_asari_writings)
  .build();

export const me1_location_hades_gamma_antaeus_vemal = loc('Vemal')
  .hasMissions(m.me1_mission_valuable_minerals_rare_metals)
  .build();

export const me1_location_hades_gamma_antaeus_trebin = loc('Trebin')
  .hasMissions(m.me1_mission_missing_survey_team)
  .build();

export const me1_system_hades_gamma_antaeus = sys('Antaeus')
  .hasLocations(
    me1_location_hades_gamma_antaeus_edmos,
    me1_location_hades_gamma_antaeus_ploba,
    me1_location_hades_gamma_antaeus_vemal,
    me1_location_hades_gamma_antaeus_trebin,
  )
  .build();

export const me1_location_hades_gamma_cacus_zayarter = loc('Zayarter')
  .hasMissions(m.me1_mission_valuable_minerals_heavy_metals)
  .build();

export const me1_location_hades_gamma_cacus_faringar = loc('Faringar')
  .hasMissions(m.me1_mission_valuable_minerals_rare_metals)
  .build();

export const me1_location_hades_gamma_cacus_chohe = loc('Chohe')
  .hasMissions(m.me1_mission_besieged_base)
  .build();

export const me1_system_hades_gamma_cacus = sys('Cacus')
  .hasLocations(
    me1_location_hades_gamma_cacus_zayarter,
    me1_location_hades_gamma_cacus_faringar,
    me1_location_hades_gamma_cacus_chohe,
  )
  .build();

export const me1_location_hades_gamma_dis_nearrum = loc('Nearrum')
  .hasMissions(m.me1_mission_valuable_minerals_light_metals)
  .build();

export const me1_location_hades_gamma_dis_metallic_asteroid = loc('Dis - Metallic Asteroid')
  .hasMissions(m.me1_mission_valuable_minerals_light_metals)
  .build();

export const me1_location_hades_gamma_dis_raysha = loc('Raysha')
  .hasMissions(m.me1_mission_turian_insignias)
  .build();

export const me1_location_hades_gamma_dis_klensal = loc('Klensal')
  .hasMissions(m.me1_mission_hostile_takeover)
  .build();

export const me1_system_hades_gamma_dis = sys('Dis')
  .hasLocations(
    me1_location_hades_gamma_dis_nearrum,
    me1_location_hades_gamma_dis_metallic_asteroid,
    me1_location_hades_gamma_dis_raysha,
    me1_location_hades_gamma_dis_klensal,
  )
  .build();

export const me1_location_hades_gamma_farinata_rocky_asteroid = loc('Farinata - Rocky Asteroid')
  .hasMissions(m.me1_mission_valuable_minerals_light_metals)
  .build();

export const me1_location_hades_gamma_farinata_juntauma = loc('Juntauma')
  .hasMissions(m.me1_mission_prothean_data_discs)
  .build();

export const me1_location_hades_gamma_farinata_nepneu = loc('Nepneu')
  .hasMissions(m.me1_mission_valuable_minerals_rare_metals)
  .build();

export const me1_location_hades_gamma_farinata_msv_ontario = loc('MSV Ontario')
  .hasMissions(m.me1_mission_hostage)
  .build();

export const me1_system_hades_gamma_farinata = sys('Farinata')
  .hasLocations(
    me1_location_hades_gamma_farinata_rocky_asteroid,
    me1_location_hades_gamma_farinata_juntauma,
    me1_location_hades_gamma_farinata_nepneu,
    me1_location_hades_gamma_farinata_msv_ontario,
  )
  .build();

export const me1_location_hades_gamma_plutus_mingito = loc('Mingito')
  .hasMissions(m.me1_mission_valuable_minerals_rare_metals)
  .build();

export const me1_location_hades_gamma_plutus_clocrolis = loc('Clocrolis')
  .hasMissions(m.me1_mission_valuable_minerals_rare_metals)
  .build();

export const me1_location_hades_gamma_plutus_nonuel = loc('Nonuel')
  .hasMissions(m.me1_mission_the_negotiation)
  .build();

export const me1_system_hades_gamma_plutus = sys('Plutus')
  .hasLocations(
    me1_location_hades_gamma_plutus_mingito,
    me1_location_hades_gamma_plutus_clocrolis,
    me1_location_hades_gamma_plutus_nonuel,
  )
  .build();

export const me1_cluster_hades_gamma = cl('Hades Gamma', 'Hades_Gamma', 'Hades_Gamma')
  .hasSystems(
    me1_system_hades_gamma_antaeus,
    me1_system_hades_gamma_cacus,
    me1_system_hades_gamma_dis,
    me1_system_hades_gamma_farinata,
    me1_system_hades_gamma_plutus,
  )
  .build();

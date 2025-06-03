import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Attican Beta

export const me1_location_attican_beta_hercules_syided = loc('Syided')
  .build();

export const me1_location_attican_beta_hercules_zatorus = loc('Zatorus')
  .build();

export const me1_location_attican_beta_hercules_eletania = loc('Eletania')
  .hasMissions(m.me1_mission_lost_module)
  .build();

export const me1_system_attican_beta_hercules = sys('Hercules')
  .hasLocations(
    me1_location_attican_beta_hercules_syided,
    me1_location_attican_beta_hercules_zatorus,
    me1_location_attican_beta_hercules_eletania,
  )
  .build();

export const me1_location_attican_beta_theseus_sharring = loc('Sharring')
  .build();

export const me1_location_attican_beta_theseus_quana = loc('Quana')
  .build();

export const me1_system_attican_beta_theseus = sys('Theseus')
  .hasLocations(
    me1_location_attican_beta_theseus_sharring,
    me1_location_attican_beta_theseus_quana,
  )
  .build();

export const me1_cluster_attican_beta = cl('Attican Beta', 'Attican_Beta', 'Attican_Beta')
  .hasSystems(
    me1_system_attican_beta_hercules,
    me1_system_attican_beta_theseus,
  )
  .build();

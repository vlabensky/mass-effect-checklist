import { cl, loc, sys } from '../../builders';

// Caleston Rift

export const me2_location_caleston_rift_aysur_agnin = loc('Agnin')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_caleston_rift_aysur_alformus = loc('Alformus')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_caleston_rift_aysur_dranen = loc('Dranen')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_caleston_rift_aysur_shasu = loc('Shasu')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_caleston_rift_aysur_shir = loc('Shir')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_caleston_rift_aysur_tamgauta = loc('Tamgauta')
  .withAdditionalInfo('Good')
  .build();

export const me2_system_caleston_rift_aysur = sys('Aysur')
  .hasLocations(
    me2_location_caleston_rift_aysur_agnin,
    me2_location_caleston_rift_aysur_alformus,
    me2_location_caleston_rift_aysur_dranen,
    me2_location_caleston_rift_aysur_shasu,
    me2_location_caleston_rift_aysur_shir,
    me2_location_caleston_rift_aysur_tamgauta,
  )
  .build();

export const me2_location_caleston_rift_balor_bres = loc('Bres')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_caleston_rift_balor_caleston = loc('Caleston')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_location_caleston_rift_balor_cernunnos = loc('Cernunnos')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_caleston_rift_balor_elatha = loc('Elatha')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_caleston_rift_balor_partholon = loc('Partholon')
  .withAdditionalInfo('Rich')
  .build();

export const me2_system_caleston_rift_balor = sys('Balor')
  .hasLocations(
    me2_location_caleston_rift_balor_bres,
    me2_location_caleston_rift_balor_caleston,
    me2_location_caleston_rift_balor_cernunnos,
    me2_location_caleston_rift_balor_elatha,
    me2_location_caleston_rift_balor_partholon,
  )
  .build();

export const me2_location_caleston_rift_solveig_sinmara = loc('Sinmara')
  .withAdditionalInfo('Good')
  .build();

export const me2_location_caleston_rift_solveig_surtur = loc('Surtur')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_caleston_rift_solveig_thrivaldi = loc('Thrivaldi')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_caleston_rift_solveig = sys('Solveig')
  .hasLocations(
    me2_location_caleston_rift_solveig_sinmara,
    me2_location_caleston_rift_solveig_surtur,
    me2_location_caleston_rift_solveig_thrivaldi,
  )
  .build();

export const me2_location_caleston_rift_talava_aitarus = loc('Aitarus')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_caleston_rift_talava_kaushus = loc('Kaushus')
  .withAdditionalInfo('Good')
  .build();

export const me2_location_caleston_rift_talava_maitrum = loc('Maitrum')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_caleston_rift_talava_taitus = loc('Taitus')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_caleston_rift_talava = sys('Talava')
  .hasLocations(
    me2_location_caleston_rift_talava_aitarus,
    me2_location_caleston_rift_talava_kaushus,
    me2_location_caleston_rift_talava_maitrum,
    me2_location_caleston_rift_talava_taitus,
  )
  .build();

export const me2_cluster_caleston_rift = cl('Caleston Rift')
  .hasSystems(
    me2_system_caleston_rift_aysur,
    me2_system_caleston_rift_balor,
    me2_system_caleston_rift_solveig,
    me2_system_caleston_rift_talava,
  )
  .build();

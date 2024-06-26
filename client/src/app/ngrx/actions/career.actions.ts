import { createAction, props } from "@ngrx/store";
import { Career } from "../../models/career.model";

export const getAllAtJobs = createAction(
    '[Career] Get All At Jobs'
    );
export const getAllAtJobsSuccess = createAction(
    '[Career] Get All At Jobs Success',
    props<{careers: Career[]}>()
    );
export const getAllAtJobsFailure = createAction(
    '[Career] Get All At Jobs Failure',
    props<{error: string}>()
    );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByFieldNameAtJob = createAction(
    '[Career] Get By Field Name At Job',
    props<{fieldName: string}>()
    );

export const getByFieldNameAtJobSuccess = createAction(
    '[Career] Get By Field Name At Job Success',
    props<{careers: Career[]}>()
    );

export const getByFieldNameAtJobFailure = createAction(
    '[Career] Get By Field Name At Job Failure',
    props<{error: string}>()
    );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllAtCreateProfile = createAction(
    '[Career] Get All At Create Profile'
    );
export const getAllAtCreateProfileSuccess = createAction(
    '[Career] Get All At Create Profile Success',
    props<{careers: Career[]}>()
    );

export const getAllAtCreateProfileFailure = createAction(
    '[Career] Get All At Create Profile Failure',
    props<{error: string}>()
    );




    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllAtStatistical = createAction(
    '[Career] Get All At Statistical'
    );
export const getAllAtStatisticalSuccess = createAction(
    '[Career] Get All At Statistical Success',
    props<{careers: Career[]}>()
    );
export const getAllAtStatisticalFailure = createAction(
    '[Career] Get All At Statistical Failure',
    props<{error: string}>()
    );




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByFieldAtProfile = createAction(
    '[Career] Get By Field At Profile',
    props<{field: string}>()
    );

export const getByFieldAtProfileSuccess = createAction(
    '[Career] Get By Field At Profile Success',
    props<{careers: Career[]}>()
    );
export const getByFieldAtProfileFailure = createAction(
    '[Career] Get By Field At Profile Failure',
    props<{error: string}>()
    );





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllAtCreateJob = createAction(
    '[Career] Get All At Create Job'
    );
export const getAllAtCreateJobSuccess = createAction(
    '[Career] Get All At Create Job Success',
    props<{careers: Career[]}>()
    );
export const getAllAtCreateJobFailure = createAction(
    '[Career] Get All At Create Job Failure',
    props<{error: string}>()
    );




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllAtProfile = createAction(
    '[Career] Get All At Profile'
    );
export const getAllAtProfileSuccess = createAction(
    '[Career] Get All At Profile Success',
    props<{careers: Career[]}>()
    );
export const getAllAtProfileFailure = createAction(
    '[Career] Get All At Profile Failure',
    props<{error: string}>()
    );





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByFieldAtUpdateProfile = createAction(
    '[Career] Get By Field At Profile',
    props<{field: string}>()
    );
export const getByFieldAtUpdateProfileSuccess = createAction(
    '[Career] Get By Field At Profile Success',
    props<{careers: Career[]}>()
    );
export const getByFieldAtUpdateProfileFailure = createAction(
    '[Career] Get By Field At Profile Failure',
    props<{error: string}>()
    );


    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByFieldAtCreateJob = createAction(
    '[Career] Get By Field At Create Job',
    props<{field: string}>()
    );
export const getByFieldAtCreateJobSuccess = createAction(
    '[Career] Get By Field At Create Job Success',
    props<{careers: Career[]}>()
    );
export const getByFieldAtCreateJobFailure = createAction(
    '[Career] Get By Field At Create Job Failure',
    props<{error: string}>()
    );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByFieldAtJobDetail = createAction(
    '[Career] Get By Field At Update Job',
    props<{field: string}>()
    );
export const getByFieldAtJobDetailSuccess = createAction(
    '[Career] Get By Field At Update Job Success',
    props<{careers: Career[]}>()
    );
export const getByFieldAtJobDetailFailure = createAction(
    '[Career] Get By Field At Update Job Failure',
    props<{error: string}>()
    );




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllAtJobDetail = createAction(
    '[Career] Get All At Job Detail'
    );
export const getAllAtJobDetailSuccess = createAction(
    '[Career] Get All At Job Detail Success',
    props<{careers: Career[]}>()
    );
export const getAllAtJobDetailFailure = createAction(
    '[Career] Get All At Job Detail Failure',
    props<{error: string}>()
    );
    
import { createReducer, on } from "@ngrx/store";
import { CareerState } from "../states/career.state";
import * as CareerActions from "../actions/career.actions";

export const initialState: CareerState = {
    careersTakenByGetAllAtJob: [],
    isGetAllAtJobLoading: false,
    isGetAllAtJobSuccess: false,
    getAllAtJobError: '',
    
    careersTakenByGetByFieldNameAtJob: [] ,
    isGetByFieldNameAtJobLoading: false,
    isGetByFieldNameAtJobSuccess: false,
    getByFieldNameAtJobError: '',

    careersTakenByGetAllAtCreateProfile: [],
    isGetAllAtCreateProfileLoading: false,
    isGetAllAtCreateProfileSuccess: false,
    getAllAtCreateProfileError: '',

    careersTakenByGetByFieldAtProfile: [],
    isGetByFieldAtProfileLoading: false,
    isGetByFieldAtProfileSuccess: false,
    getByFieldAtProfileError: '',

    isGetAllAtCreateJobLoading: false,
    isGetAllAtCreateJobSuccess: false,
    careersTakenByGetAllAtCreateJob: [],
    getAllAtCreateJobError: '',

    isGetByFieldAtCreateJobLoading: true,
    isGetByFieldAtCreateJobSuccess: false,
    careersTakenByGetByFieldAtCreateJob: [],
    getByFieldAtCreateJobError: '',

    isGetByFieldAtUpdateProfileLoading: false,
    isGetByFieldAtUpdateProfileSuccess: false,
    careersTakenByGetByFieldAtUpdateProfile: [],
    careerTakentByGetByFieldAtUpdateProfileError: '',

    isGetAllAtProfileLoading: false,
    isGetAllAtProfileSuccess: false,
    careersTakenByGetAllAtProfile: [],
    getAllAtProfileError: '',

    isGetAllAtJobDetailLoading: false,
    isGetAllAtJobDetailSuccess: false,
    careersTakenByGetAllAtJobDetail: [],
    getAllAtJobDetailError: '',

    isGetByFieldAtJobDetailLoading: false,
    isGetByFieldAtJobDetailSuccess: false,
    careersTakenByGetByFieldAtJobDetail: [],
    getByFieldAtJobDetailError: '',

    isGetAllAtStatisticalLoading: false,
    isGetAllAtStatisticalSuccess: false,
    careersTakenByGetAllAtStatistical: [],
    getAllAtStatisticalError: ''


}

export const careerReducer = createReducer(
    initialState,
    on(CareerActions.getAllAtJobs,(state,action)=>{
        return {
            ...state,
            isGetAllAtJobLoading: true,
            isGetAllAtJobSuccess: false,
            getAllAtJobError: ''
        }
    }),
    on(CareerActions.getAllAtJobsSuccess,(state,action)=>{
        return {
            ...state,
            isGetAllAtJobLoading: false,
            isGetAllAtJobSuccess: true,
            careersTakenByGetAllAtJob: action.careers
        }
    }),
    on(CareerActions.getAllAtJobsFailure,(state,action)=>{
        return {
            ...state,
            isGetAllAtJobLoading: false,
            isGetAllAtJobSuccess: false,
            getAllAtJobError: action.error
        }
    }),


    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CareerActions.getByFieldNameAtJob,(state,action)=>{
        return {
            ...state,
            isGetByFieldNameAtJobLoading: true,
            isGetByFieldNameAtJobSuccess: false,
            getByFieldNameAtJobError: ''
        }
    }),
    on(CareerActions.getByFieldNameAtJobSuccess,(state,action)=>{
        return {
            ...state,
            careersTakenByGetAllAtJob: action.careers,
            isGetByFieldNameAtJobLoading: false,
            isGetByFieldNameAtJobSuccess: true,
            careersTakenByGetByFieldNameAtJob: action.careers
        }
    }),
    on(CareerActions.getByFieldNameAtJobFailure,(state,action)=>{
        return {
            ...state,
            isGetByFieldNameAtJobLoading: false,
            isGetByFieldNameAtJobSuccess: false,
            getByFieldNameAtJobError: action.error
        }
    }),



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CareerActions.getAllAtCreateProfile,(state,action)=>{
        return {
            ...state,
            isGetAllAtCreateProfileLoading: true,
            isGetAllAtCreateProfileSuccess: false,
            getAllAtCreateProfileError: ''
        }
    }),
    on(CareerActions.getAllAtCreateProfileSuccess,(state,action)=>{
        return {
            ...state,
            careersTakenByGetAllAtCreateProfile: action.careers,
            isGetAllAtCreateProfileLoading: false,
            isGetAllAtCreateProfileSuccess: true
        }
    }),
    on(CareerActions.getAllAtCreateProfileFailure,(state,action)=>{
        return {
            ...state,
            isGetAllAtCreateProfileLoading: false,
            isGetAllAtCreateProfileSuccess: false,
            getAllAtCreateProfileError: action.error
        }
    }),

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CareerActions.getByFieldAtProfile,(state,action)=>{
        return {
            ...state,
            isGetByFieldAtProfileLoading: true,
            isGetByFieldAtProfileSuccess: false,
            getByFieldAtProfileError: ''
        }
    }),
    on(CareerActions.getByFieldAtProfileSuccess,(state,action)=>{
        return {
            ...state,
            careersTakenByGetByFieldAtProfile: action.careers,
            isGetByFieldAtProfileLoading: false,
            isGetByFieldAtProfileSuccess: true
        }
    }),
    on(CareerActions.getByFieldAtProfileFailure,(state,action)=>{
        return {
            ...state,
            isGetByFieldAtProfileLoading: false,
            isGetByFieldAtProfileSuccess: false,
            getByFieldAtProfileError: action.error
        }
    }),




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CareerActions.getAllAtCreateJob,(state,action)=>{
        return {
            ...state,
            isGetAllAtCreateJobLoading: true,
            isGetAllAtCreateJobSuccess: false,
            getAllAtCreateJobError: ''
        }
    }),
    on(CareerActions.getAllAtCreateJobSuccess,(state,action)=>{
        return {
            ...state,
            careersTakenByGetAllAtCreateJob: action.careers,
            isGetAllAtCreateJobLoading: false,
            isGetAllAtCreateJobSuccess: true
        }
    }),
    on(CareerActions.getAllAtCreateJobFailure,(state,action)=>{
        return {
            ...state,
            isGetAllAtCreateJobLoading: false,
            isGetAllAtCreateJobSuccess: false,
            getAllAtCreateJobError: action.error
        }
    }),



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CareerActions.getByFieldAtCreateJob,(state,action)=>{
        return {
            ...state,
            isGetByFieldAtCreateJobLoading: true,
            isGetByFieldAtCreateJobSuccess: false,
            getByFieldAtCreateJobError: ''
        }
    }),
    on(CareerActions.getByFieldAtCreateJobSuccess,(state,action)=>{
        return {
            ...state,
            careersTakenByGetByFieldAtCreateJob: action.careers,
            isGetByFieldAtCreateJobLoading: false,
            isGetByFieldAtCreateJobSuccess: true
        }
    }),
    on(CareerActions.getByFieldAtCreateJobFailure,(state,action)=>{
        return {
            ...state,
            isGetByFieldAtCreateJobLoading: false,
            isGetByFieldAtCreateJobSuccess: false,
            getByFieldAtCreateJobError: action.error
        }
    }),




    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CareerActions.getByFieldAtUpdateProfile,(state,action)=>{
        return {
            ...state,
            isGetByFieldAtUpdateProfileLoading: true,
            isGetByFieldAtUpdateProfileSuccess: false,
            careerTakentByGetByFieldAtUpdateProfileError: ''
        }
    }),
    on(CareerActions.getByFieldAtUpdateProfileSuccess,(state,action)=>{
        return {
            ...state,
            careersTakenByGetByFieldAtUpdateProfile: action.careers,
            isGetByFieldAtUpdateProfileLoading: false,
            isGetByFieldAtUpdateProfileSuccess: true
        }
    }),
    on(CareerActions.getByFieldAtUpdateProfileFailure,(state,action)=>{
        return {
            ...state,
            isGetByFieldAtUpdateProfileLoading: false,
            isGetByFieldAtUpdateProfileSuccess: false,
            careerTakentByGetByFieldAtUpdateProfileError: action.error
        }
    }),



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CareerActions.getAllAtProfile,(state,action)=>{
        return {
            ...state,
            isGetAllAtProfileLoading: true,
            isGetAllAtProfileSuccess: false,
            getAllAtProfileError: ''
        }
    }),
    on(CareerActions.getAllAtProfileSuccess,(state,action)=>{
        return {
            ...state,
            careersTakenByGetAllAtProfile: action.careers,
            isGetAllAtProfileLoading: false,
            isGetAllAtProfileSuccess: true
        }
    }),
    on(CareerActions.getAllAtProfileFailure,(state,action)=>{
        return {
            ...state,
            isGetAllAtProfileLoading: false,
            isGetAllAtProfileSuccess: false,
            getAllAtProfileError: action.error
        }
    }),






    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CareerActions.getAllAtJobDetail,(state,action)=>{
        return {
            ...state,
            isGetAllAtJobDetailLoading: true,
            isGetAllAtJobDetailSuccess: false,
            getAllAtJobDetailError: ''
        }
    }),
    on(CareerActions.getAllAtJobDetailSuccess,(state,action)=>{
        return {
            ...state,
            careersTakenByGetAllAtJobDetail: action.careers,
            isGetAllAtJobDetailLoading: false,
            isGetAllAtJobDetailSuccess: true
        }
    }),
    on(CareerActions.getAllAtJobDetailFailure,(state,action)=>{
        return {
            ...state,
            isGetAllAtJobDetailLoading: false,
            isGetAllAtJobDetailSuccess: false,
            getAllAtJobDetailError: action.error
        }
    }),



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CareerActions.getByFieldAtJobDetail,(state,action)=>{
        return {
            ...state,
            isGetByFieldAtJobDetailLoading: true,
            isGetByFieldAtJobDetailSuccess: false,
            getByFieldAtJobDetailError: ''
        }
    }),
    on(CareerActions.getByFieldAtJobDetailSuccess,(state,action)=>{
        return {
            ...state,
            careersTakenByGetByFieldAtJobDetail: action.careers,
            isGetByFieldAtJobDetailLoading: false,
            isGetByFieldAtJobDetailSuccess: true
        }
    }),
    on(CareerActions.getByFieldAtJobDetailFailure,(state,action)=>{
        return {
            ...state,
            isGetByFieldAtJobDetailLoading: false,
            isGetByFieldAtJobDetailSuccess: false,
            getByFieldAtJobDetailError: action.error
        }
    }),



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(CareerActions.getAllAtStatistical,(state,action)=>{
        return {
            ...state,
            isGetAllAtStatisticalLoading: true,
            isGetAllAtStatisticalSuccess: false,
            getAllAtStatisticalError: ''
        }
    }),
    on(CareerActions.getAllAtStatisticalSuccess,(state,action)=>{
        return {
            ...state,
            careersTakenByGetAllAtStatistical: action.careers,
            isGetAllAtStatisticalLoading: false,
            isGetAllAtStatisticalSuccess: true
        }
    }),
    on(CareerActions.getAllAtStatisticalFailure,(state,action)=>{
        return {
            ...state,
            isGetAllAtStatisticalLoading: false,
            isGetAllAtStatisticalSuccess: false,
            getAllAtStatisticalError: action.error
        }
    }),
    

)
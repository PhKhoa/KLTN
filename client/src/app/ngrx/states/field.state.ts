import { Field } from "../../models/field.model";

export interface FieldState{
    fieldAtHome: Field[];
    isGetFieldAtHomeLoading: boolean;
    isGetFieldAtHomeSuccess: boolean;
    getFieldAtHomeError: string;
    
    fieldNoLimitAtJob: Field[];
    isGetAllNoLimitLoading: boolean;
    isGetAllNoLimitSuccess: boolean;
    getAllNoLimitError: string;

    fieldNoLimitAtCreateProfile: Field[];
    isGetAllNoLimitAtCreateProfileLoading: boolean;
    isGetAllNoLimitAtCreateProfileSuccess: boolean;
    getAllNoLimitAtCreateProfileError: string;

    fieldNoLimitAtCreateJob: Field[];
    isGetAllNoLimitAtCreateJobLoading: boolean;
    isGetAllNoLimitAtCreateJobSuccess: boolean;
    getAllNoLimitAtCreateJobError: string;

    fieldNoLimitAtProfile: Field[];
    isGetAllNoLimitAtProfileLoading: boolean;
    isGetAllNoLimitAtProfileSuccess: boolean;
    getAllNoLimitAtProfileError: string;


    fieldNoLimitAtJobDetail: Field[];
    isGetAllNoLimitAtJobDetailLoading: boolean;
    isGetAllNoLimitAtJobDetailSuccess: boolean;
    getAllNoLimitAtJobDetailError: string;

    fieldNoLimitAtStatistical: Field[];
    isGetAllNoLimitAtStatisticalLoading: boolean;
    isGetAllNoLimitAtStatisticalSuccess: boolean;
    getAllNoLimitAtStatisticalError: string;

    fieldNoLimitAtCreateCompany: Field[];
    isGetAllNoLimitAtCreateCompanyLoading: boolean;
    isGetAllNoLimitAtCreateCompanySuccess: boolean;
    getAllNoLimitAtCreateCompanyError: string;
    
    fieldNoLimitAtProfileRecruiter: Field[];
    isGetAllNoLimitAtProfileRecruiterLoading: boolean;
    isGetAllNoLimitAtProfileRecruiterSuccess: boolean;
    getAllNoLimitAtProfileRecruiterError: string;
    
    

}
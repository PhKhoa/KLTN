import { ServicePackage } from "../../models/service-package.model";


export interface ServicePackageState{
    isCreateAtPostJobLoading: boolean;
    isCreateAtPostJobSuccess: boolean;
    createAtPostJobError: string;
    servicePackageCreatedAtPostJob: ServicePackage;

    isGetByIdAtPaymentLoading: boolean;
    isGetByIdAtPaymentSuccess: boolean;
    getByIdAtPaymentError: string;
    servicePackageAtPayment: ServicePackage;
}
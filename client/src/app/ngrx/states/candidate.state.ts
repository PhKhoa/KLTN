import { Candidate } from "../../models/candidate.model";

export interface candidateState{

    isGetByUserWithGoogleAtLoginLoading: boolean;
    isGetByUserWithGoogleAtLoginSuccess: boolean;
    getByUserWithGoogleAtLoginError: string;
    candidateTakenByUserWithGoogleAtLogin: Candidate;

    isCreateCandidateAtCreateProfileLoading: boolean;
    isCreateCandidateAtCreateProfileSuccess: boolean;
    createCandidateAtCreateProfileError: string;

    isGetByUserWithGoogleAtRegisterLoading: boolean;
    isGetByUserWithGoogleAtRegisterSuccess: boolean;
    getByUserWithGoogleAtRegisterError: string;
    candidateTakenByUserWithGoogleAtRegister: Candidate;

}
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CandidateService } from "../../services/candidate/candidate.service";
import * as CandidateActions from "../actions/candidate.actions";
import { catchError, exhaustMap, map, of } from "rxjs";


@Injectable()
export class CandidateEffects{
    constructor(
        private action$: Actions,
        private candidateService: CandidateService
    ){}

    getCandidateByUserWithGoogleAtLogin$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.getByUserWithGoogleAtLogin),
        exhaustMap((action) =>
         this.candidateService.getByUser(action.user).pipe(
            map((item)=>{
                if(item._id.length>0 ){
                    return CandidateActions.getByUserWithGoogleAtLoginSuccess({candidate: item})
                }
                else{
                    return CandidateActions.getByUserWithGoogleAtLoginFailure({error: "Get By User With Google At Login Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.getByUserWithGoogleAtLoginFailure({error: error})))))
         )
    );

    createCandidateAtRegister$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.createCandidateAtCreateProfile),
        exhaustMap((action) =>
        
         this.candidateService.create(action.candidate).pipe(
            map((item)=>{
                console.log(item);
                if(item._id.length>0 ){
                    console.log('create candidate success');
                    
                    return CandidateActions.createCandidateAtCreateProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.createCandidateAtCreateProfileFailure({error: "Create Candidate At Register Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.createCandidateAtCreateProfileFailure({error: error})))))
         )
    );

    
    getCandidateByUserWithGoogleAtRegister$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.getByUserWithGoogleAtRegister),
        exhaustMap((action) =>
         this.candidateService.getByUser(action.user).pipe(
            map((item)=>{

                
                if(item._id.length>0){
                    return CandidateActions.getByUserWithGoogleAtRegisterSuccess({candidate: item})
                }
                else{
                    return CandidateActions.getByUserWithGoogleAtRegisterFailure({error: "Get By User With Google At Register Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.getByUserWithGoogleAtRegisterFailure({error: error})))))
         )
    );


    updateEducationAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateEducationAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateEducation(action.education, action.id).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateEducationAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateEducationAtProfileFailure({error: "Update Education At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateEducationAtProfileFailure({error: error})))))
         )
    );

    updateWorkExperienceAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateWorkExperienceAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateWorkExperience(action.workExperience, action.id).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateWorkExperienceAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateWorkExperienceAtProfileFailure({error: "Update Work Experience At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateWorkExperienceAtProfileFailure({error: error})))))
         )
    );

    updateLanguageAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateLanguageAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateLanguage(action.language, action.id).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateLanguageAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateLanguageAtProfileFailure({error: "Update Language At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateLanguageAtProfileFailure({error: error})))))
         )
    );


    updateDesiredJobAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateDesiredJobAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateDesiredJob(action.desiredJob, action.id).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateDesiredJobAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateDesiredJobAtProfileFailure({error: "Update Desired Job At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateDesiredJobAtProfileFailure({error: error})))))
         )
    );
    updateSkillAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateSkillAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateSkill(action.skill, action.id).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateSkillAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateSkillAtProfileFailure({error: "Update Skill At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateSkillAtProfileFailure({error: error})))))
         )
    );
    updateAvatarAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateAvatarAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateAvatar( action.id, action.storage).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateAvatarAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateAvatarAtProfileFailure({error: "Update Avatar At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateAvatarAtProfileFailure({error: error})))))
         )
    );
    updateBasicInfoAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateBasicInfoAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateBasicInfo(action.basicInfo, action.id).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateBasicInfoAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateBasicInfoAtProfileFailure({error: "Update Basic Info At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateBasicInfoAtProfileFailure({error: error})))))
         )
    );

    UpdateOneOfEducationAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateOneOfEducationAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateOneOfEucation(action.id, action.education).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateOneOfEducationAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateOneOfEducationAtProfileFailure({error: "Update One Of Education At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateOneOfEducationAtProfileFailure({error: error})))))
         )
    );

    UpdateOneOfWorkExperienceAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateOneOfWorkExperienceAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateOneOfWorkExperience(action.id, action.workExperience).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateOneOfWorkExperienceAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateOneOfWorkExperienceAtProfileFailure({error: "Update One Of Work Experience At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateOneOfWorkExperienceAtProfileFailure({error: error})))))
         )
    );

    deleteSkillAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.deleteSkillAtProfile),
        exhaustMap((action) =>
         this.candidateService.deleteSkill(action.id, action.skill).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.deleteSkillAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.deleteSkillAtProfileFailure({error: "Delete Skill At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.deleteSkillAtProfileFailure({error: error})))))
         )
    );
    delelanguageAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.deleteLanguageAtProfile),
        exhaustMap((action) =>
         this.candidateService.deleteLanguage(action.id, action.language).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.deleteLanguageAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.deleteLanguageAtProfileFailure({error: "Delete Language At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.deleteLanguageAtProfileFailure({error: error})))))
         )
    );

    deleteEducationAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.deleteEducationAtProfile),
        exhaustMap((action) =>
         this.candidateService.deleteEducation(action.id, action.education).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.deleteEducationAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.deleteEducationAtProfileFailure({error: "Delete Education At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.deleteEducationAtProfileFailure({error: error})))))
         )
    );

    deleteWorkExperienceAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.deleteWorkExperienceAtProfile),
        exhaustMap((action) =>
         this.candidateService.deleteWorkExperience(action.id, action.workExperience).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.deleteWorkExperienceAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.deleteWorkExperienceAtProfileFailure({error: "Delete Work Experience At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.deleteWorkExperienceAtProfileFailure({error: error})))))
         )
    );


    updateReferenceAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateReferenceAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateReference(action.id, action.references).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateReferenceAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateReferenceAtProfileFailure({error: "Update Reference At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateReferenceAtProfileFailure({error: error})))))
         )
    );

    updateOneOfSkillAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateOneOfSkillAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateOneOfSkill(action.id, action.skill).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateOneOfSkillAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateOneOfSkillAtProfileFailure({error: "Update One Of Skill At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateOneOfSkillAtProfileFailure({error: error})))))
         )
    );

    updateCareerGoalAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateCareerGoalAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateCareerGoal(action.id, action.careerGoal).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateCareerGoalAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateCareerGoalAtProfileFailure({error: "Update Career Goal At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateCareerGoalAtProfileFailure({error: error})))))
         )
    );

    updateOneOfReferenceAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.updateOneOfReferenceAtProfile),
        exhaustMap((action) =>
         this.candidateService.updateOneOfReference(action.id, action.reference).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.updateOneOfReferenceAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.updateOneOfReferenceAtProfileFailure({error: "Update One Of Reference At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.updateOneOfReferenceAtProfileFailure({error: error})))))
         )
    );

    deleteReferenceAtProfile$ = createEffect(()=>
    this.action$.pipe(
        ofType(CandidateActions.deleteReferenceAtProfile),
        exhaustMap((action) =>
         this.candidateService.deleteReference(action.id, action.reference).pipe(
            map((item)=>{
                if(item._id!="500"){
                    return CandidateActions.deleteReferenceAtProfileSuccess({candidate: item})
                }
                else{
                    return CandidateActions.deleteReferenceAtProfileFailure({error: "Delete Reference At Profile Failure"})
                }
            }),
            catchError((error) => of(CandidateActions.deleteReferenceAtProfileFailure({error: error})))))
         )
    );
    
}
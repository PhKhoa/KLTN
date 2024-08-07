import { Injectable } from "@angular/core";
import { BanService } from "../../services/ban/ban.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as BanActions from "../actions/ban.actions";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class BanEffects{
    constructor(
        private actions$: Actions,
        private banService: BanService
    ){}

    banUserAtManageCandidate$ = createEffect(()=>
        this.actions$.pipe(
            ofType(BanActions.banUserAtManageCandidate),
            exhaustMap((action)=>
                this.banService.create(action.ban, action.token).pipe(
                    map((ban)=>{
                        if(ban){
                            return BanActions.banUserAtManageCandidateSuccess()
                        }else{
                            return BanActions.banUserAtManageCandidateFailure({error: "Error"})
                        }
                    }),
                    catchError((error)=>{
                        return of(BanActions.banUserAtManageCandidateFailure({error: error}))
                    })
                )
            )

        )
    )

    unBanAtManageCandidate$ = createEffect(()=>
        this.actions$.pipe(
            ofType(BanActions.unBanUserAtManageCandidate),
            exhaustMap((action)=>
                this.banService.delete(action.ban, action.token).pipe(
                    map((ban)=>{
                        if(ban){
                            return BanActions.unBanUserAtManageCandidateSuccess()
                        }else{
                            return BanActions.unBanUserAtManageCandidateFailure({error: "Error"})
                        
                        }
                    }),
                    catchError((error)=>{
                        return of(BanActions.unBanUserAtManageCandidateFailure({error: error}))
                    })
                )
            )

        )
    )

    banUserAtManageRecruiter$ = createEffect(()=>
        this.actions$.pipe(
            ofType(BanActions.banUserAtManageRecruiter),
            exhaustMap((action)=>
                this.banService.create(action.ban, action.token).pipe(
                    map((ban)=>{
                        if(ban){
                            return BanActions.banUserAtManageRecruiterSuccess()
                        }else{
                            return BanActions.banUserAtManageRecruiterFailure({error: "Error"})
                        }
                    }),
                    catchError((error)=>{
                        return of(BanActions.banUserAtManageRecruiterFailure({error: error}))
                    })
                )
            )

        )
    )

    unBanAtManageRecruiter$ = createEffect(()=>
        this.actions$.pipe(
            ofType(BanActions.unBanUserAtManageRecruiter),
            exhaustMap((action)=>
                this.banService.delete(action.ban, action.token).pipe(
                    map((ban)=>{
                        if(ban){
                            return BanActions.unBanUserAtManageRecruiterSuccess()
                        }else{
                            return BanActions.unBanUserAtManageRecruiterFailure({error: "Error"})
                        }
                    }),
                    catchError((error)=>{
                        return of(BanActions.unBanUserAtManageRecruiterFailure({error: error}))
                    })
                )
            )

        )
    )

    getByCandidateAtManageCandidate$ = createEffect(()=>
        this.actions$.pipe(
            ofType(BanActions.getByCandidateAtManageCandidate),
            exhaustMap((action)=>
                this.banService.getByCandidate(action.candidate).pipe(
                    map((ban)=>{
                        if(ban){
                            return BanActions.getByCandidateAtManageCandidateSuccess({ban: ban})
                        }else{
                            return BanActions.getByCandidateAtManageCandidateFailure({error: "Error"})
                        }
                    }),
                    catchError((error)=>{
                        return of(BanActions.getByCandidateAtManageCandidateFailure({error: error}))
                    })
                )
            )

        )
    )
    getByRecruiterAtManageRecruiter$ = createEffect(()=>
        this.actions$.pipe(
            ofType(BanActions.getByRecruiterAtManageRecruiter),
            exhaustMap((action)=>
                this.banService.getByRecruiter(action.recruiter).pipe(
                    map((ban)=>{
                        if(ban){
                            return BanActions.getByRecruiterAtManageRecruiterSuccess({ban: ban})
                        }else{
                            return BanActions.getByRecruiterAtManageRecruiterFailure({error: "Error"})
                        }
                    }),
                    catchError((error)=>{
                        return of(BanActions.getByRecruiterAtManageRecruiterFailure({error: error}))
                    })
                )
            )

        )
    )

}
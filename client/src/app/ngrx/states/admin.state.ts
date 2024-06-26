import { Admin } from "../../models/admin.model";

export interface AdminState {
    isCreateAtRegisterLoading: boolean;
    isCreateAtRegisterSuccess: boolean;
    createAtRegisterError: string;
    admincreatedAtRegister: Admin;

    isGetBy_idAtRegisterLoading: boolean;
    isGetBy_idAtRegisterSuccess: boolean;
    getBy_idAtRegisterError: string;
    adminGetBy_idAtRegister: Admin;
}
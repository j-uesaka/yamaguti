/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ReportMaster } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReportMasterUpdateFormInputValues = {
    type1?: string;
    type2?: string;
    template_report_title?: string;
    template_text?: string;
    submission_department_id?: string;
    status?: string;
    created_user_id?: string;
    updated_user_id?: string;
};
export declare type ReportMasterUpdateFormValidationValues = {
    type1?: ValidationFunction<string>;
    type2?: ValidationFunction<string>;
    template_report_title?: ValidationFunction<string>;
    template_text?: ValidationFunction<string>;
    submission_department_id?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    created_user_id?: ValidationFunction<string>;
    updated_user_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReportMasterUpdateFormOverridesProps = {
    ReportMasterUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type1?: PrimitiveOverrideProps<TextFieldProps>;
    type2?: PrimitiveOverrideProps<TextFieldProps>;
    template_report_title?: PrimitiveOverrideProps<TextFieldProps>;
    template_text?: PrimitiveOverrideProps<TextFieldProps>;
    submission_department_id?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    created_user_id?: PrimitiveOverrideProps<TextFieldProps>;
    updated_user_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReportMasterUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReportMasterUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reportMaster?: ReportMaster;
    onSubmit?: (fields: ReportMasterUpdateFormInputValues) => ReportMasterUpdateFormInputValues;
    onSuccess?: (fields: ReportMasterUpdateFormInputValues) => void;
    onError?: (fields: ReportMasterUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReportMasterUpdateFormInputValues) => ReportMasterUpdateFormInputValues;
    onValidate?: ReportMasterUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReportMasterUpdateForm(props: ReportMasterUpdateFormProps): React.ReactElement;

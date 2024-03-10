/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ReportMasterCreateFormInputValues = {
    type1?: string;
    type2?: string;
    template_report_title?: string;
    template_text?: string;
    submission_department_id?: string;
    status?: string;
    created_user_id?: string;
    updated_user_id?: string;
};
export declare type ReportMasterCreateFormValidationValues = {
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
export declare type ReportMasterCreateFormOverridesProps = {
    ReportMasterCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type1?: PrimitiveOverrideProps<TextFieldProps>;
    type2?: PrimitiveOverrideProps<TextFieldProps>;
    template_report_title?: PrimitiveOverrideProps<TextFieldProps>;
    template_text?: PrimitiveOverrideProps<TextFieldProps>;
    submission_department_id?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    created_user_id?: PrimitiveOverrideProps<TextFieldProps>;
    updated_user_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReportMasterCreateFormProps = React.PropsWithChildren<{
    overrides?: ReportMasterCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReportMasterCreateFormInputValues) => ReportMasterCreateFormInputValues;
    onSuccess?: (fields: ReportMasterCreateFormInputValues) => void;
    onError?: (fields: ReportMasterCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReportMasterCreateFormInputValues) => ReportMasterCreateFormInputValues;
    onValidate?: ReportMasterCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReportMasterCreateForm(props: ReportMasterCreateFormProps): React.ReactElement;

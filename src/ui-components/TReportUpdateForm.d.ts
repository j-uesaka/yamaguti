/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TReport } from "../API.ts";
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
export declare type TReportUpdateFormInputValues = {
    date?: string;
    report_title?: string;
    text?: string;
    submission_approver_id?: string[];
    submission_department_id?: string;
    presenter_id?: string;
    tReport_status?: string;
    attachment?: string[];
    hidden_flag?: number;
    created_user_id?: string;
    createdAt?: string;
    updated_user_id?: string;
    updatedAt?: string;
};
export declare type TReportUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
    report_title?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    submission_approver_id?: ValidationFunction<string>;
    submission_department_id?: ValidationFunction<string>;
    presenter_id?: ValidationFunction<string>;
    tReport_status?: ValidationFunction<string>;
    attachment?: ValidationFunction<string>;
    hidden_flag?: ValidationFunction<number>;
    created_user_id?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updated_user_id?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TReportUpdateFormOverridesProps = {
    TReportUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    report_title?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    submission_approver_id?: PrimitiveOverrideProps<TextFieldProps>;
    submission_department_id?: PrimitiveOverrideProps<TextFieldProps>;
    presenter_id?: PrimitiveOverrideProps<TextFieldProps>;
    tReport_status?: PrimitiveOverrideProps<TextFieldProps>;
    attachment?: PrimitiveOverrideProps<TextFieldProps>;
    hidden_flag?: PrimitiveOverrideProps<TextFieldProps>;
    created_user_id?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updated_user_id?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TReportUpdateFormProps = React.PropsWithChildren<{
    overrides?: TReportUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tReport?: TReport;
    onSubmit?: (fields: TReportUpdateFormInputValues) => TReportUpdateFormInputValues;
    onSuccess?: (fields: TReportUpdateFormInputValues) => void;
    onError?: (fields: TReportUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TReportUpdateFormInputValues) => TReportUpdateFormInputValues;
    onValidate?: TReportUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TReportUpdateForm(props: TReportUpdateFormProps): React.ReactElement;

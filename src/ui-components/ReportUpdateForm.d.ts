/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Report } from "../API.ts";
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
export declare type ReportUpdateFormInputValues = {
    date?: string;
    type1?: string;
    type2?: string;
    report_title?: string;
    text?: string;
    submission_approver_id?: string[];
    submission_department_id?: string;
    required_flag?: string;
    presenter_id?: string;
    status?: string;
    attachment?: string[];
    created_user_id?: string;
    updated_user_id?: string;
};
export declare type ReportUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
    type1?: ValidationFunction<string>;
    type2?: ValidationFunction<string>;
    report_title?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    submission_approver_id?: ValidationFunction<string>;
    submission_department_id?: ValidationFunction<string>;
    required_flag?: ValidationFunction<string>;
    presenter_id?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    attachment?: ValidationFunction<string>;
    created_user_id?: ValidationFunction<string>;
    updated_user_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReportUpdateFormOverridesProps = {
    ReportUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    type1?: PrimitiveOverrideProps<TextFieldProps>;
    type2?: PrimitiveOverrideProps<TextFieldProps>;
    report_title?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    submission_approver_id?: PrimitiveOverrideProps<TextFieldProps>;
    submission_department_id?: PrimitiveOverrideProps<TextFieldProps>;
    required_flag?: PrimitiveOverrideProps<TextFieldProps>;
    presenter_id?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    attachment?: PrimitiveOverrideProps<TextFieldProps>;
    created_user_id?: PrimitiveOverrideProps<TextFieldProps>;
    updated_user_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReportUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReportUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    report?: Report;
    onSubmit?: (fields: ReportUpdateFormInputValues) => ReportUpdateFormInputValues;
    onSuccess?: (fields: ReportUpdateFormInputValues) => void;
    onError?: (fields: ReportUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReportUpdateFormInputValues) => ReportUpdateFormInputValues;
    onValidate?: ReportUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReportUpdateForm(props: ReportUpdateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { MailResultDetail } from "../API.ts";
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
export declare type MailResultDetailUpdateFormInputValues = {
    from?: string;
    company?: string;
    to?: string;
    head?: string;
    body?: string;
    name?: string;
    result?: string;
    groupId?: string;
};
export declare type MailResultDetailUpdateFormValidationValues = {
    from?: ValidationFunction<string>;
    company?: ValidationFunction<string>;
    to?: ValidationFunction<string>;
    head?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    result?: ValidationFunction<string>;
    groupId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MailResultDetailUpdateFormOverridesProps = {
    MailResultDetailUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    from?: PrimitiveOverrideProps<TextFieldProps>;
    company?: PrimitiveOverrideProps<TextFieldProps>;
    to?: PrimitiveOverrideProps<TextFieldProps>;
    head?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    result?: PrimitiveOverrideProps<TextFieldProps>;
    groupId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MailResultDetailUpdateFormProps = React.PropsWithChildren<{
    overrides?: MailResultDetailUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mailResultDetail?: MailResultDetail;
    onSubmit?: (fields: MailResultDetailUpdateFormInputValues) => MailResultDetailUpdateFormInputValues;
    onSuccess?: (fields: MailResultDetailUpdateFormInputValues) => void;
    onError?: (fields: MailResultDetailUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MailResultDetailUpdateFormInputValues) => MailResultDetailUpdateFormInputValues;
    onValidate?: MailResultDetailUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MailResultDetailUpdateForm(props: MailResultDetailUpdateFormProps): React.ReactElement;

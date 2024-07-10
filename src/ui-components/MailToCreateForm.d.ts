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
export declare type MailToCreateFormInputValues = {
    company?: string;
    address?: string;
    name?: string;
};
export declare type MailToCreateFormValidationValues = {
    company?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MailToCreateFormOverridesProps = {
    MailToCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    company?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MailToCreateFormProps = React.PropsWithChildren<{
    overrides?: MailToCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MailToCreateFormInputValues) => MailToCreateFormInputValues;
    onSuccess?: (fields: MailToCreateFormInputValues) => void;
    onError?: (fields: MailToCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MailToCreateFormInputValues) => MailToCreateFormInputValues;
    onValidate?: MailToCreateFormValidationValues;
} & React.CSSProperties>;
export default function MailToCreateForm(props: MailToCreateFormProps): React.ReactElement;

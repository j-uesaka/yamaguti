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
export declare type MailCreateFormInputValues = {
    company?: string;
    address?: string;
    name?: string;
};
export declare type MailCreateFormValidationValues = {
    company?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MailCreateFormOverridesProps = {
    MailCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    company?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MailCreateFormProps = React.PropsWithChildren<{
    overrides?: MailCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MailCreateFormInputValues) => MailCreateFormInputValues;
    onSuccess?: (fields: MailCreateFormInputValues) => void;
    onError?: (fields: MailCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MailCreateFormInputValues) => MailCreateFormInputValues;
    onValidate?: MailCreateFormValidationValues;
} & React.CSSProperties>;
export default function MailCreateForm(props: MailCreateFormProps): React.ReactElement;

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
export declare type MailFromCreateFormInputValues = {
    address?: string;
    name?: string;
};
export declare type MailFromCreateFormValidationValues = {
    address?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MailFromCreateFormOverridesProps = {
    MailFromCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MailFromCreateFormProps = React.PropsWithChildren<{
    overrides?: MailFromCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MailFromCreateFormInputValues) => MailFromCreateFormInputValues;
    onSuccess?: (fields: MailFromCreateFormInputValues) => void;
    onError?: (fields: MailFromCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MailFromCreateFormInputValues) => MailFromCreateFormInputValues;
    onValidate?: MailFromCreateFormValidationValues;
} & React.CSSProperties>;
export default function MailFromCreateForm(props: MailFromCreateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Mail } from "../API.ts";
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
export declare type MailUpdateFormInputValues = {
    company?: string;
    address?: string;
    name?: string;
};
export declare type MailUpdateFormValidationValues = {
    company?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MailUpdateFormOverridesProps = {
    MailUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    company?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MailUpdateFormProps = React.PropsWithChildren<{
    overrides?: MailUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mail?: Mail;
    onSubmit?: (fields: MailUpdateFormInputValues) => MailUpdateFormInputValues;
    onSuccess?: (fields: MailUpdateFormInputValues) => void;
    onError?: (fields: MailUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MailUpdateFormInputValues) => MailUpdateFormInputValues;
    onValidate?: MailUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MailUpdateForm(props: MailUpdateFormProps): React.ReactElement;

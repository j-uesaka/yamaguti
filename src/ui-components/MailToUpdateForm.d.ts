/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { MailTo } from "../API.ts";
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
export declare type MailToUpdateFormInputValues = {
    company?: string;
    address?: string;
    name?: string;
};
export declare type MailToUpdateFormValidationValues = {
    company?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MailToUpdateFormOverridesProps = {
    MailToUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    company?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MailToUpdateFormProps = React.PropsWithChildren<{
    overrides?: MailToUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mailTo?: MailTo;
    onSubmit?: (fields: MailToUpdateFormInputValues) => MailToUpdateFormInputValues;
    onSuccess?: (fields: MailToUpdateFormInputValues) => void;
    onError?: (fields: MailToUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MailToUpdateFormInputValues) => MailToUpdateFormInputValues;
    onValidate?: MailToUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MailToUpdateForm(props: MailToUpdateFormProps): React.ReactElement;

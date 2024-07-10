/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { MailFrom } from "../API.ts";
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
export declare type MailFromUpdateFormInputValues = {
    address?: string;
    name?: string;
};
export declare type MailFromUpdateFormValidationValues = {
    address?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MailFromUpdateFormOverridesProps = {
    MailFromUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MailFromUpdateFormProps = React.PropsWithChildren<{
    overrides?: MailFromUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mailFrom?: MailFrom;
    onSubmit?: (fields: MailFromUpdateFormInputValues) => MailFromUpdateFormInputValues;
    onSuccess?: (fields: MailFromUpdateFormInputValues) => void;
    onError?: (fields: MailFromUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MailFromUpdateFormInputValues) => MailFromUpdateFormInputValues;
    onValidate?: MailFromUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MailFromUpdateForm(props: MailFromUpdateFormProps): React.ReactElement;

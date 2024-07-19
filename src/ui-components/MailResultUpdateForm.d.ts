/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { MailResult } from "../API.ts";
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
export declare type MailResultUpdateFormInputValues = {
    from?: string;
    company?: string;
    to?: string;
    head?: string;
    body?: string;
    result?: string;
    groupId?: string;
};
export declare type MailResultUpdateFormValidationValues = {
    from?: ValidationFunction<string>;
    company?: ValidationFunction<string>;
    to?: ValidationFunction<string>;
    head?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
    result?: ValidationFunction<string>;
    groupId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MailResultUpdateFormOverridesProps = {
    MailResultUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    from?: PrimitiveOverrideProps<TextFieldProps>;
    company?: PrimitiveOverrideProps<TextFieldProps>;
    to?: PrimitiveOverrideProps<TextFieldProps>;
    head?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    result?: PrimitiveOverrideProps<TextFieldProps>;
    groupId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MailResultUpdateFormProps = React.PropsWithChildren<{
    overrides?: MailResultUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mailResult?: MailResult;
    onSubmit?: (fields: MailResultUpdateFormInputValues) => MailResultUpdateFormInputValues;
    onSuccess?: (fields: MailResultUpdateFormInputValues) => void;
    onError?: (fields: MailResultUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MailResultUpdateFormInputValues) => MailResultUpdateFormInputValues;
    onValidate?: MailResultUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MailResultUpdateForm(props: MailResultUpdateFormProps): React.ReactElement;

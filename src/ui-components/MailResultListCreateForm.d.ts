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
export declare type MailResultListCreateFormInputValues = {
    companyNames?: string[];
    from?: string;
    subject?: string;
    result?: string;
};
export declare type MailResultListCreateFormValidationValues = {
    companyNames?: ValidationFunction<string>;
    from?: ValidationFunction<string>;
    subject?: ValidationFunction<string>;
    result?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MailResultListCreateFormOverridesProps = {
    MailResultListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    companyNames?: PrimitiveOverrideProps<TextFieldProps>;
    from?: PrimitiveOverrideProps<TextFieldProps>;
    subject?: PrimitiveOverrideProps<TextFieldProps>;
    result?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MailResultListCreateFormProps = React.PropsWithChildren<{
    overrides?: MailResultListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MailResultListCreateFormInputValues) => MailResultListCreateFormInputValues;
    onSuccess?: (fields: MailResultListCreateFormInputValues) => void;
    onError?: (fields: MailResultListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MailResultListCreateFormInputValues) => MailResultListCreateFormInputValues;
    onValidate?: MailResultListCreateFormValidationValues;
} & React.CSSProperties>;
export default function MailResultListCreateForm(props: MailResultListCreateFormProps): React.ReactElement;

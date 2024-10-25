/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { MailResultList } from "../API.ts";
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
export declare type MailResultListUpdateFormInputValues = {
    companyNames?: string[];
    from?: string;
    subject?: string;
    result?: string;
};
export declare type MailResultListUpdateFormValidationValues = {
    companyNames?: ValidationFunction<string>;
    from?: ValidationFunction<string>;
    subject?: ValidationFunction<string>;
    result?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MailResultListUpdateFormOverridesProps = {
    MailResultListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    companyNames?: PrimitiveOverrideProps<TextFieldProps>;
    from?: PrimitiveOverrideProps<TextFieldProps>;
    subject?: PrimitiveOverrideProps<TextFieldProps>;
    result?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MailResultListUpdateFormProps = React.PropsWithChildren<{
    overrides?: MailResultListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mailResultList?: MailResultList;
    onSubmit?: (fields: MailResultListUpdateFormInputValues) => MailResultListUpdateFormInputValues;
    onSuccess?: (fields: MailResultListUpdateFormInputValues) => void;
    onError?: (fields: MailResultListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MailResultListUpdateFormInputValues) => MailResultListUpdateFormInputValues;
    onValidate?: MailResultListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MailResultListUpdateForm(props: MailResultListUpdateFormProps): React.ReactElement;

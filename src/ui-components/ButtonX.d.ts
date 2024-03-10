/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { SyntheticEvent } from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ButtonXOverridesProps = {
    ButtonX?: PrimitiveOverrideProps<ViewProps>;
    "\u3059\u3054\u3044\u30DC\u30BF\u30F3"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ButtonXProps = React.PropsWithChildren<Partial<ViewProps> & {
    pro?: (event: SyntheticEvent) => void;
} & {
    プロパティ1?: "ver2" | "\u30C7\u30D5\u30A9\u30EB\u30C8";
} & {
    overrides?: ButtonXOverridesProps | undefined | null;
}>;
export default function ButtonX(props: ButtonXProps): React.ReactElement;

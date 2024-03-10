/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type MyReportOverridesProps = {
    MyReport?: PrimitiveOverrideProps<ViewProps>;
    "\u25C6\u81EA\u5206\u306E\u30EC\u30DD\u30FC\u30C8"?: PrimitiveOverrideProps<TextProps>;
    "\u30D8\u30C3\u30C0\u30FC"?: PrimitiveOverrideProps<ViewProps>;
    "\u30BF\u30A4\u30C8\u30EB"?: PrimitiveOverrideProps<TextProps>;
    "\u30B9\u30C6\u30FC\u30BF\u30B9"?: PrimitiveOverrideProps<TextProps>;
    "\u5B9F\u65BD\u65E5"?: PrimitiveOverrideProps<TextProps>;
    "\u6A2A\u7DDA (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    "\u67A0\u7DDA (Stroke)"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type MyReportProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MyReportOverridesProps | undefined | null;
}>;
export default function MyReport(props: MyReportProps): React.ReactElement;

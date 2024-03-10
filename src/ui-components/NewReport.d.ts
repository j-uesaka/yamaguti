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
export declare type NewReportOverridesProps = {
    NewReport?: PrimitiveOverrideProps<ViewProps>;
    "\u25C6\u6700\u65B0\u627F\u8A8D\u30EC\u30DD\u30FC\u30C8"?: PrimitiveOverrideProps<TextProps>;
    "\u30D8\u30C3\u30C0\u30FC"?: PrimitiveOverrideProps<ViewProps>;
    "\u63D0\u51FA\u8005"?: PrimitiveOverrideProps<TextProps>;
    "\u30BF\u30A4\u30C8\u30EB"?: PrimitiveOverrideProps<TextProps>;
    "\u5B9F\u65BD\u65E5"?: PrimitiveOverrideProps<TextProps>;
    "\u6A2A\u7DDA (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    "\u67A0\u7DDA (Stroke)"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NewReportProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NewReportOverridesProps | undefined | null;
}>;
export default function NewReport(props: NewReportProps): React.ReactElement;

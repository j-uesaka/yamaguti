/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Report } from "../API.ts";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type MyReportRowOverridesProps = {
    MyReportRow?: PrimitiveOverrideProps<ViewProps>;
    "\u884C"?: PrimitiveOverrideProps<FlexProps>;
    "\u30BF\u30A4\u30C8\u30EB"?: PrimitiveOverrideProps<TextProps>;
    "\u30B9\u30C6\u30FC\u30BF\u30B9"?: PrimitiveOverrideProps<TextProps>;
    "\u5B9F\u65BD\u65E5"?: PrimitiveOverrideProps<TextProps>;
    "\u6A2A\u7DDA (Stroke)"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type MyReportRowProps = React.PropsWithChildren<Partial<ViewProps> & {
    report?: Report;
} & {
    overrides?: MyReportRowOverridesProps | undefined | null;
}>;
export default function MyReportRow(props: MyReportRowProps): React.ReactElement;

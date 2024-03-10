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
export declare type MyReportFrameOverridesProps = {
    MyReportFrame?: PrimitiveOverrideProps<ViewProps>;
    MyReportLabel?: PrimitiveOverrideProps<TextProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    Status?: PrimitiveOverrideProps<TextProps>;
    "HeaderLine (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    "OutLine (Stroke)"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type MyReportFrameProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MyReportFrameOverridesProps | undefined | null;
}>;
export default function MyReportFrame(props: MyReportFrameProps): React.ReactElement;

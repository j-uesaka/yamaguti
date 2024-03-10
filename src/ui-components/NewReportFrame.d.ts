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
export declare type NewReportFrameOverridesProps = {
    NewReportFrame?: PrimitiveOverrideProps<ViewProps>;
    NewReportLabel?: PrimitiveOverrideProps<TextProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    Presenter?: PrimitiveOverrideProps<TextProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "HeaderLine (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    "OutLine (Stroke)"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NewReportFrameProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NewReportFrameOverridesProps | undefined | null;
}>;
export default function NewReportFrame(props: NewReportFrameProps): React.ReactElement;

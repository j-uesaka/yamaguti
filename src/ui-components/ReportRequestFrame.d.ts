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
export declare type ReportRequestFrameOverridesProps = {
    ReportRequestFrame?: PrimitiveOverrideProps<ViewProps>;
    ReportRequestLabel?: PrimitiveOverrideProps<TextProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    Presenter?: PrimitiveOverrideProps<TextProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "HeaderLine (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    "OutLine (Stroke)"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ReportRequestFrameProps = React.PropsWithChildren<Partial<ViewProps> & {
    ue?: React.ReactNode;
} & {
    overrides?: ReportRequestFrameOverridesProps | undefined | null;
}>;
export default function ReportRequestFrame(props: ReportRequestFrameProps): React.ReactElement;

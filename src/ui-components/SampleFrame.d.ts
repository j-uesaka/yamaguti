/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Report } from "../API.ts";
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
export declare type SampleFrameOverridesProps = {
    SampleFrame?: PrimitiveOverrideProps<ViewProps>;
    ReportRequestLabel?: PrimitiveOverrideProps<TextProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    Presenter13735?: PrimitiveOverrideProps<TextProps>;
    Date13736?: PrimitiveOverrideProps<TextProps>;
    Title13737?: PrimitiveOverrideProps<TextProps>;
    "HeaderLine (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    "OutLine (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    SampleRowCP?: PrimitiveOverrideProps<ViewProps>;
    Presenter13747?: PrimitiveOverrideProps<TextProps>;
    Title13748?: PrimitiveOverrideProps<TextProps>;
    Date13749?: PrimitiveOverrideProps<TextProps>;
    "RowLine (Stroke)"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SampleFrameProps = React.PropsWithChildren<Partial<ViewProps> & {
    sampleRowCP?: React.ReactNode;
    report?: Report;
} & {
    overrides?: SampleFrameOverridesProps | undefined | null;
}>;
export default function SampleFrame(props: SampleFrameProps): React.ReactElement;

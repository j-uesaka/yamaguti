/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type MainMenuCPOverridesProps = {
    MainMenuCP?: PrimitiveOverrideProps<ViewProps>;
    DashBoard?: PrimitiveOverrideProps<FlexProps>;
    DashBoardText?: PrimitiveOverrideProps<TextProps>;
    NewReportFrame?: PrimitiveOverrideProps<ViewProps>;
    NewReportLabel?: PrimitiveOverrideProps<TextProps>;
    Header92462?: PrimitiveOverrideProps<ViewProps>;
    Presenter92463?: PrimitiveOverrideProps<TextProps>;
    Date92464?: PrimitiveOverrideProps<TextProps>;
    Title92465?: PrimitiveOverrideProps<TextProps>;
    "HeaderLine (Stroke)96488"?: PrimitiveOverrideProps<IconProps>;
    "OutLine (Stroke)92467"?: PrimitiveOverrideProps<IconProps>;
    MyReportFrame?: PrimitiveOverrideProps<ViewProps>;
    MyReportLabel?: PrimitiveOverrideProps<TextProps>;
    Header92470?: PrimitiveOverrideProps<ViewProps>;
    Title92471?: PrimitiveOverrideProps<TextProps>;
    Status?: PrimitiveOverrideProps<TextProps>;
    Date92473?: PrimitiveOverrideProps<TextProps>;
    "HeaderLine (Stroke)96489"?: PrimitiveOverrideProps<IconProps>;
    "OutLine (Stroke)92475"?: PrimitiveOverrideProps<IconProps>;
    ReportRequestFrame?: PrimitiveOverrideProps<ViewProps>;
    ReportRequestLabel?: PrimitiveOverrideProps<TextProps>;
    Header92478?: PrimitiveOverrideProps<ViewProps>;
    Presenter92479?: PrimitiveOverrideProps<TextProps>;
    Title92480?: PrimitiveOverrideProps<TextProps>;
    Date92481?: PrimitiveOverrideProps<TextProps>;
    "HeaderLine (Stroke)96490"?: PrimitiveOverrideProps<IconProps>;
    "OutLine (Stroke)92483"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type MainMenuCPProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MainMenuCPOverridesProps | undefined | null;
}>;
export default function MainMenuCP(props: MainMenuCPProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
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
export declare type SampleRowCPOverridesProps = {
    SampleRowCP?: PrimitiveOverrideProps<ViewProps>;
    Presenter?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    "RowLine (Stroke)"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SampleRowCPProps = React.PropsWithChildren<Partial<ViewProps> & {
    presenter?: String;
    title?: String;
    date?: String;
    reportId?: String;
    status?: String;
    event?: (event: SyntheticEvent) => void;
} & {
    overrides?: SampleRowCPOverridesProps | undefined | null;
}>;
export default function SampleRowCP(props: SampleRowCPProps): React.ReactElement;

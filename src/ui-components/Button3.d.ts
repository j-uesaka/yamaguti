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
export declare type Button3OverridesProps = {
    Button3?: PrimitiveOverrideProps<ViewProps>;
    "\u72B6\u614B3"?: PrimitiveOverrideProps<ViewProps>;
    "\u3053\u308C\u306F\u72B6\u614B3\u3067\u3059"?: PrimitiveOverrideProps<TextProps>;
    "\u72B6\u614B2"?: PrimitiveOverrideProps<ViewProps>;
    "\u3053\u308C\u306F\u72B6\u614B2\u3067\u3059"?: PrimitiveOverrideProps<TextProps>;
    "\u72B6\u614B1"?: PrimitiveOverrideProps<ViewProps>;
    "\u3053\u308C\u306F\u72B6\u614B1\u3067\u3059"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Button3Props = React.PropsWithChildren<Partial<ViewProps> & {
    pr?: (event: SyntheticEvent) => void;
} & {
    overrides?: Button3OverridesProps | undefined | null;
}>;
export default function Button3(props: Button3Props): React.ReactElement;

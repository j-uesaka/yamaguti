/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { useState } from "react";
import { Text, View } from "@aws-amplify/ui-react";
export default function Button2(props) {
  const { status, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "\u30C6\u30AD\u30B9\u30C8": {}, Button2: {} },
      variantValues: { val: "AAA" },
    },
    {
      overrides: {
        "\u30C6\u30AD\u30B9\u30C8": {
          top: "21px",
          left: "29px",
          children: "\u30C6\u30AD\u30B9\u30C8B",
        },
        Button2: { backgroundColor: "rgba(255,207,151,0.4)" },
      },
      variantValues: { val: "BBB" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const [Property, setProperty] = useState(undefined);
  const buttonTwoOnMouseOver = () => {
    setProperty(status);
  };
  return (
    <View
      width="304px"
      height="109px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(151,249,255,0.4)"
      onMouseOver={() => {
        buttonTwoOnMouseOver();
      }}
      {...getOverrideProps(overrides, "Button2")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="246px"
        height="60px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="23px"
        left="31px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="テキストA"
        property={Property}
        {...getOverrideProps(overrides, "\u30C6\u30AD\u30B9\u30C8")}
      ></Text>
    </View>
  );
}

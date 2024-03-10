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
export default function ButtonX(props) {
  const { pro, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "\u3059\u3054\u3044\u30DC\u30BF\u30F3": {}, ButtonX: {} },
      variantValues: {
        "\u30D7\u30ED\u30D1\u30C6\u30A31": "\u30C7\u30D5\u30A9\u30EB\u30C8",
      },
    },
    {
      overrides: {
        "\u3059\u3054\u3044\u30DC\u30BF\u30F3": {
          children: "\u8D85\u51C4\u3044\uFF01",
        },
        ButtonX: {
          backgroundImage:
            "linear-gradient(-90deg, rgba(169,208,142,1), rgba(220,30,30,0))",
        },
      },
      variantValues: { "\u30D7\u30ED\u30D1\u30C6\u30A31": "ver2" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const [Property, setProperty] = useState(undefined);
  const buttonXOnClick = () => {
    setProperty("Ver2");
  };
  return (
    <View
      width="310px"
      height="91px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(220,30,30,1)"
      onClick={() => {
        buttonXOnClick();
      }}
      {...getOverrideProps(overrides, "ButtonX")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="15px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.15340805053711px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="240px"
        height="60px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="15px"
        left="40px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="すごいボタン&#xA;"
        property={Property}
        {...getOverrideProps(overrides, "\u3059\u3054\u3044\u30DC\u30BF\u30F3")}
      ></Text>
    </View>
  );
}

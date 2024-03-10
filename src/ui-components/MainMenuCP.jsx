/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function MainMenuCP(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1024px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MainMenuCP")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "DashBoard")}
      >
        <Text
          fontFamily="Inter"
          fontSize="30px"
          fontWeight="400"
          color="rgba(169,208,142,1)"
          lineHeight="36.30681610107422px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="ダッシュボード"
          {...getOverrideProps(overrides, "DashBoardText")}
        ></Text>
      </Flex>
      <View
        width="645px"
        height="402px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="56px"
        left="10px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NewReportFrame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="400"
          color="rgba(84,130,53,1)"
          lineHeight="21.784090042114258px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="230px"
          height="22px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="33px"
          left="27px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="◆最新承認レポート"
          {...getOverrideProps(overrides, "NewReportLabel")}
        ></Text>
        <View
          width="555px"
          height="22px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="81px"
          left="27px"
          border="0px SOLID rgba(169,208,142,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Header92462")}
        >
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="700"
            color="rgba(169,208,142,1)"
            lineHeight="18.15340805053711px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="144px"
            height="22px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="提出者"
            {...getOverrideProps(overrides, "Presenter92463")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="700"
            color="rgba(169,208,142,1)"
            lineHeight="18.15340805053711px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="101px"
            height="22px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="454px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="実施日"
            {...getOverrideProps(overrides, "Date92464")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="700"
            color="rgba(169,208,142,1)"
            lineHeight="18.15340805053711px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="310px"
            height="22px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="144px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="タイトル"
            {...getOverrideProps(overrides, "Title92465")}
          ></Text>
        </View>
        <Icon
          width="555px"
          height="1px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 555.0000000015436,
            height: 1.0000008567490113,
          }}
          paths={[
            {
              d: "M555 1L0 1L0 0L555 0L555 1Z",
              fill: "rgba(169,208,142,1)",
              fillRule: "evenodd",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="102px"
          left="27px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          {...getOverrideProps(overrides, "HeaderLine (Stroke)96488")}
        ></Icon>
        <Icon
          width="647px"
          height="404px"
          viewBox={{ minX: 0, minY: 0, width: 647, height: 404 }}
          paths={[
            {
              d: "M0 0L10.773 0L10.773 2L2 2L2 11.4416L0 11.4416L0 0ZM15.6593 0L25.4321 0L25.4321 2L15.6593 2L15.6593 0ZM30.3184 0L40.0911 0L40.0911 2L30.3184 2L30.3184 0ZM44.9775 0L64.5229 0L64.5229 2L44.9775 2L44.9775 0ZM69.4093 0L79.182 0L79.182 2L69.4093 2L69.4093 0ZM84.0684 0L93.841 0L93.841 2L84.0684 2L84.0684 0ZM98.7274 0L118.273 0L118.273 2L98.7274 2L98.7274 0ZM123.159 0L132.932 0L132.932 2L123.159 2L123.159 0ZM137.818 0L147.591 0L147.591 2L137.818 2L137.818 0ZM152.477 0L172.023 0L172.023 2L152.477 2L152.477 0ZM176.909 0L186.682 0L186.682 2L176.909 2L176.909 0ZM191.568 0L201.341 0L201.341 2L191.568 2L191.568 0ZM206.227 0L225.773 0L225.773 2L206.227 2L206.227 0ZM230.659 0L240.432 0L240.432 2L230.659 2L230.659 0ZM245.318 0L255.091 0L255.091 2L245.318 2L245.318 0ZM259.977 0L279.523 0L279.523 2L259.977 2L259.977 0ZM284.409 0L294.182 0L294.182 2L284.409 2L284.409 0ZM299.068 0L308.841 0L308.841 2L299.068 2L299.068 0ZM313.727 0L333.273 0L333.273 2L313.727 2L313.727 0ZM338.159 0L347.932 0L347.932 2L338.159 2L338.159 0ZM352.818 0L362.591 0L362.591 2L352.818 2L352.818 0ZM367.477 0L387.023 0L387.023 2L367.477 2L367.477 0ZM391.909 0L401.682 0L401.682 2L391.909 2L391.909 0ZM406.568 0L416.341 0L416.341 2L406.568 2L406.568 0ZM421.227 0L440.773 0L440.773 2L421.227 2L421.227 0ZM445.659 0L455.432 0L455.432 2L445.659 2L445.659 0ZM460.318 0L470.091 0L470.091 2L460.318 2L460.318 0ZM474.977 0L494.523 0L494.523 2L474.977 2L474.977 0ZM499.409 0L509.182 0L509.182 2L499.409 2L499.409 0ZM514.068 0L523.841 0L523.841 2L514.068 2L514.068 0ZM528.727 0L548.273 0L548.273 2L528.727 2L528.727 0ZM553.159 0L562.932 0L562.932 2L553.159 2L553.159 0ZM567.818 0L577.591 0L577.591 2L567.818 2L567.818 0ZM582.477 0L602.023 0L602.023 2L582.477 2L582.477 0ZM606.909 0L616.682 0L616.682 2L606.909 2L606.909 0ZM621.568 0L631.341 0L631.341 2L621.568 2L621.568 0ZM636.227 0L647 0L647 11.4415L645 11.4415L645 2L636.227 2L636.227 0ZM647 16.6623L647 27.1039L645 27.1039L645 16.6623L647 16.6623ZM0 27.1039L0 16.6623L2 16.6623L2 27.1039L0 27.1039ZM0 42.7662L0 32.3247L2 32.3247L2 42.7662L0 42.7662ZM647 32.3247L647 42.7662L645 42.7662L645 32.3247L647 32.3247ZM647 47.987L647 68.8701L645 68.8701L645 47.987L647 47.987ZM0 68.8701L0 47.987L2 47.987L2 68.8701L0 68.8701ZM0 84.5325L0 74.0909L2 74.0909L2 84.5325L0 84.5325ZM647 74.0909L647 84.5325L645 84.5325L645 74.0909L647 74.0909ZM0 100.195L0 89.7533L2 89.7533L2 100.195L0 100.195ZM647 89.7533L647 100.195L645 100.195L645 89.7533L647 89.7533ZM0 126.299L0 105.416L2 105.416L2 126.299L0 126.299ZM647 105.416L647 126.299L645 126.299L645 105.416L647 105.416ZM0 141.961L0 131.519L2 131.519L2 141.961L0 141.961ZM647 131.519L647 141.961L645 141.961L645 131.519L647 131.519ZM647 147.182L647 157.623L645 157.623L645 147.182L647 147.182ZM0 157.623L0 147.182L2 147.182L2 157.623L0 157.623ZM647 162.844L647 183.727L645 183.727L645 162.844L647 162.844ZM0 183.727L0 162.844L2 162.844L2 183.727L0 183.727ZM647 188.948L647 199.39L645 199.39L645 188.948L647 188.948ZM0 199.39L0 188.948L2 188.948L2 199.39L0 199.39ZM647 204.61L647 215.052L645 215.052L645 204.61L647 204.61ZM0 215.052L0 204.61L2 204.61L2 215.052L0 215.052ZM647 220.273L647 241.156L645 241.156L645 220.273L647 220.273ZM0 241.156L0 220.273L2 220.273L2 241.156L0 241.156ZM647 246.377L647 256.818L645 256.818L645 246.377L647 246.377ZM0 256.818L0 246.377L2 246.377L2 256.818L0 256.818ZM0 272.481L0 262.039L2 262.039L2 272.481L0 272.481ZM647 262.039L647 272.48L645 272.48L645 262.039L647 262.039ZM0 298.584L0 277.701L2 277.701L2 298.584L0 298.584ZM647 277.701L647 298.584L645 298.584L645 277.701L647 277.701ZM0 314.247L0 303.805L2 303.805L2 314.247L0 314.247ZM647 303.805L647 314.247L645 314.247L645 303.805L647 303.805ZM0 329.909L0 319.468L2 319.468L2 329.909L0 329.909ZM647 319.468L647 329.909L645 329.909L645 319.468L647 319.468ZM0 356.013L0 335.13L2 335.13L2 356.013L0 356.013ZM647 335.13L647 356.013L645 356.013L645 335.13L647 335.13ZM0 371.675L0 361.234L2 361.234L2 371.675L0 371.675ZM647 361.234L647 371.675L645 371.675L645 361.234L647 361.234ZM0 387.338L0 376.896L2 376.896L2 387.338L0 387.338ZM647 376.896L647 387.338L645 387.338L645 376.896L647 376.896ZM647 392.558L647 404L636.227 404L636.227 402L645 402L645 392.558L647 392.558ZM0 392.558L2 392.558L2 402L10.7727 402L10.7727 404L0 404L0 392.558ZM25.4318 404L15.6591 404L15.6591 402L25.4318 402L25.4318 404ZM40.0909 404L30.3182 404L30.3182 402L40.0909 402L40.0909 404ZM64.5227 404L44.9773 404L44.9773 402L64.5227 402L64.5227 404ZM79.1818 404L69.4091 404L69.4091 402L79.1818 402L79.1818 404ZM93.8409 404L84.0682 404L84.0682 402L93.8409 402L93.8409 404ZM118.273 404L98.7273 404L98.7273 402L118.273 402L118.273 404ZM132.932 404L123.159 404L123.159 402L132.932 402L132.932 404ZM147.591 404L137.818 404L137.818 402L147.591 402L147.591 404ZM172.023 404L152.477 404L152.477 402L172.023 402L172.023 404ZM186.682 404L176.909 404L176.909 402L186.682 402L186.682 404ZM201.341 404L191.568 404L191.568 402L201.341 402L201.341 404ZM225.773 404L206.227 404L206.227 402L225.773 402L225.773 404ZM240.432 404L230.659 404L230.659 402L240.432 402L240.432 404ZM255.091 404L245.318 404L245.318 402L255.091 402L255.091 404ZM279.523 404L259.977 404L259.977 402L279.523 402L279.523 404ZM294.182 404L284.409 404L284.409 402L294.182 402L294.182 404ZM308.841 404L299.068 404L299.068 402L308.841 402L308.841 404ZM333.273 404L313.727 404L313.727 402L333.273 402L333.273 404ZM347.932 404L338.159 404L338.159 402L347.932 402L347.932 404ZM362.591 404L352.818 404L352.818 402L362.591 402L362.591 404ZM387.023 404L367.477 404L367.477 402L387.023 402L387.023 404ZM401.682 404L391.909 404L391.909 402L401.682 402L401.682 404ZM416.341 404L406.568 404L406.568 402L416.341 402L416.341 404ZM440.773 404L421.227 404L421.227 402L440.773 402L440.773 404ZM455.432 404L445.659 404L445.659 402L455.432 402L455.432 404ZM470.091 404L460.318 404L460.318 402L470.091 402L470.091 404ZM494.523 404L474.977 404L474.977 402L494.523 402L494.523 404ZM509.182 404L499.409 404L499.409 402L509.182 402L509.182 404ZM523.841 404L514.068 404L514.068 402L523.841 402L523.841 404ZM548.273 404L528.727 404L528.727 402L548.273 402L548.273 404ZM562.932 404L553.159 404L553.159 402L562.932 402L562.932 404ZM577.591 404L567.818 404L567.818 402L577.591 402L577.591 404ZM602.023 404L582.477 404L582.477 402L602.023 402L602.023 404ZM616.682 404L606.909 404L606.909 402L616.682 402L616.682 404ZM631.341 404L621.568 404L621.568 402L631.341 402L631.341 404Z",
              fill: "rgba(169,208,142,1)",
              fillRule: "evenodd",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="-1px"
          left="-1px"
          {...getOverrideProps(overrides, "OutLine (Stroke)92467")}
        ></Icon>
      </View>
      <View
        width="645px"
        height="402px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="56px"
        left="691px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MyReportFrame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="400"
          color="rgba(84,130,53,1)"
          lineHeight="21.784090042114258px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="230px"
          height="22px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="33px"
          left="27px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="◆自分のレポート"
          {...getOverrideProps(overrides, "MyReportLabel")}
        ></Text>
        <View
          width="555px"
          height="22px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="81px"
          left="27px"
          border="0px SOLID rgba(169,208,142,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Header92470")}
        >
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="700"
            color="rgba(169,208,142,1)"
            lineHeight="18.15340805053711px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="368px"
            height="22px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="タイトル"
            {...getOverrideProps(overrides, "Title92471")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="700"
            color="rgba(169,208,142,1)"
            lineHeight="18.15340805053711px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="86px"
            height="22px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="368px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="ステータス"
            {...getOverrideProps(overrides, "Status")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="700"
            color="rgba(169,208,142,1)"
            lineHeight="18.15340805053711px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="101px"
            height="22px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="454px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="実施日"
            {...getOverrideProps(overrides, "Date92473")}
          ></Text>
        </View>
        <Icon
          width="555px"
          height="1px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 555.0000000015436,
            height: 1.0000008567490113,
          }}
          paths={[
            {
              d: "M555 1L0 1L0 0L555 0L555 1Z",
              fill: "rgba(169,208,142,1)",
              fillRule: "evenodd",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="102px"
          left="27px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          {...getOverrideProps(overrides, "HeaderLine (Stroke)96489")}
        ></Icon>
        <Icon
          width="647px"
          height="404px"
          viewBox={{ minX: 0, minY: 0, width: 647, height: 404 }}
          paths={[
            {
              d: "M0 0L10.773 0L10.773 2L2 2L2 11.4416L0 11.4416L0 0ZM15.6593 0L25.4321 0L25.4321 2L15.6593 2L15.6593 0ZM30.3184 0L40.0911 0L40.0911 2L30.3184 2L30.3184 0ZM44.9775 0L64.5229 0L64.5229 2L44.9775 2L44.9775 0ZM69.4093 0L79.182 0L79.182 2L69.4093 2L69.4093 0ZM84.0684 0L93.841 0L93.841 2L84.0684 2L84.0684 0ZM98.7274 0L118.273 0L118.273 2L98.7274 2L98.7274 0ZM123.159 0L132.932 0L132.932 2L123.159 2L123.159 0ZM137.818 0L147.591 0L147.591 2L137.818 2L137.818 0ZM152.477 0L172.023 0L172.023 2L152.477 2L152.477 0ZM176.909 0L186.682 0L186.682 2L176.909 2L176.909 0ZM191.568 0L201.341 0L201.341 2L191.568 2L191.568 0ZM206.227 0L225.773 0L225.773 2L206.227 2L206.227 0ZM230.659 0L240.432 0L240.432 2L230.659 2L230.659 0ZM245.318 0L255.091 0L255.091 2L245.318 2L245.318 0ZM259.977 0L279.523 0L279.523 2L259.977 2L259.977 0ZM284.409 0L294.182 0L294.182 2L284.409 2L284.409 0ZM299.068 0L308.841 0L308.841 2L299.068 2L299.068 0ZM313.727 0L333.273 0L333.273 2L313.727 2L313.727 0ZM338.159 0L347.932 0L347.932 2L338.159 2L338.159 0ZM352.818 0L362.591 0L362.591 2L352.818 2L352.818 0ZM367.477 0L387.023 0L387.023 2L367.477 2L367.477 0ZM391.909 0L401.682 0L401.682 2L391.909 2L391.909 0ZM406.568 0L416.341 0L416.341 2L406.568 2L406.568 0ZM421.227 0L440.773 0L440.773 2L421.227 2L421.227 0ZM445.659 0L455.432 0L455.432 2L445.659 2L445.659 0ZM460.318 0L470.091 0L470.091 2L460.318 2L460.318 0ZM474.977 0L494.523 0L494.523 2L474.977 2L474.977 0ZM499.409 0L509.182 0L509.182 2L499.409 2L499.409 0ZM514.068 0L523.841 0L523.841 2L514.068 2L514.068 0ZM528.727 0L548.273 0L548.273 2L528.727 2L528.727 0ZM553.159 0L562.932 0L562.932 2L553.159 2L553.159 0ZM567.818 0L577.591 0L577.591 2L567.818 2L567.818 0ZM582.477 0L602.023 0L602.023 2L582.477 2L582.477 0ZM606.909 0L616.682 0L616.682 2L606.909 2L606.909 0ZM621.568 0L631.341 0L631.341 2L621.568 2L621.568 0ZM636.227 0L647 0L647 11.4415L645 11.4415L645 2L636.227 2L636.227 0ZM647 16.6623L647 27.1039L645 27.1039L645 16.6623L647 16.6623ZM0 27.1039L0 16.6623L2 16.6623L2 27.1039L0 27.1039ZM0 42.7662L0 32.3247L2 32.3247L2 42.7662L0 42.7662ZM647 32.3247L647 42.7662L645 42.7662L645 32.3247L647 32.3247ZM647 47.987L647 68.8701L645 68.8701L645 47.987L647 47.987ZM0 68.8701L0 47.987L2 47.987L2 68.8701L0 68.8701ZM0 84.5325L0 74.0909L2 74.0909L2 84.5325L0 84.5325ZM647 74.0909L647 84.5325L645 84.5325L645 74.0909L647 74.0909ZM0 100.195L0 89.7533L2 89.7533L2 100.195L0 100.195ZM647 89.7533L647 100.195L645 100.195L645 89.7533L647 89.7533ZM0 126.299L0 105.416L2 105.416L2 126.299L0 126.299ZM647 105.416L647 126.299L645 126.299L645 105.416L647 105.416ZM0 141.961L0 131.519L2 131.519L2 141.961L0 141.961ZM647 131.519L647 141.961L645 141.961L645 131.519L647 131.519ZM647 147.182L647 157.623L645 157.623L645 147.182L647 147.182ZM0 157.623L0 147.182L2 147.182L2 157.623L0 157.623ZM647 162.844L647 183.727L645 183.727L645 162.844L647 162.844ZM0 183.727L0 162.844L2 162.844L2 183.727L0 183.727ZM647 188.948L647 199.39L645 199.39L645 188.948L647 188.948ZM0 199.39L0 188.948L2 188.948L2 199.39L0 199.39ZM647 204.61L647 215.052L645 215.052L645 204.61L647 204.61ZM0 215.052L0 204.61L2 204.61L2 215.052L0 215.052ZM647 220.273L647 241.156L645 241.156L645 220.273L647 220.273ZM0 241.156L0 220.273L2 220.273L2 241.156L0 241.156ZM647 246.377L647 256.818L645 256.818L645 246.377L647 246.377ZM0 256.818L0 246.377L2 246.377L2 256.818L0 256.818ZM0 272.481L0 262.039L2 262.039L2 272.481L0 272.481ZM647 262.039L647 272.48L645 272.48L645 262.039L647 262.039ZM0 298.584L0 277.701L2 277.701L2 298.584L0 298.584ZM647 277.701L647 298.584L645 298.584L645 277.701L647 277.701ZM0 314.247L0 303.805L2 303.805L2 314.247L0 314.247ZM647 303.805L647 314.247L645 314.247L645 303.805L647 303.805ZM0 329.909L0 319.468L2 319.468L2 329.909L0 329.909ZM647 319.468L647 329.909L645 329.909L645 319.468L647 319.468ZM0 356.013L0 335.13L2 335.13L2 356.013L0 356.013ZM647 335.13L647 356.013L645 356.013L645 335.13L647 335.13ZM0 371.675L0 361.234L2 361.234L2 371.675L0 371.675ZM647 361.234L647 371.675L645 371.675L645 361.234L647 361.234ZM0 387.338L0 376.896L2 376.896L2 387.338L0 387.338ZM647 376.896L647 387.338L645 387.338L645 376.896L647 376.896ZM647 392.558L647 404L636.227 404L636.227 402L645 402L645 392.558L647 392.558ZM0 392.558L2 392.558L2 402L10.7727 402L10.7727 404L0 404L0 392.558ZM25.4318 404L15.6591 404L15.6591 402L25.4318 402L25.4318 404ZM40.0909 404L30.3182 404L30.3182 402L40.0909 402L40.0909 404ZM64.5227 404L44.9773 404L44.9773 402L64.5227 402L64.5227 404ZM79.1818 404L69.4091 404L69.4091 402L79.1818 402L79.1818 404ZM93.8409 404L84.0682 404L84.0682 402L93.8409 402L93.8409 404ZM118.273 404L98.7273 404L98.7273 402L118.273 402L118.273 404ZM132.932 404L123.159 404L123.159 402L132.932 402L132.932 404ZM147.591 404L137.818 404L137.818 402L147.591 402L147.591 404ZM172.023 404L152.477 404L152.477 402L172.023 402L172.023 404ZM186.682 404L176.909 404L176.909 402L186.682 402L186.682 404ZM201.341 404L191.568 404L191.568 402L201.341 402L201.341 404ZM225.773 404L206.227 404L206.227 402L225.773 402L225.773 404ZM240.432 404L230.659 404L230.659 402L240.432 402L240.432 404ZM255.091 404L245.318 404L245.318 402L255.091 402L255.091 404ZM279.523 404L259.977 404L259.977 402L279.523 402L279.523 404ZM294.182 404L284.409 404L284.409 402L294.182 402L294.182 404ZM308.841 404L299.068 404L299.068 402L308.841 402L308.841 404ZM333.273 404L313.727 404L313.727 402L333.273 402L333.273 404ZM347.932 404L338.159 404L338.159 402L347.932 402L347.932 404ZM362.591 404L352.818 404L352.818 402L362.591 402L362.591 404ZM387.023 404L367.477 404L367.477 402L387.023 402L387.023 404ZM401.682 404L391.909 404L391.909 402L401.682 402L401.682 404ZM416.341 404L406.568 404L406.568 402L416.341 402L416.341 404ZM440.773 404L421.227 404L421.227 402L440.773 402L440.773 404ZM455.432 404L445.659 404L445.659 402L455.432 402L455.432 404ZM470.091 404L460.318 404L460.318 402L470.091 402L470.091 404ZM494.523 404L474.977 404L474.977 402L494.523 402L494.523 404ZM509.182 404L499.409 404L499.409 402L509.182 402L509.182 404ZM523.841 404L514.068 404L514.068 402L523.841 402L523.841 404ZM548.273 404L528.727 404L528.727 402L548.273 402L548.273 404ZM562.932 404L553.159 404L553.159 402L562.932 402L562.932 404ZM577.591 404L567.818 404L567.818 402L577.591 402L577.591 404ZM602.023 404L582.477 404L582.477 402L602.023 402L602.023 404ZM616.682 404L606.909 404L606.909 402L616.682 402L616.682 404ZM631.341 404L621.568 404L621.568 402L631.341 402L631.341 404Z",
              fill: "rgba(169,208,142,1)",
              fillRule: "evenodd",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="-1px"
          left="-1px"
          {...getOverrideProps(overrides, "OutLine (Stroke)92475")}
        ></Icon>
      </View>
      <View
        width="645px"
        height="402px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="484px"
        left="10px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ReportRequestFrame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="400"
          color="rgba(84,130,53,1)"
          lineHeight="21.784090042114258px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="230px"
          height="22px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="33px"
          left="27px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="◆承認依頼"
          {...getOverrideProps(overrides, "ReportRequestLabel")}
        ></Text>
        <View
          width="555px"
          height="22px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="81px"
          left="27px"
          border="0px SOLID rgba(169,208,142,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Header92478")}
        >
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="700"
            color="rgba(169,208,142,1)"
            lineHeight="18.15340805053711px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="144px"
            height="22px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="提出者"
            {...getOverrideProps(overrides, "Presenter92479")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="700"
            color="rgba(169,208,142,1)"
            lineHeight="18.15340805053711px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="310px"
            height="22px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="144px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="タイトル"
            {...getOverrideProps(overrides, "Title92480")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="700"
            color="rgba(169,208,142,1)"
            lineHeight="18.15340805053711px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="101px"
            height="22px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="454px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="実施日"
            {...getOverrideProps(overrides, "Date92481")}
          ></Text>
        </View>
        <Icon
          width="555px"
          height="1px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 555.0000000015436,
            height: 1.0000008567490113,
          }}
          paths={[
            {
              d: "M555 1L0 1L0 0L555 0L555 1Z",
              fill: "rgba(169,208,142,1)",
              fillRule: "evenodd",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="102px"
          left="27px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          {...getOverrideProps(overrides, "HeaderLine (Stroke)96490")}
        ></Icon>
        <Icon
          width="647px"
          height="404px"
          viewBox={{ minX: 0, minY: 0, width: 647, height: 404 }}
          paths={[
            {
              d: "M0 0L10.773 0L10.773 2L2 2L2 11.4416L0 11.4416L0 0ZM15.6593 0L25.4321 0L25.4321 2L15.6593 2L15.6593 0ZM30.3184 0L40.0911 0L40.0911 2L30.3184 2L30.3184 0ZM44.9775 0L64.5229 0L64.5229 2L44.9775 2L44.9775 0ZM69.4093 0L79.182 0L79.182 2L69.4093 2L69.4093 0ZM84.0684 0L93.841 0L93.841 2L84.0684 2L84.0684 0ZM98.7274 0L118.273 0L118.273 2L98.7274 2L98.7274 0ZM123.159 0L132.932 0L132.932 2L123.159 2L123.159 0ZM137.818 0L147.591 0L147.591 2L137.818 2L137.818 0ZM152.477 0L172.023 0L172.023 2L152.477 2L152.477 0ZM176.909 0L186.682 0L186.682 2L176.909 2L176.909 0ZM191.568 0L201.341 0L201.341 2L191.568 2L191.568 0ZM206.227 0L225.773 0L225.773 2L206.227 2L206.227 0ZM230.659 0L240.432 0L240.432 2L230.659 2L230.659 0ZM245.318 0L255.091 0L255.091 2L245.318 2L245.318 0ZM259.977 0L279.523 0L279.523 2L259.977 2L259.977 0ZM284.409 0L294.182 0L294.182 2L284.409 2L284.409 0ZM299.068 0L308.841 0L308.841 2L299.068 2L299.068 0ZM313.727 0L333.273 0L333.273 2L313.727 2L313.727 0ZM338.159 0L347.932 0L347.932 2L338.159 2L338.159 0ZM352.818 0L362.591 0L362.591 2L352.818 2L352.818 0ZM367.477 0L387.023 0L387.023 2L367.477 2L367.477 0ZM391.909 0L401.682 0L401.682 2L391.909 2L391.909 0ZM406.568 0L416.341 0L416.341 2L406.568 2L406.568 0ZM421.227 0L440.773 0L440.773 2L421.227 2L421.227 0ZM445.659 0L455.432 0L455.432 2L445.659 2L445.659 0ZM460.318 0L470.091 0L470.091 2L460.318 2L460.318 0ZM474.977 0L494.523 0L494.523 2L474.977 2L474.977 0ZM499.409 0L509.182 0L509.182 2L499.409 2L499.409 0ZM514.068 0L523.841 0L523.841 2L514.068 2L514.068 0ZM528.727 0L548.273 0L548.273 2L528.727 2L528.727 0ZM553.159 0L562.932 0L562.932 2L553.159 2L553.159 0ZM567.818 0L577.591 0L577.591 2L567.818 2L567.818 0ZM582.477 0L602.023 0L602.023 2L582.477 2L582.477 0ZM606.909 0L616.682 0L616.682 2L606.909 2L606.909 0ZM621.568 0L631.341 0L631.341 2L621.568 2L621.568 0ZM636.227 0L647 0L647 11.4415L645 11.4415L645 2L636.227 2L636.227 0ZM647 16.6623L647 27.1039L645 27.1039L645 16.6623L647 16.6623ZM0 27.1039L0 16.6623L2 16.6623L2 27.1039L0 27.1039ZM0 42.7662L0 32.3247L2 32.3247L2 42.7662L0 42.7662ZM647 32.3247L647 42.7662L645 42.7662L645 32.3247L647 32.3247ZM647 47.987L647 68.8701L645 68.8701L645 47.987L647 47.987ZM0 68.8701L0 47.987L2 47.987L2 68.8701L0 68.8701ZM0 84.5325L0 74.0909L2 74.0909L2 84.5325L0 84.5325ZM647 74.0909L647 84.5325L645 84.5325L645 74.0909L647 74.0909ZM0 100.195L0 89.7533L2 89.7533L2 100.195L0 100.195ZM647 89.7533L647 100.195L645 100.195L645 89.7533L647 89.7533ZM0 126.299L0 105.416L2 105.416L2 126.299L0 126.299ZM647 105.416L647 126.299L645 126.299L645 105.416L647 105.416ZM0 141.961L0 131.519L2 131.519L2 141.961L0 141.961ZM647 131.519L647 141.961L645 141.961L645 131.519L647 131.519ZM647 147.182L647 157.623L645 157.623L645 147.182L647 147.182ZM0 157.623L0 147.182L2 147.182L2 157.623L0 157.623ZM647 162.844L647 183.727L645 183.727L645 162.844L647 162.844ZM0 183.727L0 162.844L2 162.844L2 183.727L0 183.727ZM647 188.948L647 199.39L645 199.39L645 188.948L647 188.948ZM0 199.39L0 188.948L2 188.948L2 199.39L0 199.39ZM647 204.61L647 215.052L645 215.052L645 204.61L647 204.61ZM0 215.052L0 204.61L2 204.61L2 215.052L0 215.052ZM647 220.273L647 241.156L645 241.156L645 220.273L647 220.273ZM0 241.156L0 220.273L2 220.273L2 241.156L0 241.156ZM647 246.377L647 256.818L645 256.818L645 246.377L647 246.377ZM0 256.818L0 246.377L2 246.377L2 256.818L0 256.818ZM0 272.481L0 262.039L2 262.039L2 272.481L0 272.481ZM647 262.039L647 272.48L645 272.48L645 262.039L647 262.039ZM0 298.584L0 277.701L2 277.701L2 298.584L0 298.584ZM647 277.701L647 298.584L645 298.584L645 277.701L647 277.701ZM0 314.247L0 303.805L2 303.805L2 314.247L0 314.247ZM647 303.805L647 314.247L645 314.247L645 303.805L647 303.805ZM0 329.909L0 319.468L2 319.468L2 329.909L0 329.909ZM647 319.468L647 329.909L645 329.909L645 319.468L647 319.468ZM0 356.013L0 335.13L2 335.13L2 356.013L0 356.013ZM647 335.13L647 356.013L645 356.013L645 335.13L647 335.13ZM0 371.675L0 361.234L2 361.234L2 371.675L0 371.675ZM647 361.234L647 371.675L645 371.675L645 361.234L647 361.234ZM0 387.338L0 376.896L2 376.896L2 387.338L0 387.338ZM647 376.896L647 387.338L645 387.338L645 376.896L647 376.896ZM647 392.558L647 404L636.227 404L636.227 402L645 402L645 392.558L647 392.558ZM0 392.558L2 392.558L2 402L10.7727 402L10.7727 404L0 404L0 392.558ZM25.4318 404L15.6591 404L15.6591 402L25.4318 402L25.4318 404ZM40.0909 404L30.3182 404L30.3182 402L40.0909 402L40.0909 404ZM64.5227 404L44.9773 404L44.9773 402L64.5227 402L64.5227 404ZM79.1818 404L69.4091 404L69.4091 402L79.1818 402L79.1818 404ZM93.8409 404L84.0682 404L84.0682 402L93.8409 402L93.8409 404ZM118.273 404L98.7273 404L98.7273 402L118.273 402L118.273 404ZM132.932 404L123.159 404L123.159 402L132.932 402L132.932 404ZM147.591 404L137.818 404L137.818 402L147.591 402L147.591 404ZM172.023 404L152.477 404L152.477 402L172.023 402L172.023 404ZM186.682 404L176.909 404L176.909 402L186.682 402L186.682 404ZM201.341 404L191.568 404L191.568 402L201.341 402L201.341 404ZM225.773 404L206.227 404L206.227 402L225.773 402L225.773 404ZM240.432 404L230.659 404L230.659 402L240.432 402L240.432 404ZM255.091 404L245.318 404L245.318 402L255.091 402L255.091 404ZM279.523 404L259.977 404L259.977 402L279.523 402L279.523 404ZM294.182 404L284.409 404L284.409 402L294.182 402L294.182 404ZM308.841 404L299.068 404L299.068 402L308.841 402L308.841 404ZM333.273 404L313.727 404L313.727 402L333.273 402L333.273 404ZM347.932 404L338.159 404L338.159 402L347.932 402L347.932 404ZM362.591 404L352.818 404L352.818 402L362.591 402L362.591 404ZM387.023 404L367.477 404L367.477 402L387.023 402L387.023 404ZM401.682 404L391.909 404L391.909 402L401.682 402L401.682 404ZM416.341 404L406.568 404L406.568 402L416.341 402L416.341 404ZM440.773 404L421.227 404L421.227 402L440.773 402L440.773 404ZM455.432 404L445.659 404L445.659 402L455.432 402L455.432 404ZM470.091 404L460.318 404L460.318 402L470.091 402L470.091 404ZM494.523 404L474.977 404L474.977 402L494.523 402L494.523 404ZM509.182 404L499.409 404L499.409 402L509.182 402L509.182 404ZM523.841 404L514.068 404L514.068 402L523.841 402L523.841 404ZM548.273 404L528.727 404L528.727 402L548.273 402L548.273 404ZM562.932 404L553.159 404L553.159 402L562.932 402L562.932 404ZM577.591 404L567.818 404L567.818 402L577.591 402L577.591 404ZM602.023 404L582.477 404L582.477 402L602.023 402L602.023 404ZM616.682 404L606.909 404L606.909 402L616.682 402L616.682 404ZM631.341 404L621.568 404L621.568 402L631.341 402L631.341 404Z",
              fill: "rgba(169,208,142,1)",
              fillRule: "evenodd",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="-1px"
          left="-1px"
          {...getOverrideProps(overrides, "OutLine (Stroke)92483")}
        ></Icon>
      </View>
    </View>
  );
}

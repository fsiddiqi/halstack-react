import footerLogo from "../footer/dxc_logo_wht.png";
import headerLogo from "../header/dxc_logo_blk_rgb.svg";
import headerLogoResponsive from "../header/dxc_logo_blk_rgb.svg";

export const colors = {
  black: "#000000",
  lightBlack: "#212121",
  mediumBlack: "#000000B3",
  white: "#FFFFFF",
  darkWhite: "#EEEEEE",
  yellow: "#FFED00",
  darkGrey: "#666666",
  mediumGrey: "#00000033",
  lightGrey: "#D9D9D9",
  darkRed: "#D0011B",
  lightRed: "#FF6161",
  lightBlue: "#CEE0F5",
  lightYellow: "#FCF2BD",
  lightPink: "#F9CFCF",
  lightGreen: "#DBF1C4",
  blue: "#005FCC",
  lighterGrey: "#F8F8F8",
  red: "#D0011B",
  purple: "#8800F6",
  darkBlue: "#006BF6",
  inherit: "inherit",
  transparent: "transparent",
};

export const defaultTheme = {
  accordion: {
    arrowColor: "#666666",
  },
  button: {
    color: "#6f2c91",
    hoverColor: "#000000",
    primaryFontColor: "#ffffff",
    primaryHoverFontColor: "#ffffff",
    secondaryFontColor: "#000000",
    secondaryHoverFontColor: "#000000",
    textFontColor: "#6f2c91",
    textHoverFontColor: "#FFFFFF",
  },
  checkbox: {
    color: "#0067b3",
    checkColor: "#ffffff",
  },
  chip: {
    backgroundColor: "#EEEEEE",
    outlinedColor: "",
    fontColor: "#000000",
  },
  date: {
    pickerSelectedDateBackgroundColor: "#6f2c91",
    pickerSelectedDateColor: "#ffffff",
  },
  dropdown: {
    backgroundColor: "#ffffff",
    fontColor: "#000000",
  },
  footer: {
    backgroundColor: "#000000",
    fontColor: "#FFFFFF",
    lineColor: "#0067b3",
    logo: footerLogo,
  },
  header: {
    backgroundColor: "#ffffff",
    underlinedColor: "#000000",
    fontColor: "#000000",
    backgroundColorMenu: "#ffffff",
    fontColorMenu: "#000000",
    hamburguerColor: "#000000",
    logo: headerLogo,
    logoResponsive: headerLogoResponsive,
  },
  inputText: {
    selectedOptionBackgroundColor: "#D9D9D9",
  },
  paginator: {
    paginatorBackgroundColor: "#EEEEEE",
    paginatorFontColor: "#000000",
  },
  progressBar: {
    trackLine: "#6f2c91",
    totalLine: "#666666",
  },
  radio: {
    color: "#000000",
  },
  select: {
    selectedOptionBackgroundColor: "#d9d9d9",
  },
  sidenav: {
    backgroundColor: "#F8F8F8",
    arrowContainerColor: "#D9D9D9",
    arrowColor: "#000000",
  },
  slider: {
    color: "#0067b3",
  },
  spinner: {
    trackCircleColor: "#6f2c91",
    totalCircleColor: "#FFFFFF",
  },
  switch: {
    checkedTrackBackgroundColor: "#6f2c91",
  },
  table: {
    headerBackgroundColor: "#6f2c91",
    headerFontColor: "#FFFFFF",
  },
  tabs: {
    selectedBackgroundColor: "#ffffff",
    selectedUnderlinedColor: "#6f2c91",
    selectedFontColor: "#000000",
  },
  wizard: {
    selectedBackgroundColor: "#6f2c91",
    selectedFont: "#ffffff",
  },
};

export const theme = {
  accordion: {
    backgroundColor: colors.white,
    fontColor: colors.darkGrey,
    hoverFontColor: colors.black,
    arrowColor: colors.darkGrey,
    hoverBackgroundColor: "57",
    disabled: 0.34,
  },
  alert: {
    overlayColor: colors.black,
    overlayOpacity: "CC",
    infoColor: colors.lightBlue,
    confirmColor: colors.lightGreen,
    warningColor: colors.lightYellow,
    errorColor: colors.lightPink,
    focusColor: colors.blue,
  },
  button: {
    color: colors.yellow,
    hoverColor: colors.black,
    disabledOpacity: 0.34,

    primaryFontColor: colors.black,
    primaryHoverFontColor: colors.yellow,
    primaryActiveOpacity: "A3",

    secondaryBackgroundColor: colors.transparent,
    secondaryFontColor: colors.black,
    secondaryHoverFontColor: colors.black,
    secondaryActiveOpacity: "29",
    secondaryHoverOpacity: "14",

    textBackgroundColor: colors.transparent,
    textFontColor: colors.black,
    textHoverFontColor: colors.lightGrey,
    textActiveOpacity: "A3",
    focusColor: colors.blue,
  },
  box: {
    backgroundColor: colors.white,
  },
  card: {
    backgroundColor: colors.white,
  },
  checkbox: {
    color: colors.yellow,
    checkColor: colors.black,
    disabled: 0.34,
    disabledCheckColor: 0.34,
    fontColor: colors.black,
    focusColor: colors.blue,
  },
  chip: {
    backgroundColor: colors.darkWhite,
    outlinedColor: "",
    fontColor: colors.black,
    disabled: 0.34,
  },
  date: {
    pickerSelectedDateBackgroundColor: colors.black,
    pickerSelectedDateColor: colors.yellow,
    pickerBackgroundColor: colors.white,
    pickerFontColor: colors.black,
    pickerActualDate: colors.lightGrey,
    pickerHoverDateBackgroundColor: "57",
    pickerHoverDateFontColor: colors.black,
    scrollBarThumbColor: colors.darkGrey,
    scrollBarTrackColor: colors.lightGrey,
    focusColor: colors.blue,
  },
  dialog: {
    overlayColor: colors.black,
    overlayOpacity: "CC",
    separator: colors.lightGrey,
    scrollBarThumbColor: colors.darkGrey,
    scrollBarTrackColor: colors.lightGrey,
    backgroundColor: colors.white,
  },
  dropdown: {
    backgroundColor: colors.white,
    fontColor: colors.black,
    dropdownBackgroundColor: colors.white,
    dropdownFontColor: colors.black,
    hoverBackgroundOption: "57",
    hoverBackgroundColor: "CC",
    disabled: 0.34,
    scrollBarThumbColor: colors.darkGrey,
    scrollBarTrackColor: colors.lightGrey,
    focusColor: colors.blue,
  },
  footer: {
    backgroundColor: colors.black,
    fontColor: colors.white,
    lineColor: colors.yellow,
    logo: "http://localhost:9000/themes/DXC/logo/footer",
  },
  header: {
    backgroundColor: colors.black,
    underlinedColor: colors.black,
    fontColor: colors.white,
    backgroundColorMenu: colors.lightGrey,
    fontColorMenu: colors.black,
    hamburguerColor: colors.white,
    hoverHamburguerColor: "28",
    overlayColor: colors.black,
    overlayOpacity: "B3",
    focusColor: colors.blue,
    logo: "http://localhost:9000/themes/DXC/logo/header",
    logoResponsive: "http://localhost:9000/themes/DXC/logo/responsiveHeader",
  },
  inputText: {
    fontColor: colors.black,
    placeholderColor: colors.lightGrey,
    disabled: 0.34,
    error: colors.red,
    selectedOptionBackgroundColor: colors.lightGrey,
    hoverOptionBakcgroundColor: "57",
    hoverOptionColor: colors.black,
    scrollBarThumbColor: colors.darkGrey,
    scrollBarTrackColor: colors.lightGrey,
  },
  link: {
    fontColor: colors.blue,
    visitedFontColor: colors.purple,
    underlinedBackgroundColor: colors.blue,
    visitedUnderlinedBackgroundColor: colors.purple,
    disabledColor: colors.lightGrey,
    disabledUnderlinedBackgroundColor: colors.lightGrey,
    hoverFontColor: colors.darkBlue,
  },
  paginator: {
    paginatorBackgroundColor: colors.darkWhite,
    paginatorFontColor: colors.black,
  },
  progressBar: {
    trackLine: colors.yellow,
    totalLine: colors.black,
    fontColor: colors.inherit,
    totalLineOpacity: "57",
    overlayColor: colors.black,
    overlayOpacity: "CC",
  },
  radio: {
    color: colors.black,
    disabled: 0.34,
    fontColor: colors.inherit,
    focusColor: colors.blue,
  },
  select: {
    selectedOptionBackgroundColor: colors.lightGrey,
    color: colors.black,
    hoverOptionBackgroundColor: "57",
    error: colors.red,
    scrollBarThumbColor: colors.darkGrey,
    scrollBarTrackColor: colors.lightGrey,
    disabled: 0.34,
    focusColor: colors.blue,
  },
  sidenav: {
    backgroundColor: colors.lighterGrey,
    arrowContainerColor: colors.lightGrey,
    arrowContainerOpacity: "CC",
    arrowColor: colors.black,
  },
  slider: {
    color: colors.black,
    totalLine: 0.34,
    disabledthumbBackgroundColor: 0.34,
    disableddotsBackgroundColor: 0.34,
    disabledTrackLine: 0.34,
    disabledtotalLine: 0.34,
    focusColor: colors.blue,
  },
  spinner: {
    trackCircleColor: colors.yellow,
    totalCircleColor: colors.white,
    fontColor: colors.inherit,
    overlayColor: colors.black,
    overlayOpacity: "CC",
  },
  switch: {
    checkedTrackBackgroundColor: colors.darkGrey,
    checkedThumbBackgroundColor: colors.white,
    uncheckedThumbBackgroundColor: colors.white,
    uncheckedTrackBackgroundColor: colors.lightGrey,
    disabled: 0.34,
    fontColor: colors.black,
    focusColor: colors.blue,
  },
  table: {
    headerBackgroundColor: colors.black,
    headerFontColor: colors.white,
    separatorColor: colors.lightGrey,
    bodyBackgroundColor: colors.white,
    bodyFontColor: colors.black,
  },
  tabs: {
    selectedBackgroundColor: colors.white,
    selectedUnderlinedColor: colors.black,
    selectedFontColor: colors.black,
    backgroundColor: "57",
    underlinedColor: colors.lightGrey,
    fontColor: colors.black,
    disabled: 0.34,
    focusColor: colors.blue,
    notSelectedOpacity: "A3",
  },
  tag: {
    backgroundColor: colors.white,
  },
  textarea: {
    fontColor: colors.black,
    placeholderColor: colors.lightGrey,
    disabled: 0.34,
    error: colors.red,
    scrollBarThumbColor: colors.darkGrey,
    scrollBarTrackColor: colors.lightGrey,
  },
  wizard: {
    selectedBackgroundColor: colors.yellow,
    selectedFont: colors.black,
    borderColor: colors.black,
    fontColor: colors.inherit,
    lineColor: colors.lightGrey,
    disabledBackground: colors.darkWhite,
    disabledFont: colors.darkGrey,
    disabled: 0.34,
    notVisitedOpacity: 0.64,
  },
};

export const spaces = {
  xxsmall: "6px",
  xsmall: "16px",
  small: "24px",
  medium: "36px",
  large: "48px",
  xlarge: "64px",
  xxlarge: "100px",
};

export const responsiveSizes = {
  mobileSmall: "320",
  mobileMedium: "375",
  mobileLarge: "425",
  tablet: "768",
  laptop: "1024",
  desktop: "1440",
};

export const typeface = {
  body: {
    fontSize: "16px",
    letterSpacing: "0.5",
    textTransform: "initial",
  },
  altBody: {
    fontSize: "14px",
    letterSpacing: "0.25",
    textTransform: "initial",
  },
  subtitle: {
    fontSize: "16px",
    letterSpacing: "0.15",
    textTransform: "initial",
  },
  altSubtitle: {
    fontSize: "14px",
    letterSpacing: "0.1",
    textTransform: "initial",
  },
  caption: {
    fontSize: "12px",
    letterSpacing: "0.4",
    textTransform: "initial",
  },
  overline: {
    fontSize: "12px",
    letterSpacing: "2",
    textTransform: "uppercase",
  },
};

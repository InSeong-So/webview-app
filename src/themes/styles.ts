import { StyleSheet } from 'react-native';

import { configs } from '@/common/Configs';
import { COLORS } from './colors';

export const Styles = {
  flexColumn: {
    flex: 1,
  },

  typography: StyleSheet.create({
    // white
    regular: {
      color: COLORS.BLACK,
      fontSize: configs.FontSize.size14,
    },
    medium: {
      color: COLORS.BLACK,
      fontSize: configs.FontSize.size14,
    },
    bold: {
      color: COLORS.BLACK,
      fontSize: configs.FontSize.size14,
    },
    mediumSmall: {
      color: COLORS.BLACK,
      fontSize: configs.FontSize.size10,
    },
  }),

  /// //////
  shadow: {
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 1,
  },
  heavyShadow: {
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 10,
  },
  textTransform: {
    textTransform: 'uppercase',
  },
};

export const HtmlStyles = {
  a: {
    ...Styles.typography.regular,
    color: COLORS.BLACK,
    fontSize: configs.FontSize.size13,
    textAlign: 'left',
  },
  b: {
    ...Styles.typography.medium,
    color: COLORS.BLACK,
    fontSize: configs.FontSize.size13,
    // textAlign: 'center'
  },
  w: {
    ...Styles.typography.regular,
    color: COLORS.WHITE,
    fontSize: configs.FontSize.size13,
    textAlign: 'center',
  },
  g: {
    ...Styles.typography.medium,
    color: COLORS.GREEN,
    fontSize: configs.FontSize.size12,
  },
  r: {
    ...Styles.typography.medium,
    color: COLORS.RED,
    fontSize: configs.FontSize.size13,
    marginTop: 5,
  },
  s: {
    ...Styles.typography.regular,
    fontSize: configs.FontSize.size12,
    padding: 15,
  },
  t: {
    ...Styles.typography.regular,
    fontSize: configs.FontSize.size12,
    textAlign: 'center',
  },
  m: {
    ...Styles.typography.medium,
    fontSize: configs.FontSize.size12,
    color: COLORS.DARK_GRAY,
  },
  p: {
    ...Styles.typography.regular,
    color: COLORS.RED,
    fontSize: configs.FontSize.size13,
  },
};

export const HtmlStylesSeen = {
  w: {
    ...Styles.typography.medium,
    color: COLORS.GRAY_2,
    fontSize: configs.FontSize.size14,
    marginTop: 5,
  },
  b: {
    ...Styles.typography.medium,
    color: COLORS.GRAY_2,
    fontSize: configs.FontSize.size14,
    marginTop: 5,
  },
  span: {
    ...Styles.typography.medium,
    color: COLORS.BLUE,
    fontSize: configs.FontSize.size14,
    marginTop: 5,
  },
  a: {
    ...Styles.typography.medium,
    color: COLORS.BLUE,
    fontSize: configs.FontSize.size14,
    marginTop: 5,
  },
  red3: {
    ...Styles.typography.medium,
    color: COLORS.RED_3,
  },

  r: {
    ...Styles.typography.medium,
    color: COLORS.RED,
    fontSize: configs.FontSize.size14,
  },
  gray7: {
    ...Styles.typography.regular,
    color: COLORS.GRAY_7,
  },
  green: {
    color: COLORS.GREEN,
    fontsize: configs.FontSize.size12,
  },
  g: {
    color: COLORS.GREEN,
    fontsize: configs.FontSize.size14,
  },
  black: {
    ...Styles.typography.medium,
    color: COLORS.GRAY_17,
    fontSize: configs.FontSize.size14,
  },

  gray13: {
    ...Styles.typography.regular,
    color: COLORS.GRAY_13,
    fontSize: configs.FontSize.size14,
  },
};

export const CommonStyle = {
  borderRadiusSingleLineInput: 25,
  borderRadiusMultiLineInput: 10,
};

export const RenderHtmlStyle = {
  p: {
    paddingTop: 0,
    paddingBottom: 0,
  },
};

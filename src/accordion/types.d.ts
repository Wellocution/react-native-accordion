import { ViewStyle, ViewProps } from 'react-native';
import type Animated from 'react-native-reanimated';

export interface IAccordionProps {
  /**
   *  active/inactive TouchableWithoutFeedback
   */
  otherProperty?: ViewProps;

  /**
   *  active/inactive TouchableWithoutFeedback
   */
  disabled?: boolean;

  /**
   *  if active then the collapsible will be expanded on mounting.:
   */
  initExpand?: boolean;

  /**
   * Handle height helps to calculate the internal container and sheet layouts,
   * if `renderContent` is provided, the library internally will calculate its layout,
   * unless `contentHeight` is provided.
   */
  contentHeight: number;

  /**
   *  unmounted content animated end
   */
  isUnmountedContent?: boolean;

  /**
   *  initialMountedContent default start,
   */
  initialMountedContent: boolean;

  /**
   *
   */
  isStatusFetching: boolean;

  TouchableComponent: React.FunctionComponent | React.ComponentClass;

  /**
   *
   */
  handleCustomTouchable?: (progress: Animated.SharedValue) => FC | null;

  /**
   *
   */
  handleIndicatorFetching?: () => FC | null;

  /**
   *
   */
  renderContent?: (progress: Animated.SharedValue) => JSX.Element | null;

  /**
   * callback change state hide/show content
   */
  onChangeState?: (value: boolean) => void;

  /**
   *
   */
  onAnimatedEndExpanded?: () => void;

  /**
   *
   */
  onAnimatedEndCollapsed?: () => void;

  /**
   *
   */
  handleContentTouchable?: (
    progress: Animated.SharedValue
  ) => JSX.Element | null;
  /**
   * component icon.
   */
  handleIcon?: () => FC | null;

  /**
   * Run custom fn on header press.
   */
  onPressSideEffect?: () => void;

  /**
   * active background arrow
   */

  activeBackgroundIcon?: string;

  /**
   * inactive background arrow
   */
  inactiveBackgroundIcon?: string;

  /**
   * color icon
   */
  colorIcon?: string;
  /**
   * size arrow icon
   */
  sizeIcon?: number;

  isArrow?: boolean;

  /**
   *
   */
  styleChevron?: ViewStyle;

  /**
   *
   */
  styleTouchable?: Animated.AnimateStyle<ViewStyle>;

  /**
   *
   */
  styleContainer?: ViewStyle;
  /**
   *
   */

  configExpanded?: Animated.WithTimingConfig;

  /**
   *
   */
  configCollapsed?: Animated.WithTimingConfig;

  needsMoreSpaceForScroll?: boolean;
}

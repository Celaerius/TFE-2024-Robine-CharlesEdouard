import { useMemo } from "react";
import { curveBasis, line } from "d3-shape";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SCREEN_WIDTH } from "../constants/Screen";
import { parse } from "react-native-redash";

const Num_Tabs = 3;
const SCALE = 0.7;
const TAB_BAR_HEIGHT = 64;

const GenerateTabShapePath = function (position, adjustedHeight) {
  const adjustedWidth = SCREEN_WIDTH / Num_Tabs;
  const tabX = adjustedWidth * SCALE;

  const lineGenerator = line().curve(curveBasis);
  const tab = lineGenerator([
    [tabX - 100 * SCALE, 0],
    [tabX - (65 + 35) * SCALE, 0],
    [tabX - (50 - 10) * SCALE, -6 * SCALE],
    [tabX - (50 - 15) * SCALE, (adjustedHeight - 14) * SCALE],
    [tabX + (50 - 15) * SCALE, (adjustedHeight - 14) * SCALE],
    [tabX + (50 - 10) * SCALE, -6 * SCALE],
    [tabX + (65 + 35) * SCALE, 0],
    [tabX + 100 * SCALE, 0],
  ]);

  return `${tab}`;
};

const usePath = function () {
  // const insets = useSafeAreaInsets();
  const tHeight = TAB_BAR_HEIGHT;
  const adjustedHeight = tHeight;

  const containerPath = useMemo(() => {
    return `M0, 0L${SCREEN_WIDTH}, 0L${SCREEN_WIDTH}, ${tHeight}L0, ${tHeight}L0, 0`;
  }, [tHeight]);

  const curvedPath = useMemo(() => {
    return Array.from({ length: Num_Tabs }, function (_, index) {
      const tabShapePath = GenerateTabShapePath(index + 0.5, adjustedHeight);
      return parse(`${tabShapePath}`);
    });
  }, [adjustedHeight]);

  return {
    containerPath: containerPath,
    curvedPath: curvedPath,
    tHeight: tHeight,
  };
};

export default usePath;

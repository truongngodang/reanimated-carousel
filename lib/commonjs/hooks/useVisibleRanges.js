Object.defineProperty(exports,"__esModule",{value:true});exports.useVisibleRanges=useVisibleRanges;var _reactNativeReanimated=require("react-native-reanimated");function useVisibleRanges(options){var _options$total=options.total,total=_options$total===void 0?0:_options$total,viewSize=options.viewSize,translation=options.translation,_options$windowSize=options.windowSize,_windowSize=_options$windowSize===void 0?0:_options$windowSize;var windowSize=total<=_windowSize?total:_windowSize;var ranges=(0,_reactNativeReanimated.useDerivedValue)(function(){var _f=function _f(){var positiveCount=Math.round(windowSize/2);var negativeCount=windowSize-positiveCount;var curIndex=Math.round(-translation.value/viewSize);curIndex=curIndex<0?curIndex%total+total:curIndex;var negativeRange=[(curIndex-negativeCount+total)%total,(curIndex-1+total)%total];var positiveRange=[(curIndex+total)%total,(curIndex+positiveCount+total)%total];if(negativeRange[0]<total&&negativeRange[0]>negativeRange[1]){negativeRange[1]=total-1;positiveRange[0]=0;}if(positiveRange[0]>positiveRange[1]){negativeRange[1]=total-1;positiveRange[0]=0;}return{negativeRange:negativeRange,positiveRange:positiveRange};};_f._closure={windowSize:windowSize,translation:translation,viewSize:viewSize,total:total};_f.asString="function _f(){const{windowSize,translation,viewSize,total}=jsThis._closure;{const positiveCount=Math.round(windowSize/2);const negativeCount=windowSize-positiveCount;let curIndex=Math.round(-translation.value/viewSize);curIndex=curIndex<0?curIndex%total+total:curIndex;const negativeRange=[(curIndex-negativeCount+total)%total,(curIndex-1+total)%total];const positiveRange=[(curIndex+total)%total,(curIndex+positiveCount+total)%total];if(negativeRange[0]<total&&negativeRange[0]>negativeRange[1]){negativeRange[1]=total-1;positiveRange[0]=0;}if(positiveRange[0]>positiveRange[1]){negativeRange[1]=total-1;positiveRange[0]=0;}return{negativeRange:negativeRange,positiveRange:positiveRange};}}";_f.__workletHash=15212293827170;_f.__location="/Users/zhaodonghao/code/github/react-native-reanimated-carousel/src/hooks/useVisibleRanges.tsx (24:35)";return _f;}(),[total,windowSize,translation]);return ranges;}
//# sourceMappingURL=useVisibleRanges.js.map
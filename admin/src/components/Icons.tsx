import React, {ReactNode} from "react";
import Icon from '@ant-design/icons';

interface IconProps {
  width?: string;
  height?: string;
  className?: string;
  fill?: string;
  focusable?: string;
  style?: Object;
}

interface SvgProps {
  width?: string;
  height?: string;
  className?: string;
  fill?: string;
  focusable?: string;
  style?: Object;
  viewBox?: string;
  children: ReactNode
}

/**
 *  初始化图标的svg
 *
 */
const InitIcon = (props: SvgProps) => {
  let {width, height, className, fill, style, viewBox}= props;
  viewBox = viewBox ? viewBox : "0 0 1024 1024";
  width = width ? width : '1em';
  height = height ? height : '1em';
  fill = fill ? fill : 'currentColor';
  className = className ? className : '';
  console.log(className)
  const svg = () => (
    <svg
      width={width}
      height={height}
      fill={fill}
      aria-hidden="true"
      focusable="false"
      style={style}
      className={className}
      viewBox={viewBox}
    >
      {props.children}
    </svg>
  );
  return <Icon component={svg} />
}

export const DashboardIcon = (props: IconProps) => {
  const svg =  (
    <InitIcon {...props}>
      <path d="M204.8 204.8h273.066667v341.333333H204.8V204.8z m341.333333 273.066667h273.066667v341.333333h-273.066667V477.866667z m0-273.066667h273.066667v204.8h-273.066667V204.8zM204.8 614.4h273.066667v204.8H204.8v-204.8z">
      </path>
    </InitIcon>
  );
  return svg;
}

export const RobotIcon = (props: IconProps) =>{
  const svg = (
    <InitIcon {...props}>
      <path d="M682.666667 716.8v68.266667h68.266666a34.133333 34.133333 0 0 1 0 68.266666H273.066667a34.133333 34.133333 0 0 1 0-68.266666h68.266666v-68.266667h341.333334zM631.466667 102.4a51.2 51.2 0 0 1 17.066666 99.464533V238.933333a136.533333 136.533333 0 0 1 136.533334 136.533334v34.133333h34.133333a34.133333 34.133333 0 0 1 34.133333 34.133333v136.533334a34.133333 34.133333 0 0 1-34.133333 34.133333h-34.133333v68.266667a34.133333 34.133333 0 0 1-34.133334 34.133333H273.066667a34.133333 34.133333 0 0 1-34.133334-34.133333v-68.266667H204.8a34.133333 34.133333 0 0 1-34.133333-34.133333v-136.533334a34.133333 34.133333 0 0 1 34.133333-34.133333h34.133333v-34.133333a136.533333 136.533333 0 0 1 136.533334-136.533334V201.898667a51.2 51.2 0 1 1 34.133333 0v37.000533h204.8V201.898667c-18.397867-6.485333-31.982933-23.210667-33.8944-43.349334L580.266667 153.6A51.2 51.2 0 0 1 631.466667 102.4z m0 375.466667a51.2 51.2 0 1 0 0 102.4 51.2 51.2 0 0 0 0-102.4z m-238.933334 0a51.2 51.2 0 1 0 0 102.4 51.2 51.2 0 0 0 0-102.4z">
      </path>
    </InitIcon>
  );
  return svg
}

export const CommentIcon = (props: IconProps) => {
  const svg = (
    <InitIcon {...props}>
      <path d="M716.8 750.933333v102.4l-136.533333-102.4H238.933333a68.266667 68.266667 0 0 1-68.266666-68.266666V273.066667a68.266667 68.266667 0 0 1 68.266666-68.266667h546.133334a68.266667 68.266667 0 0 1 68.266666 68.266667v409.6a68.266667 68.266667 0 0 1-68.266666 68.266666h-68.266667zM307.2 307.2v68.266667h409.6V307.2H307.2z m0 136.533333v68.266667h238.933333v-68.266667H307.2z m0 136.533334v68.266666h341.333333v-68.266666H307.2z">
      </path>
    </InitIcon>
  );
  return svg;
}

export const TicketsIcon = (props: IconProps) => {
  const svg = (
    <InitIcon {...props}>
      <path d="M415.402667 204.8a102.434133 102.434133 0 0 1 193.194666 0H716.8a68.266667 68.266667 0 0 1 68.266667 68.266667v546.133333a68.266667 68.266667 0 0 1-68.266667 68.266667H307.2a68.266667 68.266667 0 0 1-68.266667-68.266667V273.066667a68.266667 68.266667 0 0 1 68.266667-68.266667h108.202667zM512 273.066667a34.133333 34.133333 0 1 0 0-68.266667 34.133333 34.133333 0 0 0 0 68.266667z m-170.666667 102.4v68.266666h341.333334v-68.266666H341.333333z m0 136.533333v68.266667h341.333334v-68.266667H341.333333z m0 136.533333v68.266667h341.333334v-68.266667H341.333333z">
      </path>
    </InitIcon>
  );
  return svg;
}

export const HistoryIcon = (props: IconProps) => {
  const svg = (
    <InitIcon {...props}>
      <path d="M511.658667 170.666667C700.416 170.666667 853.333333 323.584 853.333333 512s-152.917333 341.333333-341.674666 341.333333C323.242667 853.333333 170.666667 700.416 170.666667 512S323.242667 170.666667 511.658667 170.666667zM546.133333 486.263467V273.066667h-68.266666v264.669866l263.68 75.3664 18.773333-65.672533L546.133333 486.263467z"></path>
    </InitIcon>
  );
  return svg;
}

export const ReportIcon = (props: IconProps) => {
  const svg = (
    <InitIcon {...props}>
      <path d="M238.933333 648.533333v-273.066666h136.533334v273.066666zM443.733333 648.533333V204.8h136.533334v443.733333zM648.533333 648.533333V307.2h136.533334v341.333333zM170.666667 716.8h682.666666v102.4H170.666667z"></path>
    </InitIcon>
  );
  return svg;
}

export const EngageIcon = (props: IconProps) => {
  const svg = (
    <InitIcon>
      <path d="M587.912533 172.714667a170.666667 170.666667 0 1 1 0 337.237333A221.354667 221.354667 0 0 0 665.6 341.333333a221.354667 221.354667 0 0 0-77.687467-168.618666z m88.746667 407.552H682.666667a238.933333 238.933333 0 0 1 238.933333 238.933333h-119.466667a289.792 289.792 0 0 0-125.508266-238.933333z">
      </path>
      <path d="M443.733333 512a170.666667 170.666667 0 1 1 0-341.333333 170.666667 170.666667 0 0 1 0 341.333333z m-68.266666 68.266667h136.533333a238.933333 238.933333 0 0 1 238.933333 238.933333H136.533333a238.933333 238.933333 0 0 1 238.933334-238.933333z">
      </path>
    </InitIcon>
  );
  return svg;
}

export const Robot = (props: IconProps) => {
  const svg = (
    <InitIcon {...props}>
      <path d="M682.666667 716.8v68.266667h68.266666a34.133333 34.133333 0 0 1 0 68.266666H273.066667a34.133333 34.133333 0 0 1 0-68.266666h68.266666v-68.266667h341.333334zM631.466667 102.4a51.2 51.2 0 0 1 17.066666 99.464533V238.933333a136.533333 136.533333 0 0 1 136.533334 136.533334v34.133333h34.133333a34.133333 34.133333 0 0 1 34.133333 34.133333v136.533334a34.133333 34.133333 0 0 1-34.133333 34.133333h-34.133333v68.266667a34.133333 34.133333 0 0 1-34.133334 34.133333H273.066667a34.133333 34.133333 0 0 1-34.133334-34.133333v-68.266667H204.8a34.133333 34.133333 0 0 1-34.133333-34.133333v-136.533334a34.133333 34.133333 0 0 1 34.133333-34.133333h34.133333v-34.133333a136.533333 136.533333 0 0 1 136.533334-136.533334V201.898667a51.2 51.2 0 1 1 34.133333 0v37.000533h204.8V201.898667c-18.397867-6.485333-31.982933-23.210667-33.8944-43.349334L580.266667 153.6A51.2 51.2 0 0 1 631.466667 102.4z m0 375.466667a51.2 51.2 0 1 0 0 102.4 51.2 51.2 0 0 0 0-102.4z m-238.933334 0a51.2 51.2 0 1 0 0 102.4 51.2 51.2 0 0 0 0-102.4z">
      </path>
    </InitIcon>
  );
  return svg;
}

export const SettingIcon = (props: IconProps) => {
  const svg = (
    <InitIcon {...props}>
      <path d="M231.5604349 395.81789381l-51.84597057-64.19473753L264.60045675 224.01920197l70.84044824 38.17748708a299.33977829 299.33977829 0 0 1 93.18134809-46.19004518L444.50597393 134.93839878h134.98805214l15.83658723 81.06824509c33.8412782 9.89786702 65.2787901 25.68732201 93.18134809 46.19004518l70.84044823-38.17748708 84.98025827 107.60395431-51.94023504 64.19473753a316.73174462 316.73174462 0 0 1 22.90649225 103.22061321l73.76267612 34.21834027-30.35345933 134.94092128-80.40838683-2.45090133a311.68854527 311.68854527 0 0 1-64.57179821 82.95355263l20.40845869 79.65426269L612.76971326 889.06160122l-49.15940667-66.17431095a298.20859348 298.20859348 0 0 1-103.22061318 0L411.23028674 889.06160122l-121.36670228-60.70691866 20.36132644-79.65426269a311.68854527 311.68854527 0 0 1-64.52466596-82.95355263l-80.40838683 2.45090133L134.93839878 533.25684729l73.76267612-34.17120665a316.73174462 316.73174462 0 0 1 22.90649225-103.26774683zM512 653.39810029a141.39810029 141.39810029 0 1 0 0-282.79620058 141.39810029 141.39810029 0 0 0 0 282.79620058z"></path>
    </InitIcon>
  )
  return svg;
}

export const ServiceIcon = (props: IconProps) => {
  const svg = (
    <InitIcon {...props}>
      <path d="M732.93453212 423.6261869h132.56071902a44.18690591 44.18690591 0 0 1 44.18690589 44.18690719v132.56071901a44.18690591 44.18690591 0 0 1-44.18690589 44.18690592h-88.37381311a44.18690591 44.18690591 0 0 1-44.18690591-44.18690592v-176.7476262zM158.50474886 423.6261869h132.56071902v220.93453212H158.50474886a44.18690591 44.18690591 0 0 1-44.18690589-44.18690592v-132.56071901a44.18690591 44.18690591 0 0 1 44.18690589-44.18690719z">
      </path>
      <path d="M585.65957329 764.57235619a44.18690591 44.18690591 0 0 1 29.42847963 83.29231931A309.30834394 309.30834394 0 0 1 202.69165606 556.18690591v-88.37381182a309.30834394 309.30834394 0 1 1 618.61668788 0v88.37381182a44.18690591 44.18690591 0 0 1-88.37381182 0v-88.37381182a220.93453212 220.93453212 0 0 0-441.86906424 0v88.37381182a220.93453212 220.93453212 0 0 0 294.59410541 208.38545028z">
      </path>
      <path d="M644.56071902 556.18690591a132.56071902 132.56071902 0 0 1-265.12143804 0h265.12143804z">
      </path>
    </InitIcon>
  );
  return svg;
}

export const QuestionCircleIcon = (props: IconProps) => {
  const svg = (
    <InitIcon {...props}>
      <path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
      <path
        d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"></path>
    </InitIcon>
  );
  return svg;
}
export const BarIcon = (props: IconProps) => {
  const svg = (
    <InitIcon {...props}>
      <path
        d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"></path>
    </InitIcon>
  );
  return svg;
}

export const SearchIcon = (props: IconProps) => {
  const svg = (
    <InitIcon {...props}>
      <path
        d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
    </InitIcon>
  );
  return svg;
}

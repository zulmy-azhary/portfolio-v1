import styled from "styled-components";

const Svg = styled.svg`
  width: 90px;
  height: 100px;
`;

const Background = styled.path`
  fill: #E44D26;
`;

const RightSide = styled.path`
  fill: #F16529;
`;

const LeftText = styled.path`
  fill: #EBEBEB;
`;

const RightText = styled.path`
  fill: white;
`;

const HTML = (): JSX.Element => {
  return (
    <Svg viewBox="0 0 90 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Background d="M8.92813 90.034L0.906738 0H89.0934L81.072 89.9854L44.9272 100"/>
      <RightSide d="M44.9998 92.344V7.39014H81.0474L74.1684 84.201"/>
      <LeftText d="M17.2898 18.4009H45.0001V29.4364H29.3948L30.4157 40.7392H45.0001V51.7504H20.3039L17.2898 18.4009ZM20.79 57.2925H31.8741L32.652 66.116L45.0001 69.4218V80.9434L22.3457 74.6235"/>
      <RightText d="M72.6126 18.4009H44.9509V29.4364H71.5917L72.6126 18.4009ZM70.5951 40.7392H44.9509V51.7747H58.563L57.2747 66.116L44.9509 69.4218V80.8948L67.5567 74.6235"/>
    </Svg>
  )
}

export default HTML;
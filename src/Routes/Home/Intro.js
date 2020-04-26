import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet';

const logoFill = keyframes`
    from {
        fill: transparent;
    }
    to {
        fill: black;
    }
`;

const logoLineAim = keyframes`
    to {
        stroke-dashoffset: 2;
    }
`;

const IntroCover = styled('section')`
    position: absolute;
    top: 0;
    background-color: #fcfbfd;
    height: 100vh;
    width: 100%;
    z-index: 5;
`;

const LogoSVG = styled('svg')`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 23.854vw;
    @media screen and (max-width: 800px) {
        width: 50vw;
    }
    transform: translate(-50%, -50%);
    animation: ${logoFill} 0.8s ease forwards 2.8s;
`;

const AnimationPath = styled('path')`
    stroke-width: 4;
    &:nth-child(1) {
        stroke-dasharray: 754.9266357421875;
        stroke-dashoffset: 754.9266357421875;
        animation: ${logoLineAim} 2s ease forwards;
    }
    &:nth-child(2) {
        stroke-dasharray: 490.2921142578125;
        stroke-dashoffset: 490.2921142578125;
        animation: ${logoLineAim} 2s ease forwards 0.3s;
    }
    &:nth-child(3) {
        stroke-dasharray: 512.3509521484375;
        stroke-dashoffset: 512.3509521484375;
        animation: ${logoLineAim} 2s ease forwards 0.6s;
    }
    &:nth-child(4) {
        stroke-dasharray: 463.96795654296875;
        stroke-dashoffset: 463.96795654296875;
        animation: ${logoLineAim} 2s ease forwards 0.9s;
    }
    &:nth-child(5) {
        stroke-dasharray: 549.0670166015625;
        stroke-dashoffset: 549.0670166015625;
        animation: ${logoLineAim} 2s ease forwards 1.2s;
    }
    &:nth-child(6) {
        animation: ${logoFill} 1s ease forwards 2s;
    }
`;

export default () => (
    <IntroCover>
        <Helmet>
            <title>MAKER | Loading...</title>
        </Helmet>
        <LogoSVG height="107" viewBox="0 0 458 107" fill="none" xmlns="http://www.w3.org/2000/svg">
            <AnimationPath
                d="M104.896 3.864V103.512H91.792V29.208L58.672 103.512H49.456L16.192 29.064V103.512H3.08801V3.864H17.2L54.064 86.232L90.928 3.864H104.896Z"
                stroke="black"
            />
            <AnimationPath
                d="M186.447 81.192H142.671L134.607 103.512H120.783L157.071 3.72H172.191L208.335 103.512H194.511L186.447 81.192ZM182.703 70.536L164.559 19.848L146.415 70.536H182.703Z"
                stroke="black"
            />
            <AnimationPath
                d="M278.582 103.512L237.255 57.72V103.512H224.151V3.144H237.255V49.656L278.727 3.144H295.286L249.783 53.4L295.719 103.512H278.582Z"
                stroke="black"
            />
            <AnimationPath
                d="M323.458 13.8V47.352H360.034V58.152H323.458V92.712H364.354V103.512H310.354V3H364.354V13.8H323.458Z"
                stroke="black"
            />
            <AnimationPath
                d="M437.03 103.512L413.126 62.472H397.286V103.512H384.182V3.144H416.582C424.166 3.144 430.55 4.44 435.734 7.032C441.014 9.624 444.95 13.128 447.542 17.544C450.134 21.96 451.43 27 451.43 32.664C451.43 39.576 449.414 45.672 445.382 50.952C441.446 56.232 435.494 59.736 427.526 61.464L452.726 103.512H437.03ZM397.286 51.96H416.582C423.686 51.96 429.014 50.232 432.566 46.776C436.118 43.224 437.894 38.52 437.894 32.664C437.894 26.712 436.118 22.104 432.566 18.84C429.11 15.576 423.782 13.944 416.582 13.944H397.286V51.96Z"
                stroke="black"
            />
            <AnimationPath
                d="M104.896 4.352H107.396V1.852H104.896V4.352ZM104.896 104V106.5H107.396V104H104.896ZM91.792 104H89.292V106.5H91.792V104ZM91.792 29.696H94.292L89.5086 28.6782L91.792 29.696ZM58.672 104V106.5H60.2948L60.9554 105.018L58.672 104ZM49.456 104L47.1735 105.02L47.8348 106.5H49.456V104ZM16.192 29.552L18.4745 28.5321L13.692 29.552H16.192ZM16.192 104V106.5H18.692V104H16.192ZM3.088 104H0.588001V106.5H3.088V104ZM3.088 4.352V1.852H0.588001V4.352H3.088ZM17.2 4.352L19.4819 3.33073L18.8201 1.852H17.2V4.352ZM54.064 86.72L51.7821 87.7413L54.064 92.8399L56.3459 87.7413L54.064 86.72ZM90.928 4.352V1.852H89.3079L88.6461 3.33073L90.928 4.352ZM102.396 4.352V104H107.396V4.352H102.396ZM104.896 101.5H91.792V106.5H104.896V101.5ZM94.292 104V29.696H89.292V104H94.292ZM89.5086 28.6782L56.3886 102.982L60.9554 105.018L94.0754 30.7138L89.5086 28.6782ZM58.672 101.5H49.456V106.5H58.672V101.5ZM51.7385 102.98L18.4745 28.5321L13.9095 30.5718L47.1735 105.02L51.7385 102.98ZM13.692 29.552V104H18.692V29.552H13.692ZM16.192 101.5H3.088V106.5H16.192V101.5ZM5.588 104V4.352H0.588001V104H5.588ZM3.088 6.852H17.2V1.852H3.088V6.852ZM14.9181 5.37326L51.7821 87.7413L56.3459 85.6987L19.4819 3.33073L14.9181 5.37326ZM56.3459 87.7413L93.2099 5.37326L88.6461 3.33073L51.7821 85.6987L56.3459 87.7413ZM90.928 6.852H104.896V1.852H90.928V6.852ZM186.447 81.68L188.799 80.8305L188.202 79.18H186.447V81.68ZM142.671 81.68V79.18H140.916L140.32 80.8305L142.671 81.68ZM134.607 104V106.5H136.362L136.959 104.849L134.607 104ZM120.783 104L118.434 103.146L117.214 106.5H120.783V104ZM157.071 4.208V1.708H155.32L154.722 3.35364L157.071 4.208ZM172.191 4.208L174.542 3.35664L173.945 1.708H172.191V4.208ZM208.335 104V106.5H211.9L210.686 103.149L208.335 104ZM194.511 104L192.16 104.849L192.756 106.5H194.511V104ZM182.703 71.024V73.524H186.253L185.057 70.1815L182.703 71.024ZM164.559 20.336L166.913 19.4935L164.559 12.9179L162.206 19.4935L164.559 20.336ZM146.415 71.024L144.062 70.1815L142.865 73.524H146.415V71.024ZM186.447 79.18H142.671V84.18H186.447V79.18ZM140.32 80.8305L132.256 103.151L136.959 104.849L145.023 82.5295L140.32 80.8305ZM134.607 101.5H120.783V106.5H134.607V101.5ZM123.133 104.854L159.421 5.06236L154.722 3.35364L118.434 103.146L123.133 104.854ZM157.071 6.708H172.191V1.708H157.071V6.708ZM169.841 5.05936L205.985 104.851L210.686 103.149L174.542 3.35664L169.841 5.05936ZM208.335 101.5H194.511V106.5H208.335V101.5ZM196.863 103.151L188.799 80.8305L184.096 82.5295L192.16 104.849L196.863 103.151ZM185.057 70.1815L166.913 19.4935L162.206 21.1785L180.35 71.8665L185.057 70.1815ZM162.206 19.4935L144.062 70.1815L148.769 71.8665L166.913 21.1785L162.206 19.4935ZM146.415 73.524H182.703V68.524H146.415V73.524ZM278.583 104L276.727 105.675L277.471 106.5H278.583V104ZM237.255 58.208L239.11 56.533L234.755 51.7066V58.208H237.255ZM237.255 104V106.5H239.755V104H237.255ZM224.151 104H221.651V106.5H224.151V104ZM224.151 3.632V1.132H221.651V3.632H224.151ZM237.255 3.632H239.755V1.132H237.255V3.632ZM237.255 50.144H234.755V56.7043L239.12 51.8078L237.255 50.144ZM278.727 3.632V1.132H277.606L276.861 1.96822L278.727 3.632ZM295.287 3.632L297.14 5.30997L300.923 1.132H295.287V3.632ZM249.783 53.888L247.929 52.21L246.401 53.8984L247.94 55.5773L249.783 53.888ZM295.719 104V106.5H301.402L297.561 102.311L295.719 104ZM280.438 102.325L239.11 56.533L235.399 59.883L276.727 105.675L280.438 102.325ZM234.755 58.208V104H239.755V58.208H234.755ZM237.255 101.5H224.151V106.5H237.255V101.5ZM226.651 104V3.632H221.651V104H226.651ZM224.151 6.132H237.255V1.132H224.151V6.132ZM234.755 3.632V50.144H239.755V3.632H234.755ZM239.12 51.8078L280.592 5.29577L276.861 1.96822L235.389 48.4802L239.12 51.8078ZM278.727 6.132H295.287V1.132H278.727V6.132ZM293.433 1.95402L247.929 52.21L251.636 55.566L297.14 5.30997L293.433 1.95402ZM247.94 55.5773L293.876 105.689L297.561 102.311L251.625 52.1987L247.94 55.5773ZM295.719 101.5H278.583V106.5H295.719V101.5ZM323.458 14.288V11.788H320.958V14.288H323.458ZM323.458 47.84H320.958V50.34H323.458V47.84ZM360.034 47.84H362.534V45.34H360.034V47.84ZM360.034 58.64V61.14H362.534V58.64H360.034ZM323.458 58.64V56.14H320.958V58.64H323.458ZM323.458 93.2H320.958V95.7H323.458V93.2ZM364.354 93.2H366.854V90.7H364.354V93.2ZM364.354 104V106.5H366.854V104H364.354ZM310.354 104H307.854V106.5H310.354V104ZM310.354 3.488V0.987998H307.854V3.488H310.354ZM364.354 3.488H366.854V0.987998H364.354V3.488ZM364.354 14.288V16.788H366.854V14.288H364.354ZM320.958 14.288V47.84H325.958V14.288H320.958ZM323.458 50.34H360.034V45.34H323.458V50.34ZM357.534 47.84V58.64H362.534V47.84H357.534ZM360.034 56.14H323.458V61.14H360.034V56.14ZM320.958 58.64V93.2H325.958V58.64H320.958ZM323.458 95.7H364.354V90.7H323.458V95.7ZM361.854 93.2V104H366.854V93.2H361.854ZM364.354 101.5H310.354V106.5H364.354V101.5ZM312.854 104V3.488H307.854V104H312.854ZM310.354 5.988H364.354V0.987998H310.354V5.988ZM361.854 3.488V14.288H366.854V3.488H361.854ZM364.354 11.788H323.458V16.788H364.354V11.788ZM437.03 104L434.869 105.258L435.593 106.5H437.03V104ZM413.126 62.96L415.286 61.7017L414.563 60.46H413.126V62.96ZM397.286 62.96V60.46H394.786V62.96H397.286ZM397.286 104V106.5H399.786V104H397.286ZM384.182 104H381.682V106.5H384.182V104ZM384.182 3.632V1.132H381.682V3.632H384.182ZM435.734 7.52L434.616 9.75607L434.624 9.76015L434.632 9.76417L435.734 7.52ZM445.382 51.44L443.395 49.9227L443.386 49.9342L443.377 49.9458L445.382 51.44ZM427.526 61.952L426.996 59.5088L423.59 60.2475L425.381 63.2372L427.526 61.952ZM452.726 104V106.5H457.139L454.87 102.715L452.726 104ZM397.286 52.448H394.786V54.948H397.286V52.448ZM432.566 47.264L434.309 49.0558L434.321 49.0439L434.334 49.0318L432.566 47.264ZM432.566 19.328L430.849 21.1455L430.862 21.1573L430.874 21.1688L432.566 19.328ZM397.286 14.432V11.932H394.786V14.432H397.286ZM439.19 102.742L415.286 61.7017L410.965 64.2183L434.869 105.258L439.19 102.742ZM413.126 60.46H397.286V65.46H413.126V60.46ZM394.786 62.96V104H399.786V62.96H394.786ZM397.286 101.5H384.182V106.5H397.286V101.5ZM386.682 104V3.632H381.682V104H386.682ZM384.182 6.132H416.582V1.132H384.182V6.132ZM416.582 6.132C423.893 6.132 429.869 7.38271 434.616 9.75607L436.852 5.28393C431.231 2.47329 424.439 1.132 416.582 1.132V6.132ZM434.632 9.76417C439.54 12.1733 443.077 15.3642 445.386 19.2975L449.698 16.7665C446.822 11.8678 442.488 8.05072 436.835 5.27583L434.632 9.76417ZM445.386 19.2975C447.729 23.29 448.93 27.8844 448.93 33.152H453.93C453.93 27.0916 452.538 21.606 449.698 16.7665L445.386 19.2975ZM448.93 33.152C448.93 39.5395 447.08 45.0971 443.395 49.9227L447.369 52.9573C451.748 47.2229 453.93 40.5885 453.93 33.152H448.93ZM443.377 49.9458C439.882 54.6343 434.52 57.8771 426.996 59.5088L428.056 64.3952C436.468 62.5709 443.009 58.8057 447.386 52.9342L443.377 49.9458ZM425.381 63.2372L450.581 105.285L454.87 102.715L429.67 60.6668L425.381 63.2372ZM452.726 101.5H437.03V106.5H452.726V101.5ZM397.286 54.948H416.582V49.948H397.286V54.948ZM416.582 54.948C424.054 54.948 430.121 53.1309 434.309 49.0558L430.822 45.4722C427.907 48.3091 423.317 49.948 416.582 49.948V54.948ZM434.334 49.0318C438.432 44.9332 440.394 39.5523 440.394 33.152H435.394C435.394 38.4637 433.803 42.4908 430.798 45.4962L434.334 49.0318ZM440.394 33.152C440.394 26.6762 438.441 21.3318 434.257 17.4872L430.874 21.1688C433.794 23.8522 435.394 27.7238 435.394 33.152H440.394ZM434.282 17.5105C430.172 13.6288 424.099 11.932 416.582 11.932V16.932C423.464 16.932 428.047 18.4992 430.849 21.1455L434.282 17.5105ZM416.582 11.932H397.286V16.932H416.582V11.932ZM394.786 14.432V52.448H399.786V14.432H394.786Z"
                fill="transparent"
            />
        </LogoSVG>
    </IntroCover>
);

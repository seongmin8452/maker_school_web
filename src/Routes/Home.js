import React from 'react';
import styled from 'styled-components';

const Section = styled('section')`
    height: 90vh;
    display: flex;
    flex-direction: row;
`;

const Block = styled.div`
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const Svgimg = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const Header = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    flex-direction: column;
    padding-bottom: 10%;
`;

const H1 = styled.h1`
    font-size: 60px;
    font-weight: 600;
`;

const Description = styled.p`
    margin: 50px 0px;
    font-size: 25px;
    width: 60%;
    line-height: 1.2em;
`;

const JoinLink = styled.a.attrs((props) => ({
    href: 'https://forms.gle/uR4rX1nF4HTttaSX7',
    target: '_blank',
}))`
    font-size: 20px;
    color: #fcfbfb;
    text-decoration: none;
    padding: 15px 20px;
    background-color: black;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

export default () => (
    <Section>
        <Block>
            <Svgimg>
                <svg width="303" height="426" viewBox="0 0 303 426" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Man">
                        <g id="Head/Front">
                            <g id="Head">
                                <path
                                    id="Head_2"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M155.935 75.2443C162.411 79.1475 168.774 81.0333 171.76 80.2635C179.25 78.333 179.938 50.9351 174.143 40.1339C168.349 29.3328 138.558 24.625 137.057 46.0255C136.536 53.4529 139.654 60.0814 144.262 65.4901L136 104H160L155.935 75.2443Z"
                                    fill="#B28B67"
                                />
                            </g>
                            <path
                                id="Hair"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M142.418 70.3075C139.406 56.9065 130.825 47.7714 132.135 41.7817C133.446 35.792 139.121 34.3321 139.121 34.3321C139.121 34.3321 142.057 22.4572 158.056 24.2304C174.055 26.0036 183.819 32.6478 179.602 47.2679C175.726 47.2679 171.046 45.866 164.576 48.2679C161.496 49.411 160.17 55.358 160.17 55.358H157.246C157.246 55.358 152.989 48.3006 148.851 50.1712C144.713 52.0418 146.97 59.2586 146.97 59.2586L145.529 70.3075H142.418Z"
                                fill="#000000"
                            />
                        </g>
                        <g id="Bottom/Sitting/Skinny Jeans 1">
                            <g id="Seat">
                                <g id="Seat_2">
                                    <path
                                        id="Seat Stuff"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M92.6226 229H169.877L180 353H65L92.6226 229Z"
                                        fill="#C5CFD6"
                                    />
                                    <path
                                        id="Seat Stuff_2"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M92.6226 229H116.383L130.604 353H65L92.6226 229Z"
                                        fill="black"
                                        fill-opacity="0.1"
                                    />
                                </g>
                            </g>
                            <path
                                id="Skin"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M212.323 253.566C203.642 271.978 190.077 316.672 190.077 316.672L201.593 321.934C201.593 321.934 230.814 274.952 248.672 242.836C247.84 250.066 246.993 258.206 246.208 266.763C244.347 287.033 246.207 330.827 247.208 343.477C247.837 351.428 258.64 349.762 259.648 343.457C259.819 342.389 260.515 338.639 261.554 333.045C266.647 305.613 279.976 233.818 280 216.238C280.009 209.165 266.19 202.81 257.953 207.756C252.295 201.719 241.588 198.24 235.436 208.212C231.525 214.552 222.233 232.55 212.323 253.566Z"
                                fill="#B28B67"
                            />
                            <path
                                id="LegLower"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M190.9 300.125L230.427 206.487C239.897 191.255 266.446 209.587 263.217 218.422C255.885 238.479 218.6 303.414 216.415 309.39L190.9 300.125Z"
                                fill="#1F28CF"
                            />
                            <g id="Right Shoe">
                                <path
                                    id="shoe"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M191.664 311.185C190.971 310.241 189.63 310.017 188.734 310.771C187.099 312.146 184.748 314.264 183.899 315.734C182.547 318.076 180.733 323.021 180.733 323.021C183.45 324.59 229.578 351.222 229.578 351.222C229.578 351.222 235.116 346.027 231.304 343.157C227.491 340.286 225.012 338.315 225.012 338.315L208.152 315.087C207.821 314.631 207.179 314.538 206.733 314.882L203.23 317.579C203.23 317.579 198.409 317.159 196.035 315.788C194.589 314.953 192.824 312.767 191.664 311.185Z"
                                    fill="#C5CACD"
                                />
                            </g>
                            <g id="Right Shoe_2">
                                <path
                                    id="shoe_2"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M247.45 337.284C246.378 336.813 245.104 337.29 244.705 338.391C243.977 340.398 243 343.409 243 345.106C243 347.811 243.901 353 243.901 353C247.039 353 300.303 353 300.303 353C300.303 353 302.502 345.732 297.765 345.152C293.028 344.573 289.895 344.106 289.895 344.106L263.68 332.419C263.165 332.189 262.563 332.43 262.348 332.951L260.663 337.039C260.663 337.039 256.278 339.085 253.537 339.085C251.868 339.085 249.246 338.074 247.45 337.284Z"
                                    fill="#C5CACD"
                                />
                            </g>
                            <path
                                id="Leg and Butt"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M282.77 223.433C282.77 250 270.154 311.97 270.146 317.82L243 317.841C243 317.841 248.96 234.898 247.227 234.004C245.493 233.111 176.176 240.925 155.386 240.925C125.408 240.925 113.006 222.02 112 187H171.386C183.478 188.294 246.549 201.015 269.972 205.388C280 207.261 282.77 216.115 282.77 223.433Z"
                                fill="#2B44FF"
                            />
                        </g>
                        <g id="left_arm">
                            <path
                                id="Hand"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M180.638 124.7L215.348 105.69C221.12 98.8355 226.807 93.5122 232.409 89.7198C234.121 89.0052 237.114 88.5726 234.315 93.5415C231.515 98.5104 228.794 103.863 230.22 105.394C231.647 106.924 235.203 104.786 236.904 107.329C238.039 109.025 231.963 111.704 218.677 115.365L193.456 138.458L180.638 124.7Z"
                                fill="#997659"
                            />
                            <path
                                id="Sleeve"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M163.734 120.465C175.892 120.337 192.104 117.769 209.402 106.789L216.196 121.939C204.264 133.78 187.486 143.51 172.816 143.098C161.255 142.773 155.347 128.789 163.734 120.465Z"
                                fill="#2026A2"
                            />
                        </g>
                        <path
                            id="Clothes Jacket"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M102.473 222.606C120.545 219.048 174.295 237.124 183.474 217.606C201.63 179 167.935 125.573 164.544 82L136.797 82C133.754 82 113.075 121.642 113.056 147.397C113.038 170.914 91.1554 185.851 102.473 222.606Z"
                            fill="#1F28CF"
                        />
                        <g id="right_arm">
                            <path
                                id="Hand_2"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M235 140.74L250.247 132.364C250.247 132.364 253.455 120.154 257.918 120.077C260.204 119.014 256.224 129.3 260.556 128.408C264.889 127.516 275.464 119.651 277.286 121.248C279.982 123.61 277.578 130.864 274.746 134.473C269.453 141.218 265.071 143.524 254.238 146.544C245.743 148.913 235.868 156.04 235.868 156.04L235 140.74Z"
                                fill="#997659"
                            />
                            <path
                                id="Sleeve_2"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M160.5 98C160.5 98 159.006 137.625 177.854 144.099C196.703 150.572 245.036 133.373 245.036 133.373C245.036 133.373 256.34 156.758 255.487 166.717C148.137 222.792 102.696 166.875 136.387 98C143.08 86.7939 156.267 79.0598 160.5 98Z"
                                fill="#1F28CF"
                            />
                        </g>
                    </g>
                </svg>
            </Svgimg>
        </Block>
        <Block>
            <Header>
                <H1>MAKER</H1>
                <Description>메이커 동아리는 코딩, 모델링, 3d 프린팅을 포함한 복합적인 maker 활동을 하는 동아리입니다.</Description>
                <JoinLink>가입하기</JoinLink>
            </Header>
        </Block>
    </Section>
);
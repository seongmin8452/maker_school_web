import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    padding-top: calc(20px + 10vh);
    margin: 0 15vw;
    @media screen and (max-width: 800px) {
        margin: 0 5vw;
    }
`;

const Title = styled.h1`
    font-size: 3em;
    font-weight: 600;
    line-height: 150%;
    margin-bottom: 0.7em;
    width: 100%;
    padding-bottom: 0.3em;
    border-bottom: 1px solid #e9e9e9;
`;

const ProjectContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
`;

const Project = styled.div`
    background-color: white;
    height: 150px;
    background-color: #fff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 10px 21px #e7eeef;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProjectName = styled.div`
    font-size: 1.2em;
    font-weight: 500;
`;

export default () => (
    <Content>
        <Title>Projects</Title>
        <ProjectContainer>
            <Project>
                <ProjectName>동아리 홈페이지 만들기</ProjectName>
            </Project>
            <Project>
                <ProjectName>1/3 사이버 트럭 만들기</ProjectName>
            </Project>
            <Project>
                <ProjectName>VR 만들기</ProjectName>
            </Project>
            <Project>
                <ProjectName>(대충 프로젝트)</ProjectName>
            </Project>
            <Project>
                <ProjectName>(대충 프로젝트)</ProjectName>
            </Project>
            <Project>
                <ProjectName>(대충 프로젝트)</ProjectName>
            </Project>
        </ProjectContainer>
    </Content>
);

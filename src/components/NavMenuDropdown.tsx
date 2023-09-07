`use client`

import styled from "styled-components";
import {useEffect, useState} from "react";
import PrevNextButton from "@/components/svgs/PrevNextButton";

export default function NavMenuDropdown({visible, menu}:{visible: boolean; menu: string;}){

    const [transition, setTransition] = useState(false)
    const [pathFocusIndex, setPathFocusIndex] = useState(0);
    const [tagFocusIndex, setTagFocusIndex] = useState(0);

    useEffect(() => {
        if (visible) {
            if (!transition) setTransition(true)
        }
        else setTransition(false)
    }, [visible])

    const onPathSlideChange = (next: boolean) => {
        next ? setPathFocusIndex(pathFocusIndex-1) : setPathFocusIndex(pathFocusIndex+1);
    }

    const onTagSlideChange = (next: boolean) => {
        next ? setTagFocusIndex(tagFocusIndex-1) : setTagFocusIndex(tagFocusIndex+1);
    }

    return (
        <NavMenuWrapper visible={visible}>
            <MenuSlider focus={menu === '경로'} right={false} visible={visible} transition={transition}>
                <MenuSection>
                    <MenuTitle>
                        경로
                    </MenuTitle>
                    <MenuGrid slidePosition={pathFocusIndex}>
                        <GridItem>
                            <GridItemText>
                                /
                            </GridItemText>
                        </GridItem>
                        <GridItem>
                            <GridItemText>
                                /FrontEnd
                            </GridItemText>
                        </GridItem>
                        <GridItem>
                            <GridItemText>
                                /BackEnd
                            </GridItemText>
                        </GridItem>
                        <GridItem>
                            <GridItemText>
                                /한글
                            </GridItemText>
                        </GridItem>
                        <GridItem>
                            <GridItemText>
                                /한글
                            </GridItemText>
                        </GridItem>
                        <GridItem>
                            <GridItemText>
                                /한글
                            </GridItemText>
                        </GridItem>
                        <GridItem>
                            <GridItemText>
                                /한글
                            </GridItemText>
                        </GridItem>
                        <GridItem>
                            <GridItemText>
                                /한글
                            </GridItemText>
                        </GridItem>
                        <GridItem>
                            <GridItemText>
                                /한글
                            </GridItemText>
                        </GridItem>
                    </MenuGrid >
                    <MenuGrid slidePosition={pathFocusIndex+1}>
                        <GridItem>
                            <GridItemText>
                                /
                            </GridItemText>
                        </GridItem>
                        <GridItem>
                            <GridItemText>
                                /FrontEnd
                            </GridItemText>
                        </GridItem>
                        <GridItem>
                            <GridItemText>
                                /BackEnd
                            </GridItemText>
                        </GridItem>
                        <GridItem>
                            <GridItemText>
                                /한글
                            </GridItemText>
                        </GridItem>
                        <GridItem>
                            <GridItemText>
                                /한글
                            </GridItemText>
                        </GridItem>
                        <GridItem>
                            <GridItemText>
                                /한글
                            </GridItemText>
                        </GridItem>
                        <GridItem>
                            <GridItemText>
                                /한글
                            </GridItemText>
                        </GridItem>
                        <GridItem>
                            <GridItemText>
                                /한글
                            </GridItemText>
                        </GridItem>
                        <GridItem>
                            <GridItemText>
                                /한글
                            </GridItemText>
                        </GridItem>
                    </MenuGrid>
                    <PrevNextButton next={false} onSlideChange={onPathSlideChange}/>
                    <PrevNextButton next={true} onSlideChange={onPathSlideChange}/>
                </MenuSection>
            </MenuSlider>
            <MenuSlider focus={menu === '태그'} right={true} visible={visible} transition={transition}>
                <MenuSection>
                    <MenuTitle>
                        태그
                    </MenuTitle>
                    <MenuGrid slidePosition={tagFocusIndex}>
                        <GridItem>
                            <GridItemText2>
                                FrontEnd
                            </GridItemText2>
                        </GridItem>
                        <GridItem>
                            <GridItemText2>
                                /FrontEnd
                            </GridItemText2>
                        </GridItem>
                        <GridItem>
                            <GridItemText2>
                                /BackEnd
                            </GridItemText2>
                        </GridItem>
                        <GridItem>
                            <GridItemText2>
                                /한글
                            </GridItemText2>
                        </GridItem>
                        <GridItem>
                            <GridItemText2>
                                /한글
                            </GridItemText2>
                        </GridItem>
                        <GridItem>
                            <GridItemText2>
                                /한글
                            </GridItemText2>
                        </GridItem>
                        <GridItem>
                            <GridItemText2>
                                /한글
                            </GridItemText2>
                        </GridItem>
                        <GridItem>
                            <GridItemText2>
                                /한글
                            </GridItemText2>
                        </GridItem>
                        <GridItem>
                            <GridItemText2>
                                /한글
                            </GridItemText2>
                        </GridItem>
                    </MenuGrid>
                    <MenuGrid slidePosition={tagFocusIndex+1}>
                        <GridItem>
                            <GridItemText2>
                                /
                            </GridItemText2>
                        </GridItem>
                        <GridItem>
                            <GridItemText2>
                                /FrontEnd
                            </GridItemText2>
                        </GridItem>
                        <GridItem>
                            <GridItemText2>
                                /BackEnd
                            </GridItemText2>
                        </GridItem>
                        <GridItem>
                            <GridItemText2>
                                /한글
                            </GridItemText2>
                        </GridItem>
                        <GridItem>
                            <GridItemText2>
                                /한글
                            </GridItemText2>
                        </GridItem>
                        <GridItem>
                            <GridItemText2>
                                /한글
                            </GridItemText2>
                        </GridItem>
                        <GridItem>
                            <GridItemText2>
                                /한글
                            </GridItemText2>
                        </GridItem>
                        <GridItem>
                            <GridItemText2>
                                /한글
                            </GridItemText2>
                        </GridItem>
                        <GridItem>
                            <GridItemText2>
                                /한글
                            </GridItemText2>
                        </GridItem>
                    </MenuGrid>
                    <PrevNextButton next={false} onSlideChange={onTagSlideChange}/>
                    <PrevNextButton next={true} onSlideChange={onTagSlideChange}/>
                </MenuSection>
            </MenuSlider>

        </NavMenuWrapper>
    )
}

type Props = {
    backgroundColor?: string;
    color?: string;
    visible?: boolean
    focus?: boolean
    right?: boolean
    transition?: boolean
    slidePosition?: number
};

const NavMenuWrapper = styled.div<Props>`
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: calc(90px + 50px + 360px);
  background: rgba(0, 0, 0, 0.70);
  border-radius: 0 0 30px 30px;

  transition: transform 1s ease;
  transform: translateY(${({visible}) => visible ? '0%' : '-100%'});
`

const MenuSlider = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  padding: 90px 0 50px;
  
  width: 100%;
  ${({transition}) => transition ? 'transition: transform 1s ease' : ''};
  transform: translateX(${({focus, right}) => focus ? '0%' : right ? '100%' : '-100%'});
`

const MenuSection = styled.div`
  position: relative;
  
  width: 1000px;
  margin: 0 30px;
  height: 360px;
  border-radius: 30px;
  background: #FFF;
  overflow: hidden;
  
  @media (min-width: 1060px) {
    margin: 0 auto;
  }
`

const MenuTitle = styled.h1`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const MenuGrid = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 50px 44px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);;
  grid-template-rows: repeat(3, 1fr);
  
  transform: translateX(${({slidePosition}) => slidePosition ? `${slidePosition * 100}%` : '0%'});
  transition: transform 0.3s ease-out;
`

const GridItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GridItemText = styled.span`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
  transition: transform 0.3s ease;
  
  &:hover{
    cursor: pointer;
    transform: scale(1.2);
  }
`

const GridItemText2 = styled.span`
  padding: 0 20px;
  height: 50px;
  border-radius: 25px;
  background: #4F4F4F;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #FFF;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  transition: transform 0.3s ease;

  &:hover{
    cursor: pointer;
    transform: scale(1.1);
  }
`
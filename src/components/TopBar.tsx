'use client'

import styled from "styled-components";
import {selectThemeColors} from "@/redux/themeSlice";
import {useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import NavMenuDropdown from "@/components/NavMenuDropdown";

const sideWide = 100;

export default function TopBar() {
    const [hover, setHover] = useState(false);
    const [visibleMenu, setVisibleMenu] = useState(false);
    const [menu, setMenu] = useState('');
    const [width, setWidth] = useState(0);
    const theme = useSelector(selectThemeColors);
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            const element = ref.current;
            const computedStyle = window.getComputedStyle(element);
            const initialWidth = parseInt(computedStyle.width);
            setWidth(initialWidth);
        }
    }, []);

    return (
        <HeaderWrapper onMouseLeave={() => {
            if (visibleMenu) setVisibleMenu(false)
        }}>
            <TopBarNav backgroundColor={theme.topBarBackgroundColor}
                       visibleMenu={visibleMenu}
                       width={hover || visibleMenu ? width+sideWide+sideWide : width}
                       onMouseEnter={() => setHover(true)}
                       onMouseLeave={() => setHover(false)}>
                <NavSide width={hover || visibleMenu ? sideWide : 0} margin={`0 20px 0 0`} left={true}>
                    <NavSideText
                        onClick={() => {
                        setVisibleMenu(true);
                        setMenu('경로');
                    }}>
                        경로
                    </NavSideText>
                </NavSide>
                <NavHome ref={ref}>
                    Heo
                </NavHome>
                <NavSide width={hover || visibleMenu ? sideWide : 0} margin={`0 0 0 20px`} left={false}>
                    <NavSideText
                        onClick={() => {
                        setVisibleMenu(true);
                        setMenu('태그');
                    }}>
                        태그
                    </NavSideText>
                </NavSide>
            </TopBarNav>
            <NavMenuDropdown
                menu={menu}
                visible={visibleMenu}/>
        </HeaderWrapper>
    )
}

type Props = {
    backgroundColor?: string;
    color?: string;
    width?: number;
    margin?: string;
    left?: boolean
    visibleMenu?: boolean
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  z-index: 1;
`

const TopBarNav = styled.nav<Props>`
  height: 42px;
  padding: 0 63px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${({backgroundColor}) => backgroundColor};
  border-radius: 21px;
  transition: width 0.3s ease;
  ${({width}) => width === 0 ? null : `width: ${width}px`};
  opacity: ${({visibleMenu}) => visibleMenu ? 1 : 0.5};
  z-index: 1;
  &:hover{
    opacity: 1;
  }
`

const NavHome = styled.div`
  z-index: 1;
  color: #585858;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
  &:hover{
    cursor: pointer;
  }
`

const NavSide = styled.div<Props>`
  width: ${({width}) => `${width}px`};
  margin: ${({margin}) => margin};
  transition: width 0.3s ease;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: ${({left}) => left ? `flex-start` : `flex-end`};
  align-items: center;
  
`

const NavSideText = styled.div`
  color: #585858;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
  
  &:hover{
    cursor: pointer;
    font-weight: 700;
  }
`
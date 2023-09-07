'use client'


import {useSelector} from "react-redux";
import {selectThemeColors} from "@/redux/themeSlice";
import styled from "styled-components";

export default function Test() {
    const theme = useSelector(selectThemeColors)
    console.log(theme)

    return (
        <PageBackground color={theme.backgroundColor1}>

        </PageBackground>
    )
}

const PageBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({color}) => color};
`


import styled from "styled-components";
import {hoist} from "next/dist/build/webpack/loaders/next-route-loader/helpers";
import {useState} from "react";


export default function PrevNextButton({next, onSlideChange}:{next: boolean, onSlideChange: (next: boolean) => void}) {
    const [hover, setHover] = useState(false)


    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="44" viewBox="0 0 25 44" fill="none"
             next={next}
             onClick={() => onSlideChange(next)}
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}>
            <Path d="M23 2L3 22.5714L23 42" hover={hover}/>
        </Svg>
    )
}

type Props = {
    hover?: boolean
    next?: boolean
}

const Svg = styled.svg<Props>`
  position: absolute;
  top: 50%;
  ${
          ({next}) => {
            if (next) return 'right: 24px; transform: rotate(180deg) translateY(50%);;'
            else return 'left: 24px; transform: translateY(-50%);'
          }
  }
  
  &:hover{
    cursor: pointer;
  }
`

const Path = styled.path<Props>`
  stroke-width: ${({hover}) => hover ? 5 : 3};
  stroke-opacity: 0.5;
  stroke: black;
  
  transition: stroke-width 0.3s ease;
`
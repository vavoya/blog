"use client"

import Com from "@/app/test/com";
import styled from "styled-components";

const tt = `<BB>
                으앙
            </BB>`
export default () => (
    <div>
        <ul>
            <li> Email: myeamil@example.com</li>
            <li> Twitter: @myusername </li>
            <li> Instagram: myusername </li>
        </ul>
        <Com></Com>
        <AA>
            <BB>
                '으앙'
            </BB>
            <BB>
                으앙2
            </BB>
            <BB>
                으앙3
            </BB>
            <BB>
                으앙4
            </BB>
            <BB>
                <MyButton />
            </BB>
        </AA>
    </div>
)

const AA = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`

const BB = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  border-radius: 10px;
  border: white solid 1px;
  &:hover {
    border-color: aqua;
  }
`

const buttonStyles = {
    backgroundColor: 'blue',
    color: 'black',
};

function MyButton() {
    return <button css={buttonStyles}>Click me!</button>;
}


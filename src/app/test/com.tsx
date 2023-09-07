export default () => (
    <div>
        <h1>
            여러개 추가할 경우 = 여러번 호출?, 장바구니에서 메뉴 들어간 경우 = 이건 장바구니 추가 안뜨게 하고&nbsp;
            {typeof window === "undefined" ? 'server' : 'client'}
        </h1>
    </div>
)
function Item({ code, description }) {
    return (
        <>
        <li>
            <div>
                { code } | { description } { code }
            </div>
        </li>
        </>
    )
}

export default Item;
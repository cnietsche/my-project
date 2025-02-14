import Item from './Item';

function List() {
    return (
        <>
            <p>My list</p>
            <ul>
                <Item code={ 1 } description="Item" />
                <Item code={ 2 } description="Item" />
                <Item code={ 3 } description="Item" />
                <Item code={ 4 } description="Item" />
            </ul>
        </>
    )
}

export default List;
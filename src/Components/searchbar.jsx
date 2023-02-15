export default function Searchbar({filterText, inStockOnly ,onFilterText,onInstockOnly}){
    return(
        <form>
            <input type='text' value={filterText} placeholder='Search...' aria-autocomplete="both" onChange={(e)=>onFilterText(e.target.value)}/>
            <br/>
            <label>
                <input type='checkbox' checked={inStockOnly} onChange={(e)=>onInstockOnly(e.target.checked)} />
                {' '}
                only show products on stock
            </label>
        </form>
    )
}
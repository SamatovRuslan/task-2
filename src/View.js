
import Sort from './Sort'

function View(props) {

    return <div>
        {props.items.map((item, index)=>{
            return <Sort value={item.block} key={index}/>
        })}
    </div>
}

export default View

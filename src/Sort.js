import './Sort.css'

function Sort(item) {
    console.log(item.value);   
    if(item.value === 'yellow'){
        return <div>
            <div style={{backgroundColor: "yellow", width: "100px", height: "100px"} }></div>
        </div>
    }else if(item.value==='green'){
        return <div>
        <div style={{backgroundColor: "green", width: "100px", height: "100px"}}></div>
    </div>
    }else if(item.value==='color'){
        return <div>
        <div style={{backgroundColor: "lime", width: "100px", height: "100px"}}></div>
    </div>
    }else{ 
        return <div>
        <div style={{backgroundColor: "red", width: "100px", height: "100px"}}></div>
    </div>
    }  
}

export default Sort;

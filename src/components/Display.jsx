

function Display (props) {
    console.log(props)

    if (props.giphy) {
        return <div className="display">
        <img src={props.giphy.data.images.original.url} />
    </div>
    } else {
        return 
    }

}

export default Display
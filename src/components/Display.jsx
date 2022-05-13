

function Display (props) {
    console.log(props)

    if (props.giphy) {
        return <div>
        <img src={props.giphy.data.images.original.url} />
    </div>
    } else {
        return 
    }

}

export default Display
import './ImageList.css'

function ImageShow ({ image }) {
    return <div><img className="img" src={image.urls.small} alt={image.alt_description}></img></div>;
}

export default ImageShow;
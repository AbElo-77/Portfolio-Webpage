import '../index.css'

function Button() {

    const handleClick = () => {
        window.scrollBy({
            top: window.innerHeight, 
            left: 0,
            behavior: "smooth"
        });
    }
    
    return (
    <div onClick={handleClick} style={{
        border: "3px solid white", 
        borderRadius: "30px",
        width: "2%", 
        height: "30%", 
        display: "flex", 
        justifyContent: "center", 
        justifySelf: "center",
        cursor: "pointer",
        }}>
        <div className="moving-dot" style={{border: "1px solid white", borderRadius: "50%", backgroundColor: "white", width: "30%", height: "15%"}}>
        </div>
    </div>
    )
}

export default Button
const IconButton = ({ hide, buttonClass, onClick, icon }) => {
    return (
        <>
            {
                !hide && < button
                    onClick={onClick}
                    className={`btn btn-${buttonClass}`}>
                    <i className={`fa fa-${icon}`}></i>
                </button>
            }
        </>
    )
}

export default IconButton;
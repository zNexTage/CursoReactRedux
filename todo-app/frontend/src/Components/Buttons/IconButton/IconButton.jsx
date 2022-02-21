const IconButton = ({ hide, buttonClass, onClick, icon, type }) => {
    return (
        <>
            {
                !hide && < button
                    type={type}
                    onClick={onClick}
                    className={`btn btn-${buttonClass}`}>
                    <i className={`fa fa-${icon}`}></i>
                </button>
            }
        </>
    )
}

export default IconButton;
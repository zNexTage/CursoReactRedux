import StringBuilder from "../../Builders/StringBuilder";

const Grid = ({ lg, md, sm, xs, children }) => {

    const toCssClasses = () => {
        const bootstrapSizes = { lg, md, sm, xs };
        const classes = new StringBuilder();

        Object.keys(bootstrapSizes).forEach((sizeKey) => {
            const size = bootstrapSizes[sizeKey];

            if (size) {
                const className = `col-${sizeKey}-${size}`;

                classes.append(` ${className}`);
            }
        });

        return classes.toString();
    }

    const classes = toCssClasses();

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Grid;
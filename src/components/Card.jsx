import PropTypes from "prop-types"

const Card = ({projectname, description, subname}) => {
    return(
        <>
            <div className="mt-5 p-5 w-72 h-56 bg-slate-200 rounded-md border-l-4 border-emerald-400">
                <p className="text-md text-slate-700">{subname}</p>
                <p className="text-2xl font-bold pb-2">{projectname}</p>
                <p className="text-md">
                    {description}
                </p>
            </div>
        </>
    )
}

Card.propTypes = {
    subname: PropTypes.string.isRequired,
    projectname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Card
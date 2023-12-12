import PropTypes from "prop-types"
// import prof from '../assets/aditya.jpg'

const Card = ({projectname, description, subname, tag, image}) => {
    return(
        <>
            <div className="mt-5 bg-neutral-100 rounded-md border border-neutral-200 overflow-hidden">
                <img src={image} width={'100%'} className='h-auto max-w-full' alt="" />
                <div className="p-5">
                    <p className="text-md text-slate-700">{subname}</p>
                    <p className="text-2xl font-bold pb-2">{projectname}</p>
                    <div className="flex flex-row gap-1">
                        {tag.map((items) => (
                            <span class="bg-indigo-200 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{items}</span>
                        ))}
                    </div>
                    <p className="text-md mt-2">
                        {description}
                    </p>
                </div>
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
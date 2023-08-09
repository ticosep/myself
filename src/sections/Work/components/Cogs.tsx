import cog from '../../../images/cog.png';

const Cogs = () => {
    return (
        <div className="flex float-left w-1/5 h-1/5 mr-2">
            <img
                className="object-contain w-3/5 animate-spin-slow"
                src={cog}
                alt="image_cog1"
            />
            <img
                className="object-contain w-2/5 animate-spin-semi-slow"
                src={cog}
                alt="image_cog2"
            />
        </div>
    );
};

export default Cogs;

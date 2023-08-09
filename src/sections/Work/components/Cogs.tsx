import cog1 from '../../../images/cog1.png';
import cog2 from '../../../images/cog2.png';

const Cogs = () => {
    return (
        <div className="flex float-left w-2/4 h-2/4 mr-2">
            <img
                className="object-contain w-3/5 animate-spin-slow"
                src={cog1}
                alt="image_cog1"
            />
            <img
                className="object-contain w-2/5 animate-spin-slow"
                src={cog2}
                alt="image_cog2"
            />
        </div>
    );
};

export default Cogs;

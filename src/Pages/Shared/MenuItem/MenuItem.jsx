 

const MenuItem = ({item}) => {
    const {name, image, price , recipe} = item
    return (
        <div className="flex space-x-6">
            <img style={{borderRadius: '0px 282px 276px 314px'}} className="w-[100px] h-[90px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}-------------------------</h3>
                <p>{recipe}</p>
                
            </div>
            <p className="text-yellow-500">{price}</p>
        </div>
    );
};

export default MenuItem;
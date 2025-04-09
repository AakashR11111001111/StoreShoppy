const OverviewCard = ({title, value, growth, bg, status}) => {
    return (
        <>
            <div className="h-fit w-56 rounded-2xl py-3 px-3.5" style={{backgroundColor: bg}}>
                <h4 className={`font-semibold text-sm my-2.5`}>{title}</h4>
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold my-2.5">{value}</h3>
                    <div className="flex items-center gap-1.5">
                        <h5>{growth}</h5>
                        <img className="h-3.5" src={status === "profit" ? "/profit.png" : "/loss.png"} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default OverviewCard;
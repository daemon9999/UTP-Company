export default function UserDetail({user}) {
    
    return (
        <div className="p-8 rounded-xl bg-blue-400 gap-y-3 flex flex-col items-center basis-1/4 ">

            <div className="w-[200px] h-[200px]">
                <img src={user.img} alt={user.name} className="w-full h-full rounded-full" />
            </div>


            <h4 className="text-white font-bold text-lg">{user.name}</h4>
            <h4 className="text-white  font-semibold  -mt-1">{user.work}</h4>
            
        </div>
    )
}
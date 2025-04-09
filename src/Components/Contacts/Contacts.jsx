import axios from "axios";
import { useEffect, useState } from "react";

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    useEffect(()=>{
        async function getContacts(){
            const data = await axios.get("https://jsonplaceholder.typicode.com/users")
            setContacts(data.data);   
        }
        getContacts()
    },[])
    return (

        <div className="py-5 px-2">
        <h3 className="font-semibold">Contacts</h3>
        {
            contacts.map((ele) => 
            <div key={ele.id} className="py-2.5 h-11 flex items-center gap-2.5 my-1">
                <div className="h-full">
                    <img className="h-full" src="/pfp.png" alt="" />
                </div>
                <div className="">
                    <h6 className="text-[13px]">{ele.username}</h6>
                    <h6 className="text-zinc-400 text-[12px]">{ele.name}</h6>
                </div>
            </div>)
        }
        
    </div>
    )
}
export default Contacts;
import React,{useMemo} from "react";
import classes from './DemoList.module.css';

const DemoList=(props)=>{
    const { items,order } = props;
    console.log(order)
const list=useMemo(()=>
    { if(order==true)
        {
            console.log('items --- sorted');
            return items.sort((a,b)=>a-b);
        }
       else
       {
        console.log('items *** sorted');
        return items.sort((a,b)=>b-a);
       } 
      
    },[order])
    
return(
     <div>
      <h2>{props.title}</h2>
      <ul className={classes.ul} >
         {list.map((item)=>(
          <li className={classes.li} key={item}>{item}</li>  
         ))}
    </ul>  
    </div>
);
};
export default React.memo(DemoList);
